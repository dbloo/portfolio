import React from "react";
import Lottie from "lottie-web";
import { useEffect } from "react";
import './Landing.css'
import Skeleton from "../components/Skeleton";
import { useState } from "react";

const Landing = ({category, products}) => {

        const [loaded, setLoaded] = useState(false);
    

      const categoryImages = products[category];


    // useEffect(() => {

    //     var animation = Lottie.loadAnimation({

    //         container: document.getElementById('bm'),
    //         renderer: 'svg',
    //         loop: true,
    //         autoplay: true,
    //         path: 'data.json'
    //    })

    //    return () => animation.destroy();
        
    // }, []);


    


return (

    <div className = "landingContainer">
        <div className="cardContainer">
            <div className="title-container"><h1>New Arrivals</h1></div>
         <div className = "greetingsContainer">
             
             <div className="arrivalsContainer">
                            

               
               <div className="image-carousel">
             
                {categoryImages.slice(0).reverse().map((image) => (
                    <>
                       <div style = {{
                                           transition: 'opacity 0.3s ease',
                      
                                           opacity: loaded ? 0 : 1,
                                           position: 'absolute',
                                           width:"20vw", height: "20vh"
                                           }}>
                                           <Skeleton width="100%" height="100%"   borderRadius={0}/>
                                        </div>

                        <img src={image.imageUrl[0].medium} onLoad={() => setLoaded(true)} loading = "lazy" style = {{opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease',}} alt={image.name} />
                        </>

                    ))}
               </div>
               <button>Shop Prints</button>
                
            </div>
                    </div>


        </div>
{/* 
            <div id = "bm" className = "anim"></div> */}

           

            

       
    </div>
);
}

export default Landing