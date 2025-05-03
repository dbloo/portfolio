import React, { useEffect } from 'react';
import './TraditionalArt.css';
import { Link } from 'react-router-dom';

const VideoReels = () => {



  
  

  
  
  return (
    <div style={{marginTop: "16vh"}}>

      <div className = "text-container">
        <h1 className = "text-page-top">Reel</h1>
        <h3 className = "text-page-top-2">Motion picture</h3>
      </div>

      <div className= "container-video">

        <iframe 

          width="100%" 
          height="630" 
          src="https://www.youtube.com/embed/xaqZV1ecbi4?si=exQiOOZPA2qQaxFg" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>

        </iframe>

        <iframe 
        src = "https://youtube.com/embed/FSh7hbgB-sU?si=ZdA2cHD-k8PzdOK7" 
        type = "video/mp4"
        frameborder="0" 
        width="100%" 
        height="610" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 

        >


        </iframe>
      
      
      </div>
    </div>
  );
}

export default VideoReels;