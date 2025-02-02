import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Vibe.css';
import Button from '@mui/material/Button';
import BlindIcon from '@mui/icons-material/Blind';
import IconButton from '@mui/material/IconButton';
import RateReviewIcon from '@mui/icons-material/RateReview';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Walk from '../Walk/Walk'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CoffeeIcon from '@mui/icons-material/Coffee';
import HikingIcon from '@mui/icons-material/Hiking';
import WeekendIcon from '@mui/icons-material/Weekend';
import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import Coffee from '../Coffee/Coffee'
import Hike from '../Hike/Hike'

import { styled } from '@mui/system';

// import VibeGene from '../VibeGene/VibeGene.js'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { waitFor } from '@testing-library/react';



const products = [
  { id: 1, name: 'Stroll', icon: BlindIcon, text: 'Go for a walk in a classy outfit' },
  { id: 2, name: 'Arcade', icon: SportsEsportsIcon, text: 'Enjoy your time at the arcade in comfortable clothing' },
  { id: 3, name: 'Coffee Shop', icon: CoffeeIcon, text: 'Coffee shop date? no worries we got u covered' },
  { id: 4, name: 'Hiking', icon: HikingIcon, text: 'Coffee shop date? No worries, we\'ve got you covered' },
  { id: 5, name: 'Lounge', icon: WeekendIcon, text:'Lounge in style — we\'ve got the perfect outfit for you' },
  { id: 6, name: 'Beach Vibe', icon: KitesurfingIcon, text: 'Beach day outfit? Consider it sorted' },
  { id: 7, name: 'Weekend Brunch', icon: BrunchDiningIcon, text: 'Dress to impress and brunch your best this weekend.' },
];

function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  const pastel = `hsl(${hue}, 100%, 87.5%)`;
  return pastel;
}


const Vibe = () => {
 const navigate = useNavigate();

 const handleClick = (productId) => {
  const product = products.find(p => p.id === productId);
  if (product) {
    if (product.id === 1) {
      navigate('/Walk'); // Replace '/Walk' with the actual path you want to navigate to
    } else if (product.id === 2) {
      navigate('/Arcade');
    } else if (product.id === 3) {
      navigate('/Coffee');
    } else if (product.id === 4) {
      navigate('/Hike');
    } else if (product.id === 5) {
      navigate('/Lounge');
    } else if (product.id === 6) {
      navigate('/Beach');
    } else if (product.id === 7) {
      navigate('/Brunch');
    }
    // Add additional else if conditions for other product ids as needed
  }
  // else, do nothing or add additional logic for other cases
};



    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSubmitFeedback = () => {
  //   setOpen(false);
  // };
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleSubmitFeedback = async () => { // Note the async keyword here
    try {
      // Start the wait process
      await new Promise((resolve) => setTimeout(resolve, 1000)); // waits for 3 seconds
  
      // After the wait, show the Snackbar
      setOpenSnackbar(true);
    } catch (error) {
      // Handle any possible errors that might come from your wait logic
      console.error(error);
    } finally {
      // This will run regardless of whether the above try/catch succeeded or failed
      // Close the dialog
      setOpen(false);
    }
  };
  
  
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  
  return (
    <div className="page-container">
      <header className="header">
      <h1 className="heading" style={{ color: 'white' }}>Vibe Matcher: Look Great on the Go</h1>
        <p className="description" justify="center">
        No specific occasion? No problem! Embrace the simple joys, from a leisurely stroll with your dog to unwinding in your favorite spot, our selection promises to add a touch of elegance to your everyday routine."
        </p>
      </header>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
           
            <product.icon />
            <h3>{product.name}</h3>
            <p>{product.text}</p>
            <Button
              variant="outlined"
              
              onClick={() => handleClick(product.id)}
              color="primary"
              sx={{
                color: 'black', // Set the text color to black
                '&:hover': {
                  backgroundColor: 'primary.light', // Change the background color on hover
                  borderColor: 'primary.dark', // Change the border color on hover
                  color: 'black',
                   // Ensure the text color remains black on hover
                }
              }}
            >
              Generate outfit
            </Button>
          </div>
        ))}
      </div>
      <IconButton
        onClick={handleClickOpen}
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 10,
          border: '1px solid #ddd', // Add a border with your desired color and width
          borderRadius: '50%', // Make it round
          backgroundColor: 'white', // Optional: set a background color
          '&:hover': {
            backgroundColor: 'grey.200', // Change the background color on hover
          },
          // Use the theme's spacing to increase the size
          height: theme => theme.spacing(8),
          width: theme => theme.spacing(8),
        }}
      >
        <RateReviewIcon fontSize="large" />
      
       
      </IconButton>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Do you have a favorite leisure activity that you feel lacks suitable outfit choices?"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="What specific vibe do you think is missing from our current outfit selections?"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Which activity in your weekly routine needs a fashion upgrade with our vibe-matching outfits?"
            type="text"
            fullWidth
            variant="standard"
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  onClick= {handleSubmitFeedback}>Submit</Button>
        </DialogActions>
        
      </Dialog>
      <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Feedback submitted successfully"
          action={
            <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
              Close
            </Button>
          }
        />
    </div>
  );
};

export default Vibe;
