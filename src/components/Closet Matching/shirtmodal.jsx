import React from 'react';
import './shirtmodal.css'; // Ensure this path is correct
import Shirt1 from './Shirt1.jpeg';
import Shirt2 from './Shirt2.jpeg';
import Shirt3 from './Shirt3.jpeg';
import Shirt4 from './Shirt4.jpeg';
import Shirt5 from './Shirt5.jpeg';
import Shirt6 from './Shirt6.jpeg';

function ShirtModal({ onClose }) {
  // First group of shirts
  const firstGroupImages = [
    Shirt1,
    Shirt2,
    Shirt3,
  ];

  // Second group of shirts
  const secondGroupImages = [
    Shirt4,
    Shirt5,
    Shirt6,
    // Add more shirt image URLs as needed
  ];

  // Render first group of images
  function renderFirstGroup() {
    return firstGroupImages.map((imageSrc, index) => (
      <img key={`first-${index}`} src={imageSrc} alt={`Shirt ${index + 1}`} style={{ width: '100px' }} />
    ));
  }

  // Render second group of images
  function renderSecondGroup() {
    return secondGroupImages.map((imageSrc, index) => (
      <img key={`second-${index}`} src={imageSrc} alt={`Shirt ${index + 4}`} style={{ width: '100px'}} />
    ));
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Your Shirts</h2>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
        <div className="shirt-images">
          
          {renderFirstGroup()}
      
          {renderSecondGroup()}
        </div>
      </div>
    </div>
  );
}

export default ShirtModal;
