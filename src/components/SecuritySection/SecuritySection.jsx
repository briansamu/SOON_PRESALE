import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SecuritySection.css';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const SecuritySection = () => {
  return (
    <div className='securitysection'>
      <div className="security-container">
        <FontAwesomeIcon className='security-icon' icon={faLock} />
        <h5 className="security-h5">Security & Trust</h5>
        <p className="security-p">The wallet used for pre-sale funding is a multi-signature wallet, demanding multiple team members' authorization to carry out any transactions. While we are fully commited to achieving our milestones, remember that unforseen circumstances can intervene. We've all expereinced the pitfalls of abrupt closures and we firmly stand against exploiting people. We are in this venture not to decieve, but to contribute to meme culture and make a positive impact.</p>
        <button className="security-btn">Connect To Lore</button>
      </div>
    </div>
  )
}

export default SecuritySection