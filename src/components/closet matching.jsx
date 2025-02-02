import React, { useState } from 'react';
import './closet matching.css';
import ShirtModal from './shirtmodal';
import PantsModal from './pantsmodal';
import EthinicModal from './ethinicmodal'; 
import CasualModal from './casualmodal';
import BussinessModal from './bussinessmodal'; // Import BussinessModal
import ReactGA from "react-ga4";
import { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import BlindIcon from '@mui/icons-material/Blind';
import IconButton from '@mui/material/IconButton';
import RateReviewIcon from '@mui/icons-material/RateReview';

function ClosetMatching() {
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
          title: "closet matching",
        });
      });
   const [selectedButton, setSelectedButton] = useState('Casual Events');
    const [showShirtModal, setShowShirtModal] = useState(false);
    const [showPantsModal, setShowPantsModal] = useState(false);
    const [showEthinicModal, setShowEthinicModal] = useState(false);
    const [showCasualModal, setShowCasualModal] = useState(false);
    const [showBussinessModal, setShowBussinessModal] = useState(false);

    const handleShirtsButtonClick = () => {
        setShowShirtModal(true);
    }

    const handlePantsButtonClick = () => {
        setShowPantsModal(true);
    }

    const handleCloseShirtModal = () => {
        setShowShirtModal(false);
    }

    const handleClosePantsModal = () => {
        setShowPantsModal(false);
    }

    const handleEthinicButtonClick = () => {
        setShowEthinicModal(true);
    }

    const handleCloseEthinicModal = () => {
        setShowEthinicModal(false);
    }

    const handleCasualButtonClick = () => {
        setShowCasualModal(true);
    }

    const handleCloseCasualModal = () => {
        setShowCasualModal(false);
    }

    const handleBussinessButtonClick = () => {
        setShowBussinessModal(true);
    }

    const handleCloseBussinessModal = () => {
        setShowBussinessModal(false);
    }

    const handleFileInputChange = (event) => {
        console.log('File selected:', event.target.files[0].name);
        // Here, you can perform further actions such as uploading the file
    }

    const handleTakePictureClick = async () => {
        try {
            //const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            // You can do further processing with the camera stream here
            console.log('Camera opened');
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    }

    const handleGenerateButtonClick = () => {
        // Implement the functionality for generating here
    }

    return (
        <div className="flex-container">
            <div className="col1">
                <h2>Wardrobe</h2>
                <button className={selectedButton === 'Formal Events' ? 'selected' : ''} onClick={handleShirtsButtonClick}>Shirts</button>
                <button className={selectedButton === 'Formal Events' ? 'selected' : ''} onClick={handlePantsButtonClick}>Pants</button>
                <button className={selectedButton === 'Business Meetings' ? 'selected' : ''} onClick={handleEthinicButtonClick}>Ethnic</button>
                <button className={selectedButton === 'Business Meetings' ? 'selected' : ''} onClick={handleCasualButtonClick}>Casual</button>
                <button className={selectedButton === 'Business' ? 'selected' : ''} onClick={handleBussinessButtonClick}>Business</button>
            </div>

            <div className="col3">
                <h2>Upload your dress from device</h2>
                <button onClick={() => document.getElementById('fileInput').click()}>Upload From Device</button>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileInputChange} />
                Or
                <button onClick={handleTakePictureClick}>Take a Picture</button>
                <button className="Special" onClick={handleGenerateButtonClick}>Generate</button>
            </div>

            {showShirtModal && <ShirtModal onClose={handleCloseShirtModal} />}
            {showPantsModal && <PantsModal onClose={handleClosePantsModal} />}
            {showEthinicModal && <EthinicModal onClose={handleCloseEthinicModal} />}
            {showCasualModal && <CasualModal onClose={handleCloseCasualModal} />}
            {showBussinessModal && <BussinessModal onClose={handleCloseBussinessModal} />}
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
            label="Are You Satisfied with the Outfit Suggestion?"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="What specific feature do you think is missing from closet matching?"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Have you faced any difficulties in navigatig to this page?"
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

export default ClosetMatching;
