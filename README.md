# PassVault - Password Manager

PassVault is a responsive and modern password manager built with **React.js**, **Vite**, **Tailwind CSS**, **Express.js** and **MongoDb**. It allows users to securely store, edit, and delete their passwords with a clean and intuitive interface.

# ScreenShots
![image](https://github.com/user-attachments/assets/ee52a5a4-5df8-4f14-a828-0ffbfa393aff)

## Mobile View

![image](https://github.com/user-attachments/assets/c625ae48-04c8-4196-848f-1e81346065e8)

## Features

- **Add Passwords:** Save website credentials (site, username/email, password) securely.
- **Edit Passwords:** Update existing credentials easily.
- **Delete Passwords:** Remove credentials you no longer need.
- **Copy to Clipboard:** Instantly copy site, username, or password with a single click.
- **Show/Hide Password:** Toggle password visibility for convenience.
- **Persistent Storage:** All data is stored on Backend using Express.js and MongoDb.
- **Responsive Design:** Optimized for all screen sizes, from mobile to desktop.
- **Modern UI:** Built with Tailwind CSS for a sleek and user-friendly experience.
- **Notifications:** Get instant feedback for actions like save, delete, and copy using [react-toastify](https://fkhadra.github.io/react-toastify/introduction/).

## How It Works

1. **Frontend:**  
   The React frontend provides a form to add new passwords and displays all saved credentials in a table. Each entry can be copied, edited, or deleted. Passwords are masked for security.

2. **Backend:**  
   The Express.js backend exposes three main endpoints:
   - `GET /` — Fetch all saved passwords.
   - `POST /` — Add a new password.
   - `DELETE /` — Delete a password by its ID.

   The backend uses MongoDB to persist all password data.

3. **Clipboard Copy:**  
   Click the copy icon next to any field to copy its value to your clipboard, with a toast notification for feedback.

4. **Password Visibility:**  
   Click the eye icon to toggle password visibility when entering a new password.

## Getting Started

### Prerequisites-

- Node.js and npm
- MongoDB running locally or a MongoDB Atlas connection

### Setup-

#### Backend

1. Navigate to the `Backend` directory:
   cd Backend

2. Install dependencies:
   npm install

3. Configure your .env file (already present):
   MONGO_URI=mongodb://localhost:27017
   DB_NAME=PassVault
   
5. Start the backend server:
   node --watch server.js

#### Frontend

1. Clone & Navigate to the project root:
  cd..

2. Install dependencies:
  npm install

3. Start the deveploment server:
  npm run dev

## 👨‍💻 Author
  
GitHub: [@CodzHorizon](https://github.com/CodzHorizon)

---

## ©️ Copyright

© 2025 CodzHorizon. All rights reserved.

This project is intended for educational and personal use only.
