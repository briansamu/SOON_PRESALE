import './PresaleForm.css'

import { useState } from 'react';

const PresaleForm = () => {
  const [amount, setAmount] = useState(1);
  const [soonAmount, setSoonAmount] = useState();

  const handleInput = (e) => {
    setAmount = e.target.value;
    setSoonAmount = e.target.value / 0.00001;
    console.log(soonAmount);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount == 0 || amount == '') {
      console.log('Invalid Number!')
      return;
    }

    console.log(amount);
  }

  return <div className="presaleform">
    <form className='presaleform__form' onSubmit={handleSubmit}>
      <h3 id='earlybirdround'>Early Bird Round</h3>

      <div className="presaleform__form-pwrapper">
        <p id='priceoutof1'>PRICE $0.00001 / 1 $Soon</p>
        <div className="presaleform__bar">
          <span className='presaleform__bar-progress' style={{width: '10%'}}></span>
          <div className='presaleform__bar-label'>Next stage regular presale price $.00002</div>
        </div>
        <p className='presaleform__p-bold'>USDC $10,504,441.72 / $10,504,441.72</p>
      </div>
      
      <p className='presaleform__p-bold'>Your Purchased $Soon = 0</p>
      <p id='fr-disclaimer'>*First round USDC only*</p>

      <div className="presaleform__form-inputwrapper">
        <div className="presaleform__fullinput">
          <input type='number' className='presaleform__input' name="usdc-input" onChange={handleInput} value={amount}></input>
          <label className='presaleform__label' htmlFor="usdc-input">USDC</label>
        </div>

        <div className="presaleform__fullinput">
          <input id='soon-input' disabled type='number' className='presaleform__input' name="soon-input" value={soonAmount}></input>
          <label className='presaleform__label' htmlFor="soon-input">$Soon</label>
        </div>
      </div>

      <div className="presaleform__form-pwrapper">
        <p className='presaleform__p-bold'>**Must make request ticket for Hawaii Whitelist**</p>
        <p className='presaleform__p-bold'>LIMITED TO FIRST 100 SPOTS</p>
      </div>
      <button type='submit' className='presaleform__buynowbtn'>Buy Now</button>
    </form>
  </div>;
};

export default PresaleForm;
