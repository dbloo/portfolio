import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className = "about-container">
      <div clasName = "about-text-container">
        <h1 >Dominic Bloomfield</h1>
        <p>
        Is an Afro-Carribbean multidisciplinary artist from Mandeville Jamaica that specializes in traditional art and graphic design, as well as cinematograpgy and video editing. 
        Dominic's work primarily highlights his experience as a black man, with the intention of carving out a space for other black people to feel at home. His paintings,
        in juxtaposition to his illustrations, offer vibrant colors and warped anatomy and perspective against liminal and abstract backgrounds,
        which communicates a sense of playfulness that leaves the viewer filling in the pieces with their own experiences. Dominic is also a graphic designer and video editor by trade, having
        worked with mostly local artists and brands to solidify their identity and design language.         
        </p>
      </div>

      <img src = "./assets/images/portrait.JPEG"></img>
       
    </div>
  );
}

export default AboutMe;