import PresaleForm from '../PresaleForm/PresaleForm';
import './PresaleSection.css';

const Presale = () => {
  return <div className="presale">
    <div className="presale__container">
        <div className="presale__left">
          <PresaleForm />
          <img className='studio-img' src="../../assets/52studios.jpg" alt='pepe coming soon' />
        </div>
        <div className="presale__right">
          <img src="../../assets/pepecomingsoon.gif" alt="Image" />
          <div className="presale__right-textwrapper">
            <h3>Web Series Coming Soon</h3>
            <p>Welcome to &quot;<strong>Soon</strong>&quot;, where we&apos;re going to dive into the creation of an eccentric, eight-episode animated web series that&apos;s brimming with slapstick humor. The star of our series is a mythical being from the MEME Realm known as <strong>WEN</strong>. Along his journey, <strong>WEN</strong> will encounter other meme world dwellers like <strong>DOGE, SHIBA INU, PEPE</strong>, and beyond! As a <strong>$Soon</strong> node holder, you&apos;ll reap various benefits while also indulding in a cryptocurrency-themed, meme-inspired animated series. So, when you question &quot;<strong>wen</strong>&quot;, our answer is always &quot;<strong>Soon</strong>&quot;.</p>
          </div>
          <img src="../../assets/soon.gif" alt="soon tm" />
        </div>
    </div>
  </div>;
};

export default Presale;
