import React, { useState } from 'react';
import Balance from './components/Balance';
import Product from './components/Product';
import PurchasedItems from './components/PurchasedItems';
import batmansuit from './images/batmansuit.jpg';
import bill from './images/bill.webp';
import club from './images/club.jpg';
import luxcar from './images/luxcar.jpg';
import nflteam from './images/nflteam.jpg';
import rapcompany from './images/rapcompany.png.jpg';
import rolex from './images/rolex.jpg';
import soldier from './images/soldier.jpg';
import spaceship from './images/spaceship.jpg';
import tiger from './images/tiger.jpg';
import tomahawk from './images/tomahawk.jpg';

// Ürün verilerini tanımlayın
const products = [
  { id: 1, name: 'ROLLS ROYCE', price: 100000, image: luxcar },
  { id: 2, name: 'Batman Suit', price: 50000, image: batmansuit },
  { id: 3, name: 'Bill Gates Posteri', price: 2000, image: bill },
  { id: 4, name: 'NFL TEAM', price: 30000, image: nflteam },
  { id: 5, name: 'ROLLS ROYSE', price: 150000, image: luxcar },
  { id: 6, name: 'RAP COMPANY', price: 25000, image: rapcompany },
  { id: 7, name: 'Rolex ', price: 80000, image: rolex },
  { id: 8, name: 'ARMY', price: 15000, image: soldier },
  { id: 9, name: 'SPACESHIP', price: 12000, image: spaceship },
  { id: 10, name: 'PET TİGER', price: 5000, image: tiger },
  { id: 11, name: 'TOMAHAWK BİKE', price: 7000, image: tomahawk },
  { id: 12, name: 'NIGHTCLUB', price: 111000, image: club }
];

const App = () => {
  const [balance, setBalance] = useState(100000000000);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
  };

  const addPurchasedItem = (name, quantity, totalPrice) => {
    setPurchasedItems([...purchasedItems, { name, quantity, totalPrice }]);
  };

  const removePurchasedItem = (name, quantity) => {
    setPurchasedItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.name === name) {
          const newQuantity = item.quantity - quantity;
          if (newQuantity <= 0) return null;
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item !== null);

      return updatedItems;
    });
  };

  return (
    <div>
      <Balance balance={balance} />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product 
              key={product.id}
              product={product}
              balance={balance}
              updateBalance={updateBalance}
              addPurchasedItem={addPurchasedItem}
              removePurchasedItem={removePurchasedItem} // Buraya ekledik
            />
          ))}
        </div>
      </div>
      <PurchasedItems purchasedItems={purchasedItems} />
    </div>
  );
};

export default App;
