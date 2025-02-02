import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { isSameDay } from 'date-fns'; // Assuming you want to use date-fns for date comparison
import './Calender.css'
import image1 from './image.png';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import BlindIcon from '@mui/icons-material/Blind';
import IconButton from '@mui/material/IconButton';
import RateReviewIcon from '@mui/icons-material/RateReview';


const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const in3Days = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
const in5Days = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

const datesToAddContentTo = [tomorrow, in3Days, in5Days];

function tileContent({ date, view }) {
  // Define a mapping of dates to content and colors
  const contentMap = {
    [tomorrow.toDateString()]: { content: "Meeting", color: "blue" },
    [in3Days.toDateString()]: { content: "Maths", color: "green" },
    [in5Days.toDateString()]: { content: "Renovation", color: "red" },
  };

  // Add class to tiles in month view only
  if (view === 'month') {
    if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      const { content, color } = contentMap[date.toDateString()] || { content: "", color: "black" }; // Get content and color for the date, default to black if not found
      return (
        <div className="custom-tile-content">
          <div className="content-bottom" style={{ color }}>{content}</div>
        </div>
      );
    }
  }
  return null; // Default return to avoid React errors
}

const events = [
  {
    title: 'Meeting: Discuss project timelines',
    temperature: '25°C',
    weather: 'Sunny',
    buttonText: 'Suggest outfit',
    buttonClass: 'meeting',
  },
  {
    title: 'Math class: Algebra revision',
    temperature: '20°C',
    weather: 'Partly cloudy',
    buttonText: 'Suggest outfit',
    buttonClass: 'math',
  },
  {
    title: 'Renovation: Kitchen remodeling',
    temperature: '18°C',
    weather: 'Rainy',
    buttonText: 'Suggest outfit',
    buttonClass: 'renovation',
  },
];

function Carousel() {
  const [currentEvent, setCurrentEvent] = useState(0);

  const nextEvent = () => {
    setCurrentEvent((currentEvent + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEvent((currentEvent - 1 + events.length) % events.length);
  };

  const current = events[currentEvent];

  return (
    <div className="carousel">
      <button onClick={prevEvent} className="carousel-btn prev-btn">⟨</button>
      <div className="carousel-content">
        <h2>Upcoming Events</h2>
        <p>{current.title}</p>
        <p>Temperature: {current.temperature}</p>
        <p>Weather: {current.weather}</p>
        <button className={current.buttonClass}>{current.buttonText}</button>
      </div>
      <button onClick={nextEvent} className="carousel-btn next-btn">⟩</button>
    </div>
  );
}
 
function CustomCalendar() {
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
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
  return (
    <div className="calendar-wrapper"> {/* Wrapper for the entire layout */}
      <div className="left-side">
        <Calendar
          onChange={onChange}
          value={value}
          tileContent={tileContent}
        />
      </div>
      <div className="right-side">
        <Carousel /> 
        <div className="today-weather">
  <h2>Today's Weather</h2>
  <div className="weather-image">
  
  </div>
  <div className="weather-details">
    <p>Temperature: 25°C</p>
    <p>Weather: Sunny</p>
    <button>Suggest Outfit</button>
  </div>
</div>
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
}

export default CustomCalendar;