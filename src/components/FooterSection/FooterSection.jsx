import NewsletterForm from '../NewsletterForm/NewsletterForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"

import './FooterSection.css'

const FooterSection = () => {
  return <div className='footer'>
    <div className="footer-container">
      <NewsletterForm />

      <div className="footer-socialicons">
        <ul>
          <li><a href="https://www.youtube.com/channel/UCLPOA4unRLumxGb2vtOpv7w" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="https://www.instagram.com/thewenshow" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://twitter.com/wensooncoin" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://discord.gg/vw6Hhu8DH7" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} /></a></li>
        </ul>
      </div>

      <div className="footer-logos">
        <img className='footer-logo' src="./assets/soonlogo.png" alt="Soon Logo" />
        <img className='footer-logo' src="./assets/soongraphic.png" alt="Soon Graphic Logo" />
      </div>

      <div className="footer-email">
        <a href="mailto:wensoon.official@gmail.com">contact@wen.finance</a>
      </div>
    </div>
  </div>;
};

export default FooterSection;
