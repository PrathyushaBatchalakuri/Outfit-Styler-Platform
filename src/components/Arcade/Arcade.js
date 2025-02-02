import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './Arcade.css'; // Make sure to create a corresponding CSS file


// This would be your outfit image file, replace 'outfit.jpg' with your actual image path
import img1 from './img1.jpg'; 
import img2 from './img2.jpg'; 
import img3 from './img3.jpg'; 

function Arcade() {
  

  
    const set1 = [img1, img2,img3];
    const [imageIndex, setImageIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState(set1[0]);

  const handleGenerateOutfitClick = () => {
    setImageIndex((imageIndex + 1) % set1.length); // Increment image index
    setImageSrc(set1[imageIndex]); // Set image source based on the new index
};

  return (
    <div className="container">
      <div className="outfit-display">
      <h2 style={{ 
        whiteSpace: 'nowrap', 
        overflow: 'visible', 
        textOverflow: 'clip',
        marginLeft: '500px',
        marginTop: '30px'
      }}>
        Outfit Generated
      </h2>
        
        <img src={imageSrc} alt="Generated outfit" className="outfit-image" style={{ width: '1300px' }} />

        
      </div>
      <div className="button-group"> 
      <button onClick={handleGenerateOutfitClick} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: 'auto', maxWidth: '100%', marginLeft: '500px', marginTop: '20px' }}>
  Generate another Outfit
</button>

        
        {/* <button variant="contained" onClick={handleGenerateOutfitClick}>Add Accessories to your Outfit</button>    */}
      </div>
    </div>
  );
}

export default Arcade;
