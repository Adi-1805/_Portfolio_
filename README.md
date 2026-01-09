# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, featuring dark/light mode toggle, smooth animations, and a comprehensive showcase of projects, expertise, and career history.

## ✨ Features

- **Dark/Light Mode Toggle** - Seamlessly switch between themes
- **Responsive Design** - Fully optimized for all screen sizes
- **Smooth Animations** - Fade-in transitions and interactive elements
- **Project Showcase** - Display your personal projects with images and descriptions
- **Career Timeline** - Visual timeline of professional experience
- **Expertise Section** - Highlight your technical skills across multiple domains
- **Contact Form** - Integrated contact form with EmailJS support
- **Navigation** - Smooth scrolling navigation between sections

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript 4.9.5** - Type-safe JavaScript
- **SCSS** - Styling with Sass preprocessor

### UI Libraries
- **Material-UI (MUI)** - React component library
- **FontAwesome** - Icon library
- **React Vertical Timeline Component** - Timeline visualization

### Additional Libraries
- **EmailJS** - Contact form email service
- **React Scripts** - Build tools and configuration

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Adi-1805/_Portfolio_.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── images/          # Background images and project mockups
│   │   └── styles/          # SCSS style files
│   ├── components/
│   │   ├── Main.tsx         # Hero section with profile
│   │   ├── Navigation.tsx   # Navigation bar with theme toggle
│   │   ├── Expertise.tsx    # Skills and domains showcase
│   │   ├── Timeline.tsx     # Career history timeline
│   │   ├── Project.tsx      # Projects showcase
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer component
│   │   └── FadeIn.tsx       # Animation wrapper component
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Application entry point
│   └── index.scss           # Global styles
├── package.json
└── tsconfig.json
```

## 🎨 Sections

### Main (Hero Section)
- Profile image
- Name and title
- Social media links (GitHub, LinkedIn)
- Background images for dark/light modes

### Expertise
Showcases six main domains:
- Full Stack Web Development
- AI/ML
- GenAI & LLM
- Research & Applied ML
- Data Science & Analytics
- Competitive Programming & DSA

### Timeline
Vertical timeline displaying:
- Current and past positions
- Internships and training programs
- Key responsibilities and technologies used

### Projects
Features four personal projects:
1. **Yojana Sahayak** - AI-powered financial scheme recommender (SIH 2024 Winner)
2. **ChatDoc** - Production-ready RAG chatbot with LangGraph
3. **ShelfWise** - Book recommendation system using collaborative filtering
4. **Audio Recognition using Deep Learning** - CNN-based bird call identification

### Contact
- Contact form with validation
- EmailJS integration for sending emails
- Material-UI form components

## 🔧 Configuration

### EmailJS Setup

To enable the contact form email functionality:

1. Sign up for EmailJS at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a service and template
3. Update the EmailJS configuration in `src/components/Contact.tsx`:
   - Replace `'service_id'` with your service ID
   - Replace `'template_id'` with your template ID
   - Replace `'api_key'` with your public key

### Customization

#### Update Personal Information
- Edit `src/components/Main.tsx` to update name, title, and social links
- Replace profile image URL or add local image to `src/assets/images/`

#### Modify Projects
- Edit `src/components/Project.tsx` to add/remove projects
- Add project mockup images to `src/assets/images/`

#### Update Timeline
- Edit `src/components/Timeline.tsx` to modify career history entries

#### Adjust Skills
- Edit `src/components/Expertise.tsx` to update skills and domains

## 📦 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

Make sure to update the `homepage` field in `package.json` with your repository URL.

### Other Hosting Platforms

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your preferred hosting platform:
   - Netlify
   - Vercel
   - AWS S3
   - Any static hosting service

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📝 License

This project is open source and available under the [LICENSE](LICENSE) file.

## 👤 Author

**Aditi Mishra**
- GitHub: [@Adi-1805](https://github.com/Adi-1805)
- LinkedIn: [Aditi Mishra](https://www.linkedin.com/in/aditi-mishra-40389422b/)

## 🙏 Acknowledgments

- Built using the React Portfolio Template foundation
- Icons provided by FontAwesome and Material-UI
- Timeline component from react-vertical-timeline-component

---

⭐ If you found this portfolio helpful, please consider giving it a star!
