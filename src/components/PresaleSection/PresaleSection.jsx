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
            <p>Welcome to "Soon", where we're going to dive into the creation of an eccentric, eight-episode pilot animated web series that's brimming with slapstick humor.  Based on a TRUE events, this will be the greatest come up story ever told. The star of our series is a mythical being from the MEME Realm known as WEN. Along his journey, WEN will encounter other meme world dwellers like DOGE, SHIBA INU, PEPE, and beyond! As a $Soon node holder, you'll reap various benefits while also indulging in a cryptocurrency-themed, meme-inspired animated series. Not to mention, 52 Cinco Dois Animation Studio has our back! So, when you question "wen", our answer is always "Soon".</p>
          </div>
          <img src="../../assets/soon.gif" alt="soon tm" />
        </div>
    </div>
  </div>;
};

export default Presale;
