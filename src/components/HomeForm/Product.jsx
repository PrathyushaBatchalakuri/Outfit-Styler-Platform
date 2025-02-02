import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from 'react';

export default function Product(props) {
  const handleLinkClick = () => {
    // Track link click event
    ReactGA.event({
      category: "User Interaction",
      action: "Clicked "+ props.name + "Link",
      label: props.name, // Optional
    });}
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>
      <Link to={props.urll} onClick={handleLinkClick}><button>Try It</button></Link>
      </p>
    </div>
  );
}