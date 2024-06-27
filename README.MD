# Customer Service App

This is a customer service application built with React for the frontend and Node.js with Express for the backend. It integrates Google OAuth for user authentication and uses MongoDB for data storage.

## Features

- Google OAuth login
- Submit customer service requests
- View customer service requests

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- Google Cloud Platform account for OAuth credentials
- Intercom account for messaging (optional)

## Getting Started

### 1. Clone the Repository


```bash
git clone https://github.com/mastervishu/oauth-intercom
cd oauth-intercom

```

### 2. Set Up Environment Variables
Create a `.env` file in the root directory of both the frontend and backend projects and add the following environment variables:
For Backend (`oauth-intercom/backend/.env`)

```bash
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
INTERCOM_ACCESS_TOKEN=your-intercom-access-token
MONGO_URI=your-mongodb-uri
```

### 3. Install Dependencies
# For Backend

```bash
cd backend
npm install
npm run build
```

# For Frontend
```bash
cd frontend
npm install
```

### 4. Run the Backend
```bash
npm start
```

### 5. Run the Frontend
```bash
npm start
```

### 6. Access the Application
Open your browser and navigate to `http://127.0.0.1:8080` to access the frontend of the application.

## Project Structure
```bash
frontend/
├── src/
│   ├── components/
│   │   ├── GoogleLogin.js
│   │   ├── CustomerServiceForm.js
│   │   └── CustomerServiceRequests.js
│   ├── App.tsx
│   └── index.tsx
├── public/
├── .env
├── package.json
└── README.md

backend/src/
├── models/
│   ├── User.ts
│   └── Request.ts
├── routes/
│   ├── auth.ts
│   └── customerService.ts
├── config/
│   └── passport.ts
├── app.ts
├── .env
├── package.json
└── README.md
```

# Contributing
Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.


