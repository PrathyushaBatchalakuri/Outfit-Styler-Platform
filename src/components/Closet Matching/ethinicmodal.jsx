import React from 'react';
import './ethinicmodal.css'; // Ensure this path is correct
import Ethnic1 from './Ethnic1.jpeg';
import Ethnic2 from './Ethnic2.jpeg';
import Ethnic3 from './Ethnic3.jpeg';
import Ethnic4 from './Ethnic4.jpeg';


function ethinicmodal({ onClose }) {
  // First group of ethnic wear
  const firstGroupImages = [
    Ethnic1,
    Ethnic2,
    Ethnic3,
  ];

  // Second group of ethnic wear
  const secondGroupImages = [
    Ethnic4,
    
    // Add more ethnic wear image URLs as needed
  ];

  // Render first group of images
  function renderFirstGroup() {
    return firstGroupImages.map((imageSrc, index) => (
      <img key={`first-${index}`} src={imageSrc} alt={`Ethnic Wear ${index + 1}`} style={{ width: '100px' }} />
    ));
  }

  // Render second group of images
  function renderSecondGroup() {
    return secondGroupImages.map((imageSrc, index) => (
      <img key={`second-${index}`} src={imageSrc} alt={`Ethnic Wear ${index + 4}`} style={{ width: '100px' }} />
    ));
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Your Ethnic Wear</h2>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
        <div className="ethnic-images">
          {renderFirstGroup()}
          {renderSecondGroup()}
        </div>
      </div>
    </div>
  );
}

export default ethinicmodal;
