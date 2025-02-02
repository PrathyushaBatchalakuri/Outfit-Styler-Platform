import React from 'react';
import './bussinessmodal.css'; // Ensure this path is correct
import bu1 from './bu1.jpg';
import bu2 from './bu2.jpeg';
import bu3 from './bu3.jpeg';
import bu4 from './bu4.jpeg';




function bussinessmodal({ onClose }) {
  // First group of casual wear
  const firstGroupImages = [
    bu1,
    bu2,
    bu3,
  ];

  // Second group of casual wear
  const secondGroupImages = [
    bu4,
    
    
    
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

export default bussinessmodal;
