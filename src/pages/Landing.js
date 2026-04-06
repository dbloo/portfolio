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
            <div className = "infoWrapper">
            <div className = "titleWrapper">
                <h1>The Swiss-Army Knife of Creatives</h1>
                <h2>I can embelish anything from your home, to your next project.</h2>
            </div>

            <img src= "./assets/images/12-thumb.jpg" onLoad={() => setLoaded(true)} loading = "lazy" style = {{opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease',}} />

            </div>

            <button className="navButton">Learn More</button>
            </div>
    

{/* 
            <div id = "bm" className = "anim"></div> */}

           

            

       
    </div>
);
}

export default Landing