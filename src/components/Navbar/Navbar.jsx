import { Web3Button } from "@web3modal/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return <div className="navbar">
    <div className="navbar__container">
      <div className="navbar__left">
        <img className="navbar__logo" src="./assets/soonlogo.png" alt="Soon Token Logo" />
        <nav className="navbar__nav">
          <ul>
            <li><a href="#!">How It Works</a></li>
            <li><a href="#!">Tokenomics</a></li>
            <li><a href="">Whitepaper</a></li>
            <li><a href="">Hawaii Whitelist</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </nav>
        <button className="navbar__hamburger"><FontAwesomeIcon icon={faBars} /></button>
      </div>
      <div className="navbar__right">
        <ul>
          <li><a href="#!" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="#!" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://discord.gg/vw6Hhu8DH7" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} /></a></li>
        </ul>
        <Web3Button icon='show' label='Connect Wallet' balance='hide'/>
      </div>
    </div>
  </div>;
};

export default Navbar;
