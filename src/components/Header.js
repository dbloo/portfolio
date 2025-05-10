import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import CheckoutPage from '../pages/CartPage';

function Header() {

  const [isOpen, setIsOpen] = useState(false); 

  const [expandGD, setExpandGD] = useState(false); 
  const [expandVD, setExpandVD] = useState(false); 
  const [expandShop, setExpandShop] = useState(false); 
  const [expandTA, setExpandTA] = useState(false); 



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
<<<<<<< HEAD



  
    useEffect(() => {

       
      


=======
  
    useEffect(() => {

>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
      window.addEventListener('scroll', handleScroll);
  
      return () => {

<<<<<<< HEAD


=======
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandGD(false);
    setExpandVD(false);
    setExpandShop(false);
    setExpandTA(false);




  };

  const logoToggleMenu = () => {
    setIsOpen(false);
    setExpandGD(false);
    setExpandVD(false);
    setExpandShop(false);
    setExpandTA(false);




  };

  const expandMenuGD = () => {
    setExpandGD(!expandGD);
    setExpandVD(false);
    setExpandShop(false);
    setExpandTA(false);


  };

  const expandMenuVD = () => {
    setExpandVD(!expandVD);
    setExpandGD(false);
    setExpandShop(false);
    setExpandTA(false);



  };

  const expandMenuShop = () => {
    setExpandShop(!expandShop);
    setExpandGD(false);
    setExpandVD(false);
    setExpandTA(false);



  };

  const expandMenuTA = () => {
    setExpandTA(!expandTA);
    setExpandGD(false);
    setExpandVD(false);
    setExpandShop(false);




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

          <div className='cart'>

              <Link className='cartlink' to="/checkout" >


                    <img src = "./assets/icons/cart.svg" alt = "logo"></img>


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

          <li className = "graphicdesign"onClick={expandMenuTA} style={{cursor: "pointer"}}>Traditional Art</li>

            {expandTA ? (
              <div className = {`expanded-gd ${expandTA ? "expanded" : ""}`}>
                {/* <li className = "li-logos"><Link to="/video/shortform" onClick={toggleMenu}>Short Form</Link></li>
                <li className = "li-logos"><Link to="/video/musicvideos" onClick={toggleMenu}>Music Videos</Link></li>
                <li className = "li-logos"><Link to="/video/shortfilms" onClick={toggleMenu}>Short Films</Link></li> */}
              <Link to="/paintings"onClick={toggleMenu}><li>Paintings</li></Link>
              <Link to="/drawings"onClick={toggleMenu}><li>Drawings</li></Link>

              </div>
            ):(<></>)}

            <li className = "graphicdesign"onClick={expandMenuGD} style={{cursor: "pointer"}}>Graphic Design</li>

            {expandGD ? (
              <div className = {`expanded-gd ${expandGD ? "expanded" : ""}`}>
                <Link to="/graphicDesign/logos" onClick={toggleMenu}><li className = "li-logos">Logos</li></Link>
                <Link to="/graphicDesign/cover-art" onClick={toggleMenu}> <li className = "li-logos">Cover Art</li></Link>
                <Link to="/graphicDesign/flyers" onClick={toggleMenu}> <li className = "li-logos">Flyers & Posters</li></Link>
              </div>
             ):(<></>)}

            <li className = "video"onClick={expandMenuVD} style={{cursor: "pointer"}}>Video</li>

            {expandVD ? (
              <div className = {`expanded-gd ${expandVD ? "expanded" : ""}`}>
                {/* <li className = "li-logos"><Link to="/video/shortform" onClick={toggleMenu}>Short Form</Link></li>
                <li className = "li-logos"><Link to="/video/musicvideos" onClick={toggleMenu}>Music Videos</Link></li>
                <li className = "li-logos"><Link to="/video/shortfilms" onClick={toggleMenu}>Short Films</Link></li> */}
               <Link to="/video/reels" onClick={toggleMenu}> <li className = "li-logos">Reels</li></Link>

              </div>
            ):(<></>)}

          <li className = "shop"onClick={expandMenuShop} style={{cursor: "pointer"}}>Shop</li>

            {expandShop ? (
              <div className = {`expanded-gd ${expandShop ? "expanded" : ""}`}>
                {/* <li className = "li-logos"><Link to="/video/shortform" onClick={toggleMenu}>Short Form</Link></li>
                <li className = "li-logos"><Link to="/video/musicvideos" onClick={toggleMenu}>Music Videos</Link></li>
                <li className = "li-logos"><Link to="/video/shortfilms" onClick={toggleMenu}>Short Films</Link></li> */}
                <Link to="/shop-prints" onClick={toggleMenu}><li className = "li-logos">Prints</li></Link>
                <Link to="/shop-originals" onClick={toggleMenu}> <li className = "li-logos">Originals</li></Link>


              </div>
            ):(<></>)}
          
            
            
            <li><Link to="/about"onClick={toggleMenu}>About</Link></li>

            <div className='cart-desktop'>
            <Link className='cartlink' to="/checkout" >


            <img src = "./assets/icons/cart.svg" alt = "logo"></img>
            </Link>

            </div>
          </ul>

          
      </nav>

      
    </div>
    </header>
  );
}

export default Header