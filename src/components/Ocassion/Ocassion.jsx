import './Ocassion.css' 
import image1 from './image-1.png'
import image2 from './image-2.png'
import image3 from './image-3.png'
import image4 from './image-4.png'
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from 'react'

function Ocassion() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Ocassion",
    });
  });
  return (
    <>
      <h1 className="ocassion-header">Select Outfit Based on Occasion or Calendar Events</h1>
      <div className="c1">
        <div className="flipcards">
          <Link to="/Formal">
            <div className="container">
              <div className="cardd">
                <div className="front">
                  <h2>Formal Events</h2>
                  <img src={image1} alt="Formal Event" />
                </div>
                <div className="back">
                  <p>Formal events often require suits, dresses, or more business-like attire.</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/Casual">
            <div className="container">
              <div className="cardd">
                <div className="front">
                  <h2>Casual Events</h2>
                  <img src={image2} alt="Casual Event" />
                </div>
                <div className="back">
                  <p>Casual events allow for more relaxed clothing like jeans and T-shirts.</p>
                </div>
              </div>
            </div>
          </Link>


          <Link to="/Seasonal">
            <div className="container">
              <div className="cardd">
                <div className="front">
                  <h2>Seasonal Events</h2>
                  <img src={image4} alt="Seasonal Event" />
                </div>
                <div className="back">
                  <p>Seasonal events offer a chance to wear clothing that suits the season.</p>
                </div>
              </div>
            </div>
          </Link>
          
          <Link to="/Social">
            <div className="container">
              <div className="cardd">
                <div className="front">
                  <h2>Social Events</h2>
                  <img src={image3} alt="Social Event" />
                </div>
                <div className="back">
                  <p>Social events often have a broader range of attire, depending on the context.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="separator-line" />
        <div className="additional-info">
          <p>
            Choose from the flipcards above for different occasions, or personalize your outfit based on your calendar events. Explore more options to find the perfect outfit for every occasion.
          </p>
        </div>

        <div className="personalize-section">
          <h2 className="personalize-header">Personalize Outfit Based on Your Calendar Events</h2>
          <Link to="/CustomCalendar">
            <button className="personalize-button">Personalize Outfit</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Ocassion;