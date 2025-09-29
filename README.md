# Freelance Pro

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

This is the repository for the "Freelance Pro" application, a full-stack project designed to connect freelancers with clients. The project is split into a React-based frontend and a Node.js/Express backend.

## ✨ Features

The application includes the following features:

- **User Authentication**: Supports both standard email/password registration and Google OAuth.
- **User Settings**: A dedicated page for users to manage their profile information.
- **Password Management**: Users can update their password securely.
- **API Integration**: Uses RTK Query for efficient data fetching, caching, and state synchronization with the backend.
- **Responsive UI**: Styled with Tailwind CSS for a modern, mobile-first design.
- **User Feedback**: Employs `react-hot-toast` for clear and non-intrusive notifications.

## 🛠️ Tech Stack

### Frontend

- **Framework**: React
- **State Management**: Redux Toolkit & RTK Query
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Notifications**: React Hot Toast

### Backend

*(Note: This is an assumed stack based on common practices. Please update as needed.)*

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your system.

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone <your-repository-url>
    cd freelancePro
    ```

### Backend Setup

1.  **Navigate to the backend directory**
    ```bash
    cd Backend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up environment variables**
    Create a `.env` file in the `Backend` root directory and add the necessary variables.
    ```env
    PORT=5000
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>
    ```

4.  **Run the backend server**
    ```bash
    npm run dev
    ```
    The server will be running on `http://localhost:5000`.

### Frontend Setup

1.  **Navigate to the frontend directory (from the root)**

    ```bash
    cd Frontend
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Set up environment variables**

    Create a `.env` file in the `Frontend` root directory. Point the API URL to your running backend server.

    ```env
    VITE_API_BASE_URL=http://localhost:5000/api
    ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` (or the port specified in the output) to view the app in your browser.

## 📁 Folder Structure

The repository is structured as a monorepo with separate directories for the `Frontend` and `Backend`.

```plaintext
freelancePro/
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── Frontend/
    └── src/
        ├── Redux/
        ├── features/
        ├── App.jsx
        └── main.jsx
```

---
