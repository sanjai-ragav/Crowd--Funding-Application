# Fundder 🌟

**Fundder** is a modern, community-powered crowdfunding web application built to connect passionate donors with verified campaigns. Whether raising funds for education, medical emergencies, or social development, Fundder ensures a seamless, highly secure, and exceptionally designed user experience.

---

## 🚀 Features
- **Premium Glassmorphism UI:** Stunning dark-themed aesthetics with micro-animations.
- **Secure Authentication:** Complete Login and Registration forms with persistent user states.
- **Role-Based Routing:** Protected Admin dashboards vs Standard User portals.
- **Mock & Live Payments:** Razorpay Payment Gateway integration supporting dummy checkouts via Cards, Netbanking, and UPI.
- **Direct Feedback Delivery:** Frontend mail integration for processing Contact forms.

---

## 💻 Tech Stack Overview

This application separates its logic natively into powerful frontend architecture and cloud-based backend-as-a-service (BaaS) engines.

### 🌐 Frontend Architecture
The visual and behavioral layer of the app relies on the modern JavaScript ecosystem:
- **[React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/):** Ensures robust, scalable, and strongly-typed UI components.
- **[Vite](https://vitejs.dev/):** Used as the build tool to provide incredibly fast Hot Module Replacements (HMR) during development and highly optimized production bundling.
- **[Tailwind CSS](https://tailwindcss.com/):** Drives the complete design system, facilitating the custom glassmorphism components, gradients, and utility-first styling.
- **[Framer Motion](https://www.framer.com/motion/):** Handles all the complex, physics-based page transitions and ambient UI animations (like floating orbs and fade-ins).
- **[React Router](https://reactrouter.com/):** Maps out the Single-Page Application (SPA) functionality and handles private Route protections (e.g., Blocking non-admins from `/admin-dashboard`).

### ⚙️ Backend Services (BaaS)
Instead of a traditional backend server (like Node.js or Django), this application runs completely serverless via API connections:
- **[Firebase Authentication](https://firebase.google.com/docs/auth):** Secures the application by encrypting and storing user credentials. Handles the complex logics of `createUserWithEmailAndPassword` and token generation.
- **[Firebase Cloud Firestore](https://firebase.google.com/docs/firestore):** A NoSQL cloud database used to store User Profiles and map `Roles` (User vs Admin) to authentication tokens securely.
- **[Firebase Hosting](https://firebase.google.com/docs/hosting):** Deploys the application directly to edge networks for incredibly fast global load times.
- **[Razorpay JavaScript SDK](https://razorpay.com/docs/api/):** The payment overlay runs on Razorpay's Checkout SDK API, authorizing financial test-transactions securely via embedded iFrames before returning the success callbacks to React.
- **[Formspree](https://formspree.io/):** Acts as a serverless mailer, catching the HTTP POST requests from the Contact Form and forwarding the payload directly to the administrator's email.

---

## 🛠 Setup & Installation

To run this project locally, follow these steps:

**1. Clone the repository and install dependencies**
```bash
git clone https://github.com/your-username/fundder.git
cd fundder
npm install
```

**2. Setup Environment Variables**
Create a `.env` file in the root directory and add your keys:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_RAZORPAY_KEY=your_razorpay_test_key
```

**3. Run the Development Server**
```bash
npm run dev
```
Navigate to `https://crowd-funding-16339.web.app` to view the site!
