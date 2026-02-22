Celestik - AI Palmistry Web App Prototype
Celestik is a modern, AI-powered palmistry platform that provides personalized cosmic personality insights through palm analysis.

🌌 Tech Stack
Frontend: Next.js 14, React 18, TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
Icons: Lucide React
Fonts: Google Fonts (Cinzel, Inter)
📂 Project Structure
app/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation header
│   ├── HeroSection.tsx # Landing page hero
│   ├── HowItWorks.tsx  # Process explanation
│   ├── TrustSection.tsx# Security & trust badges
│   ├── AstrologySection.tsx # Coming soon teaser
│   └── Footer.tsx      # Site footer
├── page.tsx            # Landing page (/)
├── upload/             # Palm upload form (/upload)
├── payment/            # Payment page (/payment)
├── processing/         # Loading animation (/processing)
└── report/             # Final report (/report)
🚀 Setup Instructions
Clone or download the repository
Install dependencies: npm install
Run development server: npm run dev
Open http://localhost:3000 in your browser
🌓 User Flow
Landing Page: Introduction and CTA to upload palm
Upload Form: Personal details + palm image upload
Payment: ₹1 verification payment (UI mockup)
Processing: Animated loading with cosmic effects
Report: Personalized Stardust Report with insights
🎨 Design Features
Dark Cosmic Theme: Deep blues, mystical gradients
Gold Accents: Premium feel with golden highlights
Smooth Animations: Framer Motion powered transitions
Responsive Design: Mobile-first approach
Accessibility: Proper ARIA labels and keyboard navigation
📱 Pages & Components
Landing Page (/)
Hero section with branding
How It Works (3-step process)
Trust & Security section
Astrology Coming Soon teaser
Responsive navigation
Upload Form (/upload)
Personal details form (name, age, gender)
Drag & drop image upload
Form validation
Image preview functionality
Payment Page (/payment)
Order summary with user details
₹1 payment mockup
Secure payment messaging
Thumbnail palm image display
Processing Page (/processing)
Animated step-by-step loading
Cosmic particle effects
Progress indicators
Auto-redirect to report
Report Page (/report)
Personality insights
Emotional archetypes
Life path themes
Cosmic profile summary
Download & share functionality
Astrology waitlist banner
📜 Available Scripts
npm run dev: Start development server
npm run build: Build for production
npm run start: Start production server
npm run lint: Run ESLint checks
✅ Project Status
✅ No build errors
✅ No TypeScript errors
✅ No ESLint warnings or errors
✅ Fully responsive design
✅ Complete user flow implementation
✅ Successfully tested in development mode
⚠️ Known Security Issue: Next.js 14.2.3 has a high-severity vulnerability. Consider upgrading to Next.js 15+ when compatible with your dependencies
🔮 Features Implemented
Complete User Journey: From landing to report generation
Form Handling: Client-side validation and data persistence
Image Upload: File handling with preview and validation
Animated Transitions: Smooth page transitions and loading states
Mock Data: Realistic report generation with personality insights
Download Functionality: JSON report export capability
Share Features: Native Web Share API with clipboard fallback
🎯 Prototype Notes
Payment integration is mocked (₹1 verification UI)
Report data is generated from mock templates
Astrology features are teased but not implemented
All animations and transitions are fully functional
Mobile responsive across all screen sizes
