import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  const [isOpen, setIsOpen] = useState(false); 

  const [expandGD, setExpandGD] = useState(false); 
  const [expandVD, setExpandVD] = useState(false); 

  const scrollRef = useRef(window.scrollY);


  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const hamMenu = document.querySelector('hamburger')

    const handleScroll = () => {


      const currentScrollPos = window.scrollY;

  
      if (currentScrollPos > prevScrollPos ) {

        // console.log('Scrolling down'); 

        setVisible(false);
      } else if (currentScrollPos < prevScrollPos  + 1){

        // console.log('Scrolling up'); 


        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);

      console.log(prevScrollPos)


  


    };
  
    useEffect(() => {

      window.addEventListener('scroll', handleScroll);
  
      return () => {

        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandGD(false);
    setExpandVD(false);


  };

  const logoToggleMenu = () => {
    setIsOpen(false);
    setExpandGD(false);
    setExpandVD(false);


  };

  const expandMenuGD = () => {
    setExpandGD(!expandGD);
    setExpandVD(false);
  };

  const expandMenuVD = () => {
    setExpandVD(!expandVD);
    setExpandGD(false);

  };

 

  return (

    <header >

    <div className = {`navWrapper ${!visible && 'hidden'}`}>


      <nav> 
          <div className = "logo" onClick={logoToggleMenu}> 
          <Link className='logolink' to="/" >

            <img src = "./assets/icons/dbsig.svg" alt = "logo"></img>
            
            </Link>
          </div>
          <div className = "hamburger-wrapper" onClick={toggleMenu}>
          <div className="hamburger" >

    
            {/* // <img src = "./assets/icons/burger-menu.svg" alt = "hamburgerButton" className = "hamburgerButton"></img> */}
           
              <span className = {`ham ${isOpen ? "active" : "" }`}></span>
              <span className = {`ham2 ${isOpen ? "active" : "" }`}></span>
              <span className = {`ham3 ${isOpen ? "active" : "" }`}></span>
            



        
           
            {/* // <img src = "./assets/icons/x.svg" alt = "logo" className = "closeButton"></img> */}

         

        </div>
        </div>

          <ul className={`nav-links ${isOpen ? "open" : ""}`} >
            <li className = "graphicdesign"onClick={expandMenuGD} style={{cursor: "pointer"}}>Graphic Design</li>

            {expandGD ? (
              <div className = {`expanded-gd ${expandGD ? "expanded" : ""}`}>
                <li className = "li-logos"><Link to="/graphicDesign/logos" onClick={toggleMenu}>Logos</Link></li>
                <li className = "li-logos"><Link to="/graphicDesign/cover-art" onClick={toggleMenu}>Cover Art</Link></li>
                <li className = "li-logos"><Link to="/graphicDesign/flyers" onClick={toggleMenu}>Flyers & Posters</Link></li>
              </div>
             ):(<></>)}

            <li className = "video"onClick={expandMenuVD} style={{cursor: "pointer"}}>Video</li>

            {expandVD ? (
              <div className = {`expanded-gd ${expandVD ? "expanded" : ""}`}>
                {/* <li className = "li-logos"><Link to="/video/shortform" onClick={toggleMenu}>Short Form</Link></li>
                <li className = "li-logos"><Link to="/video/musicvideos" onClick={toggleMenu}>Music Videos</Link></li>
                <li className = "li-logos"><Link to="/video/shortfilms" onClick={toggleMenu}>Short Films</Link></li> */}
                <li className = "li-logos"><Link to="/video/reels" onClick={toggleMenu}>Reels</Link></li>

              </div>
            ):(<></>)}
            
            <li><Link to="/paintings"onClick={toggleMenu}>Paintings</Link></li>
            <li><Link to="/drawings"onClick={toggleMenu}>Drawings</Link></li>
            <li><Link to="/about"onClick={toggleMenu}>About</Link></li>
          </ul>

      
      </nav>
    </div>
    </header>
  );
}

export default Header