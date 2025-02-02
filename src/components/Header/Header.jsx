import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CiLogin } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { FaUpload } from 'react-icons/fa';
import { GiTravelDress } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosCloseCircle } from 'react-icons/io';
import { AuthContext } from '../Auth/AuthContext'; 
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


import './Header.css';

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const navigate = useNavigate();
  const handleclick = () => {
      navigate('/'); // Navigate to home page
   
  };

  return (
    <div className="navbar">
      <span className="website-name" onClick={handleclick}>OutfitStyler<sub>.com</sub></span>
      <span className="menu-icon" onClick={handleMenuToggle}>
        {isMenuOpen ? <IoIosCloseCircle size={30} /> : <GiHamburgerMenu size={30} />}
      </span>
      <ul className={`navlinks ${isMenuOpen ? 'mobile' : ''}`}>
        <Link to="/"><li><FaHome /> Home</li></Link>
        <Link to="/ClosetMatching"><li><GiTravelDress /> Wardrobe</li></Link>
        <Link to="/ClosetMatching"><li><FaUpload /> Upload</li></Link>
        {isLoggedIn ? (
          <>
            <Link to="/" onClick={()=>{alert("Still Developing")}}><li><CgProfile /> Profile</li></Link>
            <Link to="/login" onClick={() => {
            logout(); // Update the context
            
          }}><li><CiLogin /> Logout</li></Link>         
          </>
        ) : (
          
          <Link to="/login"><li><CiLogin /> Login</li></Link>
        )}
      </ul>
    </div>
  );
}

export default Header;
