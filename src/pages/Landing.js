import React from "react";
import Lottie from "lottie-web";
import { useEffect } from "react";
import './Landing.css'

function Landing(){
    useEffect(() => {

        var animation = Lottie.loadAnimation({

            container: document.getElementById('bm'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'data.json'
       })

       return () => animation.destroy();
        
    }, []);


    


return (

    <div className = "landingContainer">
         <div className = "greetingsContainer">

            <h1 style={{fontSize: "32px"}}>GReeTINGS</h1>

        </div>

            <div id = "bm" className = "anim"></div>

       
    </div>
);
}

export default Landing