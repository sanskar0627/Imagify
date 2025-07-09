# 🚀 Imagify – AI Image Generator Web App

A sleek, modern full-stack SaaS platform to generate stunning AI images from text prompts. Built with the MERN stack, secure authentication, and seamless Razorpay payments.

---

## 🌟 Features

- 🔐 Secure JWT login/signup
- ✨ Text-to-image AI (ClipDrop API)
- 📦 Credit-based usage (1 credit = 1 image)
- 💳 Easy credit purchase via Razorpay
- 🧑‍💻 User dashboard for credits & images
- 🪄 Smooth animations & notifications
- 📱 Fully responsive UI

---

## 🔧 Tech Stack

| Frontend      | Backend         |
|---------------|----------------|
| React.js      | Node.js        |
| Tailwind CSS  | Express.js     |
| Axios         | MongoDB        |
| Framer Motion | Mongoose       |
| React Router  | JWT Auth       |
| Toastify      | Bcrypt         |
|               | Razorpay SDK   |
|               | ClipDrop API   |

---

## 💳 Credit Plans

| Plan      | Credits | Price  |
|-----------|---------|--------|
| Basic     | 100     | $10    |
| Advanced  | 500     | $50    |
| Business  | 5000    | $250   |

---

## 🛠️ Quick Start

1. **Clone the Repository**
    ```
    git clone https://github.com/your-username/imagify.git
    cd imagify
    ```

2. **Backend Setup**
    - Go to the backend folder:
      ```
      cd backend
      npm install
      ```
    - Create a `.env` file inside `backend/` and add your secrets:
      ```
      PORT=4000
      MONGODB_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      CLIPDROP_API=your_clipdrop_api_key
      RAZORPAY_KEY_ID=your_razorpay_key_id
      RAZORPAY_KEY_SECRET=your_razorpay_key_secret
      CURRENCY=INR
      ```
    - Start the backend server:
      ```
      npm run dev
      ```

3. **Frontend Setup**
    - Go to the frontend folder:
      ```
      cd ../frontend
      npm install
      ```
    - Create a `.env` file inside `frontend/` and add:
      ```
      VITE_BACKEND_URL=http://localhost:4000
      VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
      ```
    - Start the frontend client:
      ```
      npm run dev
      ```

---

## ✅ API Endpoints

- `POST /api/user/register` – Register
- `POST /api/user/login` – Login
- `POST /api/user/pay-razor` – Create Razorpay order
- `POST /api/user/verify-razor` – Verify payment & add credits
- `POST /api/image/generate` – Generate AI image

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/77b75eb0-b48d-44fb-aa17-b3b9132daa0f)
![image](https://github.com/user-attachments/assets/628a6973-87f2-4182-92fc-3989f82afe2a)
![image](https://github.com/user-attachments/assets/0915e1c4-5452-4bba-a483-91b0e4b2df06)



---

## 🙋‍♂️ Author

**Sanskar Shukla**  
Full Stack Developer | DSA Learner | Passionate Builder  
[🔗 GitHub](https://github.com/sanskar0627) • [🔗 LinkedIn](https://www.linkedin.com/in/sanskar2003/)

---

## ⭐ Show Your Support!

- Star this repo
- Fork it
- Contribute
- Share on social media

---

## 📃 License

SANSKAR SHUKLA

---

> If something doesn't work, just skip that part and enjoy the rest! The setup is clean and easy—get creative and make it yours.
