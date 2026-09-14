backend/
├── src/
│   ├── config/          # DB connections (MongoDB, Pinecone) aur Env setup
│   ├── controllers/     # Request/Response handlers (e.g., chatController, docController)
│   ├── middlewares/     # Auth checks, Error handling, Multer (file upload) config
│   ├── models/          # MongoDB Schemas (User, Document, Chat)
│   ├── routes/          # API endpoints (e.g., /api/chat, /api/upload)
│   ├── services/        # CORE LOGIC: Langchain, RAG pipeline, PDF processing yahan hoga
│   ├── utils/           # Helper functions (Custom Error classes, API response formatters)
│   ├── app.js           # Express app initialization aur middlewares apply karna
│   └── server.js        # Server ka entry point (app.listen yahan hoga)
├── tmp/                 # Temporarily PDFs store karne ke liye (upload hone ke baad delete kar denge)
├── .env                 # Secret keys (API keys, DB URIs)
├── .gitignore           # Node_modules aur .env ko git se hide karne ke liye
└── package.json