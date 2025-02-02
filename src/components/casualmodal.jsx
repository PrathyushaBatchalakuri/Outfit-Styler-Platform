import React from 'react';
import './casualmodal.css'; // Ensure this path is correct
import casual1 from './casual1.jpeg';
import Casual2 from './Casual2.jpeg';
import Casual3 from './Casual3.jpeg';
import Casual4 from './Casual4.jpeg';
import Pant7 from './Pant7.jpeg';
import Pant8 from './Pant8.jpeg';
import Pant9 from './Pant9.jpeg';
import Pant10 from './Pant10.jpeg';
import Pant11 from './Pant11.jpeg';



function casualmodal({ onClose }) {
  // First group of casual wear
  const firstGroupImages = [
    casual1,
    Casual2,
    Casual3,
  ];

  // Second group of casual wear
  const secondGroupImages = [
    Casual4,
    Pant7,
    Pant8,
    
    
    // Add more casual wear image URLs as needed
  ];

  // Render first group of images
  function renderFirstGroup() {
    return firstGroupImages.map((imageSrc, index) => (
      <img key={`first-${index}`} src={imageSrc} alt={`Casual Wear ${index + 1}`} style={{ width: '100px' }} />
    ));
  }

  // Render second group of images
  function renderSecondGroup() {
    return secondGroupImages.map((imageSrc, index) => (
      <img key={`second-${index}`} src={imageSrc} alt={`Casual Wear ${index + 4}`} style={{ width: '100px' }} />
    ));
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Your Casual Wear</h2>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
        <div className="casual-images">
          {renderFirstGroup()}
          {renderSecondGroup()}
        </div>
      </div>
    </div>
  );
}

export default casualmodal;
