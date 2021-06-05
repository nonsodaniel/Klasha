import React from "react";

const Dropdown = () => {
  const [showSelect, setShowSelect] = React.useState(false);
  const toggleShowSelect = () => setShowSelect(!showSelect);

  return (
    <div className="dropdown">
      <div className="dropdown__display" onClick={toggleShowSelect}>
        USD
      </div>
      {showSelect && (
        <div className="dropdown__select">
          <div className="dropdown_selectItem">KES</div>
          <div className="dropdown_selectItem">NGN</div>
          <div className="dropdown_selectItem">GHC</div>
        </div>
      )}
    </div>
  );
};

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="wallet-balance">
        <div className="wallet__header">
          <p className="wallet__headline">Total account balance</p>
          <Dropdown />
        </div>
        <div className="walletAmount">
          <h2 className="walletAmount__text">$5,332.18</h2>
          <p className="walletAmount__caption">1 USD = 381.97 NGN</p>
        </div>
      </div>
      <div className="wallet-hold">
        <div className="wallet__header">
          <p className="wallet__headline">Funds on hold</p>
        </div>
        <div className="walletAmount">
          <h2 className="walletAmount__text">$5,332.18</h2>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
