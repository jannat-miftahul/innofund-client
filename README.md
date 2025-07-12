# InnoFund

InnoFund is a modern crowdfunding platform designed for startups, businesses, and innovative ideas. Our platform empowers entrepreneurs to showcase their projects and connect with potential backers who believe in their vision.

## 🚀 Live Demo

**Live URL:** [InnoFund](https://innofund-crowdfunding-platform.web.app/)

## 📋 Table of Contents

-   [Features](#-features)
-   [Technologies Used](#-technologies-used)
-   [Dependencies](#-dependencies)
-   [Getting Started](#-getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Environment Setup](#environment-setup)
-   [Usage](#-usage)
-   [Project Structure](#-project-structure)
-   [API Endpoints](#-api-endpoints)
-   [Contributing](#-contributing)
-   [License](#-license)

## ✨ Features

### 🔐 Authentication & Security

-   **User Authentication**: Sign up, Sign in, and Google OAuth integration
-   **Secure Sessions**: Firebase Authentication for secure user management
-   **Protected Routes**: Role-based access control

### 💼 Campaign Management

-   **Create Campaigns**: Intuitive campaign creation with rich descriptions
-   **Campaign Dashboard**: Manage and track your campaigns
-   **Campaign Analytics**: View campaign performance and donation statistics

### 💰 Donation System

-   **Easy Donations**: Simple and secure donation process
-   **Donation History**: Track all your contributions
-   **Real-time Updates**: Live campaign progress tracking

### 🎨 User Experience

-   **Responsive Design**: Mobile-first design with Tailwind CSS
-   **Interactive UI**: Smooth animations and transitions
-   **Search & Filter**: Find campaigns by category and criteria

## 🛠 Technologies Used

### Frontend

-   **React 18** - Modern UI library with hooks
-   **Tailwind CSS** - Utility-first CSS framework
-   **DaisyUI** - Tailwind CSS component library
-   **React Router DOM** - Client-side routing
-   **React Hot Toast** - Beautiful notifications

### Backend & Database

-   **Firebase Authentication** - User authentication service
-   **MongoDB** - NoSQL database for data storage
-   **Express.js** - Web application framework
-   **Node.js** - JavaScript runtime environment

### Additional Tools

-   **Swiper.js** - Touch slider for banners
-   **React Icons** - Popular icon libraries
-   **Axios** - HTTP client for API requests

## 📦 Dependencies

### Core Dependencies

```json
{
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "firebase": "^9.17.0",
    "axios": "^1.3.0"
}
```

### UI & Styling

```json
{
    "tailwindcss": "^3.2.0",
    "daisyui": "^2.50.0",
    "react-hot-toast": "^2.4.0",
    "react-icons": "^4.7.0",
    "swiper": "^9.0.0"
}
```

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

-   **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
-   **npm** or **yarn** - Package manager
-   **MongoDB** - Database server
-   **Firebase Account** - For authentication services

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/innofund-client.git
    cd innofund-client
    ```

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Setup

3. **Set up Firebase**

    - Go to [Firebase Console](https://console.firebase.google.com/)
    - Create a new project
    - Enable Authentication with Email/Password and Google providers
    - Create a `.env.local` file in the root directory:

    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

4. **Set up MongoDB**

    - Create a MongoDB database (local or cloud)
    - Update the connection string in your server configuration

5. **Start the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

6. **Open your browser**
    - Navigate to `http://localhost:5173`

## 🎯 Usage

### For Campaign Creators

1. **Sign up** for a new account or **sign in** with existing credentials
2. **Create a campaign** by filling out the detailed form
3. **Share your campaign** to attract potential backers
4. **Track progress** through your campaign dashboard

### For Backers

1. **Browse campaigns** on the homepage or all campaigns page
2. **View campaign details** to learn about projects
3. **Make donations** to support projects you believe in
4. **Track your donations** in your personal dashboard

## 📁 Project Structure

```
innofund-client/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── CampaignCard.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── HomePage.jsx
│   │   │   ├── RunningCampaigns.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── Campaign/
│   │   │   ├── AllCampaigns.jsx
│   │   │   ├── CampaignDetails.jsx
│   │   │   ├── AddCampaign.jsx
│   │   │   ├── MyCampaigns.jsx
│   │   │   └── MyDonations.jsx
│   │   ├── Auth/
│   │   │   ├── SignIn.jsx
│   │   │   └── SignUp.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── provider/
│   │   └── AuthProvider.jsx
│   ├── firebase/
│   │   └── firebase.config.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔗 API Endpoints

### Campaigns

-   `GET /campaigns` - Fetch all campaigns
-   `POST /campaigns` - Create a new campaign
-   `GET /campaigns/:id` - Get campaign details
-   `PUT /campaigns/:id` - Update campaign
-   `DELETE /campaigns/:id` - Delete campaign

### Donations

-   `POST /donations` - Make a donation
-   `GET /donations?email=user@example.com` - Get user donations

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Code Style

-   Use ESLint and Prettier for code formatting
-   Follow React best practices
-   Write meaningful commit messages

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

-   **React Team** for the amazing framework
-   **Tailwind CSS** for the utility-first CSS framework
-   **Firebase** for authentication services
-   **MongoDB** for database solutions

---

**Made with ❤️ by [Miftahul Jannat](https://github.com/jannat-miftahul)**
