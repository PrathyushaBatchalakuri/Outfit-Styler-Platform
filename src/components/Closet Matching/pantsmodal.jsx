import React from 'react';
import './pantsmodal.css'; // Ensure this path is correct
import Pant1 from './Pant1.jpeg';
import Pant2 from './Pant2.jpeg';
import Pant3 from './Pant3.jpeg';
import Pant4 from './Pant4.jpeg';
import Pant5 from './Pant5.jpeg';
import Pant6 from './Pant6.jpeg';



function pantsmodal({ onClose }) {
  // First group of pants
  const firstGroupImages = [
    Pant1,
    Pant2,
    Pant3,
  ];

  // Second group of pants
  const secondGroupImages = [
    Pant4,
    Pant5,
    Pant6,
    
    // Add more pant image URLs as needed
  ];

  // Render first group of images
  function renderFirstGroup() {
    return firstGroupImages.map((imageSrc, index) => (
      <img key={`first-${index}`} src={imageSrc} alt={`Pant ${index + 1}`} style={{ width: '100px' }} />
    ));
  }

  // Render second group of images
  function renderSecondGroup() {
    return secondGroupImages.map((imageSrc, index) => (
      <img key={`second-${index}`} src={imageSrc} alt={`Pant ${index + 4}`} style={{ width: '100px' }} />
    ));
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Your Pants</h2>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
        <div className="pant-images">
          {renderFirstGroup()}
          {renderSecondGroup()}
        </div>
      </div>
    </div>
  );
}

export default pantsmodal;
