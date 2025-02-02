import React from 'react';
import image1 from './image.png';
import './Donation.css';
import ReactGA from "react-ga4";
import { useEffect } from 'react';
const DonationPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "donation",
    });
  });
  return (
    <div className="donation-page">
      <main>
        <section className="donation-info">
          <div className="donation-details">
            <h2>Why Donate Clothes?</h2>
            <br></br>
            <p>
              Donating clothes can make a huge difference in someone's life. Your
              old clothes can provide warmth, protection, and confidence to those
              in need.
            </p>
            <p>
              Whether it's gently used clothes or new ones, your donations can
              help individuals and families in various ways.
            </p>
          </div>
        </section>
        <div className="donation-image">
          <img src={image1} alt="Clothes Donation" />
        </div>
        <h2>Donation Options</h2>
        <section className="donation-options">
          <div className="donation-card">
            <p>Donate a bag of gently used clothes</p>
            <button>Donate Now</button>
          </div>
          <div className="donation-card">
            <p>Donate a new set of clothes</p>
            <button>Donate Now</button>
          </div>
          <div className="donation-card">
            <p>Donate winter coats and jackets</p>
            <button>Donate Now</button>
          </div>
        </section>
      </main>
      <footer>
        <p>Thank you for your generosity!</p>
      </footer>
    </div>
  );
};

export default DonationPage;
