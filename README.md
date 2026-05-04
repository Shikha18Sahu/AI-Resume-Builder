🚀 AI Resume Builder (MERN Stack)

A full-stack AI-powered Resume Builder that helps users create, manage, and optimize professional resumes with ease. The platform leverages modern web technologies and AI to generate impactful, ATS-friendly resumes along with dynamic customization and sharing features.

✨ Features
🔐 Authentication
Secure user registration and login system
Protected routes for user-specific data
📝 Resume Management
Create resumes from scratch
Upload existing resumes (PDF) with auto-parsing
Edit and manage multiple resumes
🤖 AI-Powered Enhancements
Generate and improve professional summaries
Optimize job descriptions for ATS compatibility
AI-based resume parsing for uploaded files
🎨 Customization
Multiple resume templates
Real-time theme and color customization
Responsive and clean UI
🖼️ Media Handling
Upload profile images
Background removal and optimization
Image storage using ImageKit
🌐 Sharing & Export
Public/Private resume visibility toggle
Generate shareable resume links
Download/print resumes as PDF

🛠️ Tech Stack
Frontend
React.js
Tailwind CSS

Backend
Node.js
Express.js

Database
MongoDB

AI Integration
Google Gemini API

Media Handling
ImageKit

Deployment
Vercel (Frontend)
Render (Backend)

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/Shikha18Sahu/AI-Resume-Builder.git
cd your-repo-name
2. Setup Backend
cd server
npm install
npm run server
3. Setup Frontend
cd client
npm install
npm run dev

⚠️ Make sure the backend server is running before starting the frontend.

🔑 Environment Variables

Create a .env file in the server folder and add:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
🚀 Deployment
Frontend (Vercel)
Deploy the client folder on Vercel
Add environment variables if required
Connect with GitHub for continuous deployment
Backend (Render)
Deploy the server folder on Render
Add all environment variables in Render dashboard
Set start command:
npm run server
📌 Project Workflow
Built responsive UI using Tailwind CSS
Developed REST APIs with Express.js
Integrated MongoDB for data storage
Implemented AI features using Google Gemini
Integrated ImageKit for media processing
Deployed using Vercel and Render
📷 Screenshots


🚀 Future Improvements
More resume templates
Multi-language support
Advanced AI suggestions
Drag-and-drop resume sections
🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

📬 Contact
📧 sahushikhauptu@gmail.com

⭐ Support
If you like this project, give it a ⭐ on GitHub!
