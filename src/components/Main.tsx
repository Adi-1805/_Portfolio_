import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import bgDark from '../assets/images/bg-dark.png';
import bgLight from '../assets/images/bg-light.png';
import '../assets/styles/Main.scss';

interface MainProps {
  mode?: string;
}

function Main({ mode = 'dark' }: MainProps) {
  const backgroundImage = mode === 'light' ? bgLight : bgDark;

  return (
    <div className="container">
      <div className="about-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="image-wrapper">
          <img src="https://github.com/Adi-1805/_Portfolio_/blob/main/assets/WhatsApp%20Image%202026-01-01%20at%2023.50.57.jpeg?raw=true" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Adi-1805" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aditi-mishra-40389422b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aditi Mishra</h1>
          <p>AI/ML Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Adi-1805" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aditi-mishra-40389422b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;