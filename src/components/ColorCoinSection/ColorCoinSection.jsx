import './ColorCoinSection.css';

const ColorCoinSection = () => {
  return <div className='ccs'>
    <div className="ccs-container">
      <h3 className="ccs-h3">Color Coin Derivative</h3>

      <div className="ccs-colors">

        <div className="ccs-coloritem ccs-coloritem1">
          <div className='ccs-circle' id="redcircle"></div>
          <p className="ccs-p">Governance</p>
        </div>

        <div className="ccs-coloritem ccs-coloritem2">
          <div className='ccs-circle' id="orangecircle"></div>
          <p className="ccs-p">Platform Fees</p>
        </div>

        <div className="ccs-coloritem ccs-coloritem3">
          <div className='ccs-circle' id="yellowcircle"></div>
          <p className="ccs-p">Digital NFTs</p>
        </div>

        <div className="ccs-coloritem ccs-coloritem4">
          <div className='ccs-circle' id="greencircle"></div>
          <p className="ccs-p">IRL Token Gates</p>
        </div>

        <div className="ccs-coloritem ccs-coloritem5">
          <div className='ccs-circle' id="bluecircle"></div>
          <p className="ccs-p">Physical Asset Management</p>
        </div>

      </div>

    </div>
  </div>;
};

export default ColorCoinSection;
