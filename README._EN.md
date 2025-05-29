# Completo!
**AI-powered Assignment Format Verification System**

**Languages**: [🇰🇷 한국어](README.md) | [🇺🇸 English](README_EN.md)

## 🗂️ Presentation Materials
[👉 View Presentation Slides](https://www.canva.com/design/DAGoctCK6vY/mVjrt25BcsVvaDrliRBNbQ/view?utm_content=DAGoctCK6vY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99d67cfbba)

## 📌 Overview
![alt text](1.png)
Completo is an AI-powered document format verification service that began with the vision "Complete it, Perfect it, COMPLETO it!" 
Just as a perfect hot dog requires all the right ingredients, a perfect assignment needs not only content but also proper formatting.

**Core Values**
- Prevent students from losing points due to minor formatting mistakes
- Enable professors to focus on content evaluation
- Real-time format verification integrated with school LMS like Pusan National University's PLATO

Students can check file names, extensions, and document requirements in real-time before submission and fix errors immediately.

## 🎯 Problem Statement & Expected Benefits

**Current Problems**
- Frequent point deductions due to students' formatting mistakes
- Professors' repetitive format review burden
- Repeated mistakes due to delayed feedback

**Completo's Solutions**
- AI-powered real-time format verification - Automate repetitive format checking tasks to create self-directed learning environment
- Pre-submission error prevention - Students can self-check compliance and prevent unnecessary point deductions
- Enhanced efficiency for both professors and students - Solve the problem of repeated mistakes caused by late or insufficient feedback
- 
## 💼 Business Model & Impact

**Revenue Model**
- University License: Annual subscription-based B2B model
- SaaS Service: Usage-based pricing structure
- Enterprise Expansion: Document verification solutions with security features

**Market Analysis**
- TAM: 400 universities in Korea, approximately 3 million students
- Core Value: Eliminate professors' and grading assistants' format checking burden, reduce labor costs

**Performance Goals**
- 50% reduction in format-related point deductions
- 80% reduction in format review time
- System accuracy 95% or higher (based on 100 assignments + answer key tests)

## 🔧 Technical Innovation

**Core Differentiation**
- Existing: Prompt-based simple template checker vs **Completo**: Natural language understanding-based verification
- Integrated pipeline: LLM + Document Parser + Agent Workflow
- Real-time context-based condition interpretation
  
**✅ Upstage API Ustilization**

**Upstage Document Parser**
- Converts Korean/English assignment submission conditions written by professors into LLM-understandable format
- Converts student assignment files into structured data for comprehensive multimodal analysis
- Multimodal processing: Analyzes various document elements including text, images, tables

**Solar LLM**
- Makes judgments based on extracted conditions through custom prompt engineering
- Generates precise feedback on whether actual submissions meet the conditions

## 🚀 Key Features

- ✨ **Automatic Assignment Condition Parsing & Structuring**
  - Document Parser automatically analyzes submission conditions uploaded to LMS like PLATO
  - Converts natural language conditions into structured verification criteria
  - Supported formats: PDF, DOCX, etc.

- ✨ **Real-time Submission Verification**
  - Document Parser analyzes student submission file structure, then Solar LLM makes real-time compliance judgments
  - Verification items: Cover page presence, name/student ID inclusion, page count limits, etc.
  - Immediate feedback enables error correction before submission

- ✨ **Uncertainty Handling**
  - Clearly guides additional confirmation requirements when condition interpretation is ambiguous
  - Prevents submission errors due to misinterpretation

- ✨ **Feedback**
  - Specifically presents which parts are incorrect in order of deficient and satisfied conditions
  - Users can use this as specific criteria for improving assignments or grading


## 🖼️ Demo
**Actual Test Case**
![alt text](7.png)
![alt text](8.png)
- Assignment: "Introduction to Computer Vision: Assignment 4"
- Verification items: Cover page presence, student ID/name inclusion, section description completeness
- Result: Found 6 deficiencies and provided specific improvement suggestions

**Scenario 1: Student Perspective**
1. Upload assignment file
2. Check real-time verification results
3. Fix errors and re-verify
4. Submit perfect assignment

**Scenario 2: Professor Perspective**
1. Upload assignment conditions
2. Confirm automatic structuring
3. Automatic pre-verification of student submissions
4. Focus on content evaluation

## 🗺️ Future Roadmap

**Scalability**
- Verification of various official documents and report formats for NGO/NPO organizations
- Domain expansion to specialized fields like medical documents
- Introduction of RAG technology to provide customized improvement suggestions for students and grading assistance for professors

**Phased Development Plan**

| Phase | Duration | Goal | Key Content |
|-------|----------|------|-------------|
| **Phase 1** | 6 months | Technical Enhancement | Achieve 98% verification accuracy through RAG system, multilingual support (Korean/English/Japanese/Chinese) |
| **Phase 2** | 1-2 years | Market Expansion | Official PLATO integration, adoption by 50 major Korean universities, enterprise document management solution launch |
| **Phase 3** | 3-5 years | Ecosystem Building | Public institution document verification system, AI-based document quality improvement platform, global education market entry |

## 🔬 Technical Summary

- **Document Parser(document-parse-250508)**
- **Solar LLM(solar-pro2-preview)**

## 🧰 Tech Stack
- Languages: TypeScript, Python
- Frameworks: React, FastAPI, Vite

### System Architecture
![alt text](image.png)

## 🔧 Installation & Usage
### Frontend
- cd frontend
- npm run dev
### Backend
- Set API_KEY in (backend/.env/data.env)
- cd backend
- uv run fastapi run main.py

## 📁 Project Structure
```sh
/
├── frontend                 # Frontend code
│   ├── public/              # Static files
│   ├── src/                 # Source code
│   │   ├── assets/          # Images and other static assets
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page-level React components
│   │   ├── types/           # TypeScript type definitions
│   │   ├── App.tsx          # Main app file
│   │   ├── index.css        # Global styles
│   │   ├── main.tsx         # React app entry point
│   │   └── vite-env.d.ts    # Vite environment type definitions
│   ├── package.json         # Package settings and dependencies
│   ├── tailwind.config.js   # Tailwind CSS config
│   ├── tsconfig.json        # TypeScript config
│   ├── vite.config.ts       # Vite config file
│   └── index.html           # HTML template
├── backend                  # Backend code
│   ├── .env/                # Environment variable files
│   ├── app/                 # FastAPI application modules
│   │   ├── controllers/     # API controllers
│   │   ├── models/          # Data models and related files
│   │   ├── routes/          # API route definitions
│   │   ├── services/        # Business logic and services
│   ├── temp/                # Temporary file storage
│   └── main.py              # FastAPI application entry point
└── README.md                # Project documentation
```
## 🧑‍🤝‍🧑 Team Members

| Name    | Role     | GitHub                                      |
|---------|----------|---------------------------------------------|
| Sungwoo Jung   |   Leader   | https://github.com/qda-sw    |
| Nayeon Ahn      |   Member   | https://github.com/annaaa4701  |
| Jaewon Jung    |   Member   | https://github.com/wolfura-ark  |
| Seungwoo Lim   |   Member   | https://github.com/ChopinBag  |

## 💡 References & Inspiration

* [Upstage Document Parse](https://www.upstage.ai/products/document-parse)
* [Upstage: Building end-to-end RAG system using Solar LLM and MongoDB Atlas](https://www.upstage.ai/blog/en/building-rag-system-using-solar-llm-and-mongodb-atlas)
* [PLATO Official Documentation](https://plato.pusan.ac.kr)
