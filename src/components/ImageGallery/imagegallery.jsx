import React, { useState } from 'react';
import './imagegallery.jsx'; // Import CSS for styling

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleGallery = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleGallery}>Show Gallery</button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button onClick={toggleGallery} className="close-btn">
              Close
            </button>
            <div className="image-gallery">
              <img src="image1.jpg" alt="Image 1" />
              <img src="image2.jpg" alt="Image 2" />
              <img src="image3.jpg" alt="Image 3" />
              <img src="image4.jpg" alt="Image 4" />
              <img src="image5.jpg" alt="Image 5" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;