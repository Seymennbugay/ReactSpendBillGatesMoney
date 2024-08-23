import React, { useState } from 'react';

const Product = ({ product, balance, updateBalance, addPurchasedItem, removePurchasedItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [purchasedQuantity, setPurchasedQuantity] = useState(0);

  const handleBuy = () => {
    const totalPrice = product.price * quantity;
    if (totalPrice <= balance) {
      updateBalance(balance - totalPrice);
      setPurchasedQuantity(purchasedQuantity + quantity);
      addPurchasedItem(`${product.name}`, quantity, totalPrice);
    }
  };

  const handleSell = () => {
    const totalPrice = product.price * quantity;
    if (quantity <= purchasedQuantity) {
      updateBalance(balance + totalPrice);
      setPurchasedQuantity(purchasedQuantity - quantity);
      addPurchasedItem(`${product.name} Satışı`, quantity, totalPrice);
      removePurchasedItem(`${product.name}`, quantity); // Buraya ekledik
    }
  };

  return (
    <div className="col-md-4 product-part">
      <div className="card product-part">
        <img src={product.image} className="card-img-top product-part" alt={product.name} />
        <div className="card-body text-center product-part">
          <h5 className="card-title product-part">{product.name}</h5>
          <p className="card-text product-part">${product.price.toLocaleString()}</p>
          <div className="d-flex justify-content-around align-items-center product-part">
            <button 
              className="btn btn-danger product-part sell-btn" 
              disabled={purchasedQuantity === 0 || quantity > purchasedQuantity} 
              onClick={handleSell}>
              Sell
            </button>
            <input 
              type="number" 
              className="form-control w-25 product-part quantity-input" 
              min="1" 
              value={quantity} 
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button 
              className="btn btn-success product-part buy-btn" 
              disabled={product.price * quantity > balance} 
              onClick={handleBuy}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

