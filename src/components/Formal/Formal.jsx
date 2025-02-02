import './Formal.css';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';
import ReactGA from "react-ga4";
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import BlindIcon from '@mui/icons-material/Blind';
import RateReviewIcon from '@mui/icons-material/RateReview';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';



function Formal() {
  const [openPopover, setOpenPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover(!openPopover); // Toggle the popover
  };
  
  const handlePopoverClose = () => {
    setOpenPopover(false);
    setAnchorEl(null); // Reset the anchor element
  };
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    useEffect(() => {
        ReactGA.send({
          hitType: "pageview",
          page: window.location.pathname,
          title: "formal",
        });
      });
    const navigate = useNavigate();
    const handleButtonClick = (route) => {
        setSelectedButton(route);
        navigate(route);
    };
    const set1 = [image1, image2, image3];
    const [imageIndex, setImageIndex] = useState(0);
    const [selectedButton, setSelectedButton] = useState('Formal Events');
    const [imageSrc, setImageSrc] = useState(set1[0]); // Initialize with the first image

    const handleGenerateOutfitClick = () => {
        ReactGA.event({
            category: "User Interaction",
            action: "Clicked formal-Generate Other outfit Link",
            label:  "formal" // Optional
          });
        setImageIndex((imageIndex + 1) % set1.length); // Increment image index
        setImageSrc(set1[imageIndex]); // Set image source based on the new index
    };

    return (
        <div className="flex-container">
            <div className="col1">
                <h2>Generate outfit Based on</h2>
                <button onClick={() => { setSelectedButton('Formal Events'); handleButtonClick('/Formal'); }} className={selectedButton === 'Formal Events' ? 'selected' : ''}>Formal Events</button>
                <button onClick={() => { setSelectedButton('Casual Events'); handleButtonClick('/Casual'); }} className={selectedButton === 'Casual Events' ? 'selected' : ''}>Casual Events</button>
                <button onClick={() => { setSelectedButton('Seasonal Events'); handleButtonClick('/Seasonal'); }} className={selectedButton === 'Seasonal Events' ? 'selected' : ''}>Seasonal Events</button>
                <button onClick={() => { setSelectedButton('Special Occasions'); handleButtonClick('/Social'); }} className={selectedButton === 'Special Occasions' ? 'selected' : ''}>Social Occasions</button>
            </div>
            <div className="col2">
                <h2>Generated outfit</h2>
                <div style={{ position: 'relative' }}> {/* Make the parent relative */}
                <img className="imgg" src={imageSrc} alt="Generated outfit" />
                <IconButton
    style={{
      position: 'absolute', // Place the icon on top
      top: 10, // Position from the top
      right: 10, // Position from the right
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent white background
    }}
    onClick={handlePopoverClick} // Trigger the popover on click
  >
    <InfoIcon />
  </IconButton>
  <Popover
    open={openPopover}
    anchorEl={anchorEl}
    onClose={handlePopoverClose}
    anchorOrigin={{
      vertical: 'bottom', // Position the popover below the icon
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top', // Align the popover
      horizontal: 'right',
    }}
  >
    <Typography sx={{ p: 2 }}> {/* Content inside the popover */}
    This recommendation is based on the dress code requirements and expectations for formality.
    </Typography>
  </Popover>
            </div>
            </div>
            <div className="col3">
                <button onClick={handleGenerateOutfitClick}>Generate another Outfit</button>
                <Link to="/Accessory" state={{ category: "Formal" , image: imageSrc }}>
                    <button>Add Accessories to your Outfit</button>
                </Link>
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
      
       
      </IconButton><Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="On a scale of 1 to 10, how suitable were the outfit recommendations for formal events, such as business meetings or formal dinners?"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="How well did the suggested outfits meet your expectations for professionalism and elegance? Please provide specific feedback if you found certain suggestions either too casual or overly formal"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="What additional features or outfit elements would you like to see to improve the suitability of the suggested outfits for formal events?"
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
}

export default Formal;