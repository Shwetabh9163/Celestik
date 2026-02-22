# 🌌 Celestik - AI Palmistry Web App

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.3-black" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-18-blue" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Framer_Motion-10.0-purple" alt="Framer Motion"/>
  <br/>
  <img src="https://img.shields.io/badge/Status-Prototype-green" alt="Status"/>
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License"/>
</div>

## ✨ Overview

**Celestik** is a modern, AI-powered palmistry platform that provides personalized cosmic personality insights through advanced palm analysis. Experience the future of astrology with our mystical web application that combines cutting-edge technology with ancient wisdom.

## 🚀 Features

- **🔮 AI-Powered Analysis**: Advanced palm reading with personalized insights
- **🌟 Cosmic Personality Reports**: Detailed Stardust Reports with emotional archetypes
- **💳 Secure Payment Integration**: ₹1 verification payment system
- **📱 Mobile-First Design**: Fully responsive across all devices
- **🎨 Smooth Animations**: Framer Motion powered transitions
- **♿ Accessibility**: Proper ARIA labels and keyboard navigation
- **📤 Share & Download**: Export reports and share via Web Share API

## 🛠️ Tech Stack

| Category       | Technologies                     |
| -------------- | -------------------------------- |
| **Frontend**   | Next.js 14, React 18, TypeScript |
| **Styling**    | Tailwind CSS, Framer Motion      |
| **Icons**      | Lucide React                     |
| **Fonts**      | Google Fonts (Cinzel, Inter)     |
| **Deployment** | Vercel (recommended)             |

## 📂 Project Structure

```
celestik/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx      # Navigation header
│   │   ├── HeroSection.tsx # Landing page hero
│   │   ├── HowItWorks.tsx  # Process explanation
│   │   ├── TrustSection.tsx# Security & trust badges
│   │   ├── AstrologySection.tsx # Coming soon teaser
│   │   └── Footer.tsx      # Site footer
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page (/)
│   ├── upload/             # Palm upload form (/upload)
│   ├── payment/            # Payment page (/payment)
│   ├── processing/         # Loading animation (/processing)
│   └── report/             # Final report (/report)
├── public/                 # Static assets
├── components/             # Shared components
├── lib/                    # Utility functions
└── README.md
```

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Shwetabh9163/Celestik.git
   cd celestik
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint checks        |

## 🌓 User Journey

1. **🌟 Landing Page**: Introduction and call-to-action
2. **📤 Upload Form**: Personal details + palm image upload
3. **💳 Payment**: ₹1 verification payment (UI mockup)
4. **⚡ Processing**: Animated loading with cosmic effects
5. **📊 Report**: Personalized Stardust Report with insights

## 🎨 Design System

- **🎭 Theme**: Dark cosmic theme with deep blues and mystical gradients
- **✨ Accents**: Gold highlights for premium feel
- **📱 Responsive**: Mobile-first approach
- **♿ Accessible**: WCAG compliant

## 📱 Pages & Components

### Landing Page (/)

- Hero section with cosmic branding
- How It Works (3-step process)
- Trust & Security section
- Astrology Coming Soon teaser
- Responsive navigation

### Upload Form (/upload)

- Personal details form (name, age, gender)
- Drag & drop image upload
- Form validation
- Image preview functionality

### Payment Page (/payment)

- Order summary with user details
- ₹1 payment mockup
- Secure payment messaging
- Thumbnail palm image display

### Processing Page (/processing)

- Animated step-by-step loading
- Cosmic particle effects
- Progress indicators
- Auto-redirect to report

### Report Page (/report)

- Personality insights
- Emotional archetypes
- Life path themes
- Cosmic profile summary
- Download & share functionality
- Astrology waitlist banner

## ✅ Project Status

- ✅ No build errors
- ✅ No TypeScript errors
- ✅ No ESLint warnings or errors
- ✅ Fully responsive design
- ✅ Complete user flow implementation
- ✅ Successfully tested in development mode

## ⚠️ Known Issues

- **Security**: Next.js 14.2.3 has a high-severity vulnerability. Consider upgrading to Next.js 15+ when compatible with your dependencies

## 🎯 Prototype Notes

- Payment integration is mocked (₹1 verification UI)
- Report data is generated from mock templates
- Astrology features are teased but not implemented
- All animations and transitions are fully functional
- Mobile responsive across all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by ancient palmistry traditions
- Built with modern web technologies
- Designed for cosmic exploration

---

<div align="center">
  <p>Made with ❤️ and cosmic energy</p>
  <p>🌟 Explore your cosmic destiny with Celestik 🌟</p>
</div>
