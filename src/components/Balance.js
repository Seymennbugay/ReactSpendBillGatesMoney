import React from 'react';
import billImage from '../images/bill.webp'; // Doğru yolu kullanarak resmi import ettik
import './Balance.css'; // CSS dosyasını doğru şekilde import ettik

const Balance = ({ balance }) => {
  return (
    <div className="container text-center money-part-container">
      <img src={billImage} className="img-fluid mx-auto d-block money-part-img" alt="Bill Gates" />
      <h1 className="money-part-header-1">Spend Bill Gate's Money</h1>
      <h1 id="balance" className="money-part-header-2">${balance.toLocaleString()}</h1>
    </div>
  );
};

export default Balance;

