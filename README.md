# 🤖 AI Resume Builder

> Full-stack AI-powered resume builder — create, manage, and optimize ATS-friendly resumes with smart customization and sharing.

🔗 **Live Demo:** [ai-resume-builder-lake-three.vercel.app](https://ai-resume-builder-lake-three.vercel.app) &nbsp;|&nbsp; ⭐ Star this repo if you find it useful!

![Tech Stack](https://img.shields.io/badge/React.js-61DAFB?style=flat&logo=react&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) ![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=flat&logo=google&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🔐 | **Auth** | Secure login, protected routes, JWT-based sessions |
| 📝 | **Resume management** | Create from scratch or upload & auto-parse existing PDFs |
| 🤖 | **AI enhancements** | ATS optimization, smart summaries, AI-based PDF parsing via Gemini |
| 🎨 | **Customization** | Multiple templates, real-time theme & color picker |
| 🖼️ | **Media handling** | Profile image upload with background removal via ImageKit |
| 🌐 | **Share & export** | Public/private toggle, shareable links, PDF download |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| AI | Google Gemini API |
| Media | ImageKit |
| Deployment | Vercel (frontend) · Render (backend) |

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/Shikha18Sahu/AI-Resume-Builder.git

# 2. Start backend
cd server && npm install && npm run server

# 3. Start frontend (in a new terminal)
cd client && npm install && npm run dev
```

> ⚠️ Make sure the backend is running before starting the frontend.

---

## 🔑 Environment Variables

Create a `.env` file inside the `server/` folder:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
```

---

## 🌍 Deployment

**Frontend → Vercel**
- Deploy the `client/` folder
- Add environment variables in Vercel dashboard
- Connect GitHub for auto-deploy on push

**Backend → Render**
- Deploy the `server/` folder
- Add all `.env` variables in Render dashboard
- Set start command: `npm run server`

---

## 🔮 Future Improvements

- More resume templates
- Drag-and-drop resume sections
- Multi-language support
- Advanced AI suggestions & scoring

---

## 📬 Contact

**Shikha Sahu** · [LinkedIn](https://www.linkedin.com/in/shikha-sahu-3b003b285/) · sahushikhauptu@gmail.com · [GitHub](https://github.com/Shikha18Sahu)
