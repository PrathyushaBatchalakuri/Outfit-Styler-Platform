import React from 'react'
import './Home.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { productData } from './data';
import Product from './Product';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function Home(props) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "home",
    });
  })
  const product = productData.map((item) => (
    <Product
      key={item.id} // Unique key for each Product component
      name={item.name}
      url={item.imageurl}
      price={item.price}
      urll={item.url}
    />
  ));
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div class="home">
    <div class="home-content">
      Welcome to OutfitStyler - Your Personal Wardrobe Companion!<br/><br/>
    Are you tired of spending precious minutes every morning staring at your closet, wondering what to wear? Look no further! Outfit Styler is here to 
    <br/>revolutionize the way you interact with your wardrobe.  
    <br/><br/>Outfitstyler - Add style to your Life
    </div>
    <Carousel responsive={responsive} className='cara'>
    {product}
    </Carousel>
    </div>
  )
}

export default Home