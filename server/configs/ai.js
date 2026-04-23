import OpenAI from "openai";

const ai = new OpenAI({
    apiKey: process.env.OpenAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
});

export default ai