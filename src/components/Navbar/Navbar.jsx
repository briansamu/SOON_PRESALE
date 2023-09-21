import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return <div className="navbar">
    <div className="navbar__container">
      <div className="navbar__left">
        <img className="navbar__logo" src="./assets/soonlogo.png" alt="Soon Token Logo" />
        <nav ref={navRef} className="navbar__nav">
          <button onClick={showNavbar} className="navbar__close"><FontAwesomeIcon icon={faX} /></button>
          <ul>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Tokenomics</a></li>
            <li><a href="https://wen.finance/whitepaper.pdf">Whitepaper</a></li>
            <li><a href="#">Hawaii Whitelist</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
        <button onClick={showNavbar} className="navbar__hamburger"><FontAwesomeIcon icon={faBars} /></button>
      </div>
      <div className="navbar__right">
        <ul>
          <li><a href="https://www.youtube.com/channel/UCLPOA4unRLumxGb2vtOpv7w" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="https://www.instagram.com/thewenshow" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://www.twitter.com/wensooncoin" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://discord.gg/vw6Hhu8DH7" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} /></a></li>
        </ul>
      </div>
    </div>
  </div>;
};

export default Navbar;
