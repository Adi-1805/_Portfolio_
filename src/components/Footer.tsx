import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Adi-1805" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/aditi-mishra-40389422b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Made with 💜 by <a href="https://github.com/Adi-1805/_Portfolio_" target="_blank" rel="noreferrer">Aditi</a></p>
    </footer>
  );
}

export default Footer;