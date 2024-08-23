import React from 'react';
import './PurchasedItems.css'; // CSS dosyasını import edin

const PurchasedItems = ({ purchasedItems }) => {
  // Yalnızca "Satın Alım" olarak işaretlenmiş ürünleri filtreleyin
  const purchasedOnlyItems = purchasedItems.filter(item => !item.name.includes('Satışı'));

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Purchased Items</h2>
      <div className="purchased-items-container">
        {purchasedOnlyItems.length > 0 ? (
          <ul className="list-group">
            {purchasedOnlyItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> - {item.quantity} adet
                </div>
                <span className="badge bg-primary rounded-pill">
                  ${item.totalPrice.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">No items purchased yet.</p>
        )}
      </div>
    </div>
  );
};

export default PurchasedItems;
