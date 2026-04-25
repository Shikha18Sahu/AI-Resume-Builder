import { response } from "express";
import Resume from "../models/resume.js";
import ai from "../configs/ai.js";

// controller for enchancing a resume's professional summary 
// POST: /api/ai/enhance-pro-sum
export const enhanceJobDescription = async(req,res) => {
  try {
     const { userContent }= req.body; 

     if(!userContent){
      return res.status(400).json({message: 'Missing required fields'})
     }
     
     const response = await ai.chat.completions.create({
       model: process.env.OPENAI_MODEL,
          messages: [
              {   role: "system",
                  content:"You are an expert in resume writing. Your task is to enhance the professional summary of a resume. The summary should be 1-2 sentences also highlighting key skills, experience, ans career objectives. Make it compelling and ATS-friendly. and only return text no option or anything else."
              },
              {
                  role: "user",
                  content: userContent,
              },
          ],
     })

     const enhancedContent = response.choices[0].message.content;
     return res.status(200).json({enhancedContent})

  } catch (error) {
     return res.status(400).json({message: error.message})
    
  }
}


// controller for enhancing a resume's job description
//POST: /api/ai/enhance-job-desc
export const enhanceProfessionalSummary = async(req,res) => {
  try {
     const { userContent }= req.body; 

     if(!userContent){
      return res.status(400).json({message: 'Missing required fields'})
     }
     
     const response = await ai.chat.completions.create({
       model: process.env.OPENAI_MODEL,
          messages: [
              {   role: "system",
                  content:"You are an expert in resume writing. Your task is to enhance the job description of a resume. The job description should be 1-2 sentences also highlighting responsibilities and achievement. Use action verbs and quantifiable results where possible. Make it ATS-friendly. and only return text no option or anything else."
              },
              {
                  role: "user",
                  content: userContent,
              },
          ],
     })

     const enhancedContent = response.choices[0].message.content;
     return res.status(200).json({enhancedContent})

  } catch (error) {
     return res.status(400).json({message: error.message})
    
  }
}

// Controller for uploading a resume to the database 
// POST: /api/ai/upload-resume
export const uploadResume = async(req,res) => {
  try {
     const {resumeText, title} = req.body;
     //cg 
     
     const userId = req.userId; 

     if(!resumeText){
      return res.status(400).json({message: 'Missing required fields'})
     }
     const trimmedText = resumeText.slice(0, 4000);
     
    const systemPrompt = "You are an expert AI agent that extracts structured data from resumes.";

const userPrompt = `
Extract information from this resume and return ONLY valid JSON.

Format:

{
  "professional_summary": "",
  "skills": [],
  "personal_info": {
    "full_name": "",
    "profession": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": ""
  },
  "experience": [
    {
      "company": "",
      "position": "",
      "start_date": "",
      "end_date": "",
      "description": "",
      "is_current": false
    }
  ],
  "projects": [
    {
      "name": "",
      "description": ""
    }
  ],
  "education": [
    {
      "institution": "",
      "degree": "",
      "field": "",
      "graduation_date": "",
      "gpa": ""
    }
  ]
}

Resume:
${trimmedText}
`;
     const response = await ai.chat.completions.create({
       model: process.env.OPENAI_MODEL,
          messages: [
              {   role: "system",
                  content:systemPrompt
              },
              {
                  role: "user",
                  content: userPrompt,
              },
          ],
          response_format: {type: 'json_object'}
     })

     const extractedData = response.choices[0].message.content;
     console.log("RAW AI RESPONSE:", extractedData); 
     const parsedData = JSON.parse(extractedData)
     const newResume = await Resume.create({userId, title, ...parsedData})

     res.json({resumeId: newResume._id})

  } catch (error) {
    console.log("OPENAI ERROR:", error);
     return res.status(400).json({message: error.message})
    
  }
}



