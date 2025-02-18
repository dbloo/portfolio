import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  const [isOpen, setIsOpen] = useState(false); 

  const [expand, setExpand] = useState(false); 


  useEffect(() => {
    setExpand(false);
    setIsOpen(false);


  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpand(false);

  };

  const expandMenu = () => {
    setExpand(!expand);
  };

 

  return (

    

    <div className= "navWrapper">   

      <nav> 
          <div className = "logo"> 
            <img src = "./assets/icons/dbsig.svg" alt = "logo"></img>
          </div>
          <div className="hamburger" onClick={toggleMenu}>

            {!isOpen ? (
    
            <img src = "./assets/icons/burger-menu.svg" alt = "hamburgerButton" className = "hamburgerButton"></img>
          ) : (

            <img src = "./assets/icons/x.svg" alt = "logo" className = "closeButton"></img>

          )}

        </div>
          <ul className={`nav-links ${isOpen ? "open" : ""}`} >
            <li className = "graphicdesign"onClick={expandMenu} style={{cursor: "pointer"}}>Graphic Design</li>

            {expand ? (
              <div className = {`expanded-gd ${expand ? "expanded" : ""}`}>
                <li className = "li-logos"><Link to="/graphicDesign/logos" onClick={toggleMenu}>Logos</Link></li>
                <li className = "li-logos"><Link to="/graphicDesign/cover-art" onClick={toggleMenu}>Cover Art</Link></li>
                <li className = "li-logos"><Link to="/graphicDesign/flyers" onClick={toggleMenu}>Flyers</Link></li>
              </div>
             ):(<></>)}
            <li><Link to="/paintings"onClick={toggleMenu}>Paintings</Link></li>
            <li><Link to="/drawings"onClick={toggleMenu}>Drawings</Link></li>
            <li><Link to="/about"onClick={toggleMenu}>About</Link></li>
          </ul>

      
      </nav>
    </div>
  );
}

export default Header