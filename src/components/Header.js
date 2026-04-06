import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Header.css';

import CheckoutPage from '../pages/CartPage';
import { use } from 'react';

function Header() {

  const [isOpen, setIsOpen] = useState(false); 

  const [expandGD, setExpandGD] = useState(false); 
  const [expandVD, setExpandVD] = useState(false); 
  const [expandShop, setExpandShop] = useState(false); 
  const [expandTA, setExpandTA] = useState(false); 
  const [expandPF, setExpandPF] = useState(false); 
   const nodeRefs = useRef(null);




  const scrollRef = useRef(window.scrollY);

 

  const [visible, setVisible] = useState(true);

  const hamMenu = document.querySelector('hamburger')

    
// useEffect(() => {
//   const handleBodyclick = () => {


//     document.body.addEventListener('click')
//   }
// }, []);


  
    useEffect(() => {

      let prevScrollPos = window.scrollY;

      const handleScroll = () => {


      const currentScrollPos = window.scrollY;

  
      if (currentScrollPos - 20 > prevScrollPos ) {

         console.log('Scrolling down'); 

        setVisible(false);
      } 
      if (currentScrollPos  < prevScrollPos ){

         console.log('Scrolling up'); 


        setVisible(true);
      }

      prevScrollPos = currentScrollPos


      console.log(currentScrollPos)


  


    };

       
      


      window.addEventListener('scroll', handleScroll);
  
      return () => {



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
    setExpandPF(false)



  };

  const expandMenuPF = () => {

    setExpandPF(!expandPF);
    setExpandGD(false);
    setExpandVD(false);
    setExpandTA(false);
    setExpandShop(false);




  };

  const expandMenuTA = () => {

   
    setExpandTA(!expandTA);
    setExpandGD(false);
    setExpandVD(false);
    setExpandShop(false);




  };

  

  

  const containerStylePF = {
    opacity: expandPF ? "50%" : "100%",
    // transition: 'transform 0.4s ease-in-out'



     

  }

  const containerStyleGD = {
    opacity: expandGD ? "50%" : "100%",
    // transform: expandGD ? "translateX(-140px)" : "translateX(0px)",
    // position: expandGD? "fixed" : "relative",
    // transition: 'opacity 0.8s ease-in-out',
    // transition: 'transform 0.4s ease-in-out'

     

  }

  const containerStyleTA = {
    opacity: expandTA ? "50%" : "100%",
    // transform: expandTA ? "translateX(-140px)" : "translateX(0px)",
    // position: expandTA? "fixed" : "relative",
    // transition: 'opacity 0.8s ease-in-out',
    // transition: 'transform 0.4s ease-in-out'

     

  }


  const containerStyleShop = {
    
    opacity: expandShop ? "50%" : "100%",

    // transform: expandShop ? "translateX(-140px)" : "translateX(0px)",
    // position: expandShop? "fixed" : "relative",
    // transition: 'opacity 0.8s ease-in-out',
    // transition: 'transform 0.4s ease-in-out'

     

  }

  const containerStyleHide ={
      opacity:  '0',
      transition: 'opacity 0.3s ease-in-out'
  }

 

  return (

    <header >

    <div className = {`navWrapper ${!visible ? 'hidden' : " "}`}>


      <nav> 
          <div className = "logo" onClick={logoToggleMenu}> 
          <Link className='logolink' to="/" >

            <img src = "./assets/icons/dbsig.svg" alt = "logo"></img>
            
            </Link>

            
          </div>

          <div className='cart'>

              <Link className='cartlink' to="/checkout"  onClick={()=>setIsOpen(false)} >


                    <img src = "./assets/icons/cart.svg" alt = "logo"></img>


              </Link>



          </div>
          <div className = "hamburger-wrapper" onClick={toggleMenu}>
          <div className="hamburger" >
           
              <span className = {`ham ${isOpen ? "active" : "" }`}></span>
              <span className = {`ham2 ${isOpen ? "active" : "" }`}></span>
              <span className = {`ham3 ${isOpen ? "active" : "" }`}></span>
         

        </div>
        </div>

          {/* <ul className={`nav-links ${isOpen ? "open" : ""}`} >
            
          <li className = "graphicdesign"onClick={expandMenuPF} style={{cursor: "pointer"}}>Portfolio</li>
          {expandPF ? (
            <>
          <li className = "graphicdesign"onClick={expandMenuTA} style={{cursor: "pointer"}}>Traditional Art</li>

          {expandTA ? (
           
           <div className = {`expanded-gd ${expandTA ? "expanded" : ""}`}>
              <Link to="/paintings"onClick={toggleMenu}><li>Paintings</li></Link>
              <Link to="/drawings"onClick={toggleMenu}><li>Drawings</li></Link>
              

              </div>
              ):(<></>)}
            <li className = "graphicdesign"onClick={expandMenuGD} style={{cursor: "pointer"}}>Graphic Design</li>

            {expandGD ? (
              <>

           


              <div className = {`expanded-gd ${expandGD ? "expanded" : ""}`}>
                <Link to="/graphicDesign/logos" onClick={toggleMenu}><li className = "li-logos">Logos</li></Link>
                <Link to="/graphicDesign/cover-art" onClick={toggleMenu}> <li className = "li-logos">Cover Art</li></Link>
                <Link to="/graphicDesign/flyers" onClick={toggleMenu}> <li className = "li-logos">Flyers & Posters</li></Link>
              </div>

              </>

                            ):(<></>)}


              </>

             ):(<></>)}

             <li className = "video"onClick={expandMenuVD} style={{cursor: "pointer"}}>Video</li>

            {expandVD ? (
              <div className = {`expanded-gd ${expandVD ? "expanded" : ""}`}>
                 <li className = "li-logos"><Link to="/video/shortform" onClick={toggleMenu}>Short Form</Link></li>
                <li className = "li-logos"><Link to="/video/musicvideos" onClick={toggleMenu}>Music Videos</Link></li>
                <li className = "li-logos"><Link to="/video/shortfilms" onClick={toggleMenu}>Short Films</Link></li> 
               <Link to="/video/reels" onClick={toggleMenu}> <li className = "li-logos">Reels</li></Link>

              </div>
            ):(<></>)} 

           <li><Link to="/merch"onClick={toggleMenu}>Merch</Link></li> 


          <li className = "shop"onClick={expandMenuShop} style={{cursor: "pointer"}}>Shop</li>

            {expandShop ? (
              <div className = {`expanded-gd ${expandShop ? "expanded" : ""}`}>
                 <li className = "li-logos"><Link to="/video/shortform" onClick={toggleMenu}>Short Form</Link></li>
                <li className = "li-logos"><Link to="/video/musicvideos" onClick={toggleMenu}>Music Videos</Link></li>
                <li className = "li-logos"><Link to="/video/shortfilms" onClick={toggleMenu}>Short Films</Link></li> 
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
          </ul> */}
           
          <ul className={`nav-links ${isOpen ? "open":" "}`} >

            
              <div className="links" >

            
            <>
            <li id = "item1" onClick={expandMenuPF} style = {containerStylePF}>Portfolio</li>


              <div className={`expanded-item ${expandPF ? "expanded": ""}`}  >   
                
                  <li id = "item2" onClick={expandMenuTA} style = {containerStyleTA}>Traditional Art</li >

                <div className={`expanded-item ${expandTA ? "expanded": ""}`} >
                  <Link to="/paintings"onClick={toggleMenu}>

                    <li>Paintings </li>

                  </Link>

                  <Link to="/drawings"onClick={toggleMenu}>

                      <li>Drawings </li>

                  </Link>


                </div> 
                
              

                  <li id = "item3"onClick={expandMenuGD} style = {containerStyleGD}>Graphic Design</li>

                  <div className={`expanded-item ${expandGD ? "expanded": ""}`}>

                    <Link to="/cover-art"onClick={toggleMenu}>

                        <li> Cover Art </li>

                    </Link>

                    <Link to="/flyers"onClick={toggleMenu}>

                        <li> Flyers </li>

                          </Link>

                   <Link to="/logos"onClick={toggleMenu}>
                                          

                        <li> Logos </li>

                        </Link>

                  <Link to="/merch"onClick={toggleMenu}>


                        <li> Merch </li> 
                        
                        </Link>
                  </div> 

              </div>
              </>

              
            
            <li id = "item4" onClick={expandMenuShop} style = {containerStyleShop}>Shop</li>

    

              <div  className={`expanded-item ${expandShop ? "expanded": ""}`}>
              {/* <Link to="/shop-originals"onClick={toggleMenu}>

                  <li>Originals</li>

              </Link> */}
                                        
                <Link to="/" onClick={toggleMenu}>

                  <li>Prints</li>

                </Link>

              </div>

    
            <Link to="/about" onClick={toggleMenu}>

              <li>About</li>

            </Link>


            </div>

            

            <div className='cart-desktop' onClick={toggleMenu}>
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