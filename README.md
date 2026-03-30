> 🔐 Authentication App - Frontend
> 📌 Overview
> This project is a frontend authentication system built with React, providing secure user access with JWT-based authentication and role-based authorization. It includes login, registration, protected routes, and token refresh functionality.
> 🚀 Features
> User Registration & Login
> JWT Authentication (Access & Refresh Tokens)
> Role-Based Access Control (Admin, Editor, User)
> Protected Routes using React Router v7
> Persistent login with Refresh Token handling
> Secure API communication using Axios Interceptors
> Automatic token refresh on expiration
> Clean and responsive UI
> 🛠️ Technologies Used
> React.js
> React Router DOM (v7)
> Axios
> JWT (JSON Web Tokens)
> Easy Peasy (State Management)
> CSS / Custom Styling

🔑 Authentication Flow
User logs in with credentials.
Server returns Access Token and Refresh Token.
Access Token is used for protected API requests.
When expired, Refresh Token generates a new Access Token automatically.
Routes are protected based on user roles.
🔐 Protected Routes
User (2000) → Home
Editor (1984) → Editor Page
Admin (5150) → Admin Dashboard
Editor + Admin → Lounge
⚙️ Installation & Setup
Bash

# Clone the repository

git clone https://github.com/solafaissa042/Frontend-Section-Of-Node

# Install dependencies

npm install

# Run the app

npm run dev

## 📸 Screenshots

![Login Page](./screenshots/front-reg1.png)
![Register Page](./screenshots/front-reg2.png)
![Home Page](./screenshots/front-reg3.png)

Author
Solafa Issa

GitHub: https://github.com/solafaissa042
