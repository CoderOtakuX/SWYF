# SWYF - See What You Fit

![SWYF Logo](services/virtual-tryon/static/react-app/favicon.png)

SWYF is an innovative AI-powered virtual try-on platform that revolutionizes online fashion shopping, allowing users to visualize how clothes will look on them before making a purchase.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Blockchain Integration](#blockchain-integration)
- [Rewards System](#rewards-system)
- [Contact Information](#contact-information)
- [License](#license)

## ✨ Features

- 👔 **Virtual Try-On**: Try clothing items virtually in real-time using AI technology
- 🎨 **Skin Tone Analysis**: Get personalized color recommendations based on your skin tone
- 💰 **Blockchain Security**: Enhanced security for transactions and personal data
- 🏆 **Rewards Program**: Earn tokens for interactions with the platform
- 💳 **Buy Now Pay Later**: Flexible payment options secured by blockchain
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🤝 **Partner Integration**: Opportunity for retailers to integrate with our platform

## 🏗️ Project Structure

```
swyf/
├── frontend/                    # React frontend application
│   ├── src/                     # Source code
│   │   ├── components/          # Reusable components
│   │   ├── pages/               # Page components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Utility functions
│   │   ├── App.tsx              # Main application component
│   │   └── ...                  # Other React files
│   ├── public/                  # Public assets
│   ├── package.json             # Node.js dependencies
│   └── ...                      # Configuration files
│
├── services/                    # Backend services
│   ├── virtual-tryon/           # Virtual try-on service
│   │   ├── app/                 # Flask application modules
│   │   ├── static/              # Static assets
│   │   ├── templates/           # HTML templates
│   │   └── flasktry.py          # Main Flask application
│   │
│   └── skin-tone/               # Skin tone analysis service
│       ├── src/                 # Source code
│       ├── tests/               # Unit tests
│       └── docs/                # Documentation
│
├── assets/                      # Shared assets
│   ├── landingpage.jpg          # Landing page preview
│   ├── blockchainpage.jpg       # Blockchain page preview
│   └── ...                      # Other image assets
│
├── docs/                        # Project documentation
│   └── ...                      # Documentation files
│
└── README.md                    # Project documentation
```

## 📸 Screenshots

### Landing Page
![Landing Page](assets/landingpage.jpg)
*Our modern, engaging landing page showcasing SWYF's key features*

### Blockchain Features
![Blockchain Page](assets/blockchainpage.jpg)
*Blockchain integration providing enhanced security, transparency, and efficiency*

### Skin Tone Analysis
![Colour Analysis](assets/colouranalysis.jpg)
*AI-powered skin tone analysis for personalized color recommendations*

### Rewards System
![Rewards Page](assets/rewardspage.jpg)
*Track your rewards journey and earn tokens for platform interactions*

### Mobile AR Try-On Demo
![Try-On Demo](assets/tryondemo.jpg)
*Augmented Reality try-on experience on mobile devices*

## 🛠️ Technologies Used

### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons
- TanStack Query for data fetching

### Backend
- Flask (Python)
- OpenCV for image processing
- TensorFlow/PyTorch for AI models
- RESTful API design

### Blockchain
- Smart contracts for secure transactions
- Decentralized architecture
- Tokenized rewards system

## 🚀 Installation

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- pip
- Git

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/swyf.git
cd swyf
```

2. Set up the virtual try-on service:
```bash
cd services/virtual-tryon
pip install -r requirements.txt
```

3. Set up the skin tone analysis service:
```bash
cd ../skin-tone
pip install -r requirements.txt
```

4. Set up the frontend:
```bash
cd ../../frontend
npm install
```

5. Build the frontend:
```bash
npm run build
```

6. Copy the built files to the Flask static directory:
```bash
cp -r dist/* ../services/virtual-tryon/static/react-app/
```

## 💻 Usage

1. Start the virtual try-on service:
```bash
cd services/virtual-tryon
python flasktry.py
```

2. For development of the frontend:
```bash
cd frontend
npm run dev
```

3. Access the application:
   - Main application: `http://localhost:5000`
   - Development server: `http://localhost:3000`

## 🏆 Rewards System

Our rewards program offers:

- **Loyalty Points**: Earn points for every interaction with the platform
- **Progress Tracking**: Track your rewards journey
- **Exclusive Benefits**: Unlock discounts, early access, and special features
- **Multi-level Rewards**: Progress through different levels to earn more benefits

## 📞 Contact Information

- **Headquarters**: Sector 61, Noida, Uttar Pradesh, India
- **Phone**: +91 8588077790
- **Email**: swyam7@gmail.com
- **Business Hours**: Monday - Friday: 9am - 6pm IST

## 📄 License

SWYF is proprietary software. All rights reserved.

© 2025 SWYF - See What You Fit 