import NewsletterForm from '../NewsletterForm/NewsletterForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons"

import './FooterSection.css'

const FooterSection = () => {
  return <div className='footer'>
    <div className="footer-container">
      <NewsletterForm />

      <div className="footer-socialicons">
        <ul>
          <li><a href="#!" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="#!" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://discord.gg/vw6Hhu8DH7" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} /></a></li>
        </ul>
      </div>

      <div className="footer-logos">
        <img className='footer-logo' src="./assets/soonlogo.png" alt="Soon Logo" />
        <img className='footer-logo' src="./assets/soongraphic.png" alt="Soon Graphic Logo" />
      </div>

      <div className="footer-email">
        <a href="mailto:wensoon.official@gmail.com">wensoon.official@gmail.com</a>
      </div>
    </div>
  </div>;
};

export default FooterSection;
