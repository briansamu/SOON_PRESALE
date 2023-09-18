import './AttractiveFeaturesSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faWallet, faLock, faDollarSign, faGift, faHeadset } from '@fortawesome/free-solid-svg-icons';

const AttractiveFeaturesSection = () => {
  return <div className='af-section'>
    <div className="af-container">
      <h3 id='af-h3'>Attractive Features</h3>
      <p id='af-p'>More MEME than you can handle</p>
    </div>
    <div className="af-container">
      <div className="af-featuresgrid">

        <div className="af-griditem af-griditem1">
          <div className="af-griditem-container">
            <FontAwesomeIcon className='af-icon' icon={faTrophy} />
            <h5 className='af-gridh5'>Competitive Gaming Tournaments</h5>
          </div>
          <p className='af-gridp'>Compete in meme like gaming tournaments. Oh, we didn't forget about the giveaways</p>
        </div>

        <div className="af-griditem af-griditem2">
          <div className="af-griditem-container">
            <FontAwesomeIcon className='af-icon' icon={faWallet} />
            <h5 className='af-gridh5'>Colored Coins Protocol</h5>
          </div>
          <p className='af-gridp'>Multi-Layered smart chain with color derivative token IDs and immutable transactions</p>
        </div>

        <div className="af-griditem af-griditem3">
          <div className="af-griditem-container">
            <FontAwesomeIcon className='af-icon' icon={faLock} />
            <h5 className='af-gridh5'>Vesting Periods To Maintain Price</h5>
          </div>
          <p className='af-gridp'>Early bird round will have 2 month cliff from token generation event</p>
        </div>

        <div className="af-griditem af-griditem4">
          <div className="af-griditem-container">
            <FontAwesomeIcon className='af-icon' icon={faDollarSign} />
            <h5 className='af-gridh5'>Tokenomical</h5>
          </div>
          <p className='af-gridp'>Tokenomics that make sense</p>
        </div>

        <div className="af-griditem af-griditem5">
          <div className="af-griditem-container">
            <FontAwesomeIcon className='af-icon' icon={faGift} />
            <h5 className='af-gridh5'>Multiple Community Revenue Streams</h5>
          </div>
          <p className='af-gridp'>Multiple revenue streams for node holders ranging from different earning ramps within the commuity and it's platform</p>
        </div>

        <div className="af-griditem af-griditem6">
          <div className="af-griditem-container">
            <FontAwesomeIcon className='af-icon' icon={faHeadset} />
            <h5 className='af-gridh5'>Bringing The Best Culture of Meme</h5>
          </div>
          <p className='af-gridp'>Weekly entertainment web series with cultural memes and slapstick comedy</p>
        </div>

      </div>
    </div>
  </div>
}

export default AttractiveFeaturesSection