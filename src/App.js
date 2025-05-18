import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import GraphicDesign from "./pages/GraphicDesign";
import TraditionalArt from "./pages/TraditionalArt";
import Drawings from "./pages/Drawings";
import Logos from "./pages/Logos";
import Landing from "./pages/Landing.js";


import Header from "./components/Header"; 
import AboutMe from "./pages/AboutMe.js";
import Footer from "./components/Footer.js";
import Info from "./components/Info.js";
import Merch from "./pages/Merch.js";


import './index.css';
import { imageData } from "./components/ImageData.js";
import CoverArt from "./pages/CoverArt.js";
import Flyers from "./pages/Flyers.js";
import MusicVideo from "./pages/MusicVideo.js";
import VideoShortForm from "./pages/VideoShortForm.js";
import VideoShortFilm from "./pages/VideoShortFilm.js";
import VideoReels from "./pages/VideoReels.js";
import ShopPrints from "./pages/ShopPrints.js"

import Construction from "./pages/Construction.js";
import ProductPage from "./pages/ProductPage.js";
import ShopOriginals from "./pages/ShopOriginals.js";
import CartPage from "./pages/CartPage.js";
import CheckoutSuccess from "./pages/CheckoutSuccess.js";


import { CartProvider } from './context/CartContext';






function App() {

  const imageData   = {

    paintings: [
    
    {
      id: 1,
      name: "GOLDBACK",
      description: "Look at the cut of that boy JEANS 🔥🔥",
      imageUrl: "/assets/images/goldback.JPG",
      size: "large",
      materials: "2ft x 3ft Acrylic on Canvas "

    },

    {
      id: 15,
      name: "FLY CATCHER",
      description: "Frog",
      imageUrl: "/assets/images/flycatcher.JPG",
      size: "tall",
      materials: "24 x 36in Acrylic on Canvas "

    },

    {
      id: 16,
      name: "Make less Money",
      description: "Success isn't always about hard work. Sometimes it's just about getting reallyreallyreally uncomfortable. ",
      imageUrl: "/assets/images/money.JPG",
      size: "tall",
      materials: "5 x 3ft Acrylic on Canvas "

    },

    {

    id: 2,
    name: "THRU LA BLU",
    description: "This one tastes like raspberry.",
    imageUrl: "/assets/images/BLU.jpg",
    size: "tall",
    materials: "12in x 16in Acrylic on Canvas "

    },

   
    {
      id: 3,
      name: "SUNDOWN",
      description: "Just down the lane.",
      imageUrl: "/assets/images/sundown.jpg",
      size: "medium",
      materials: "48in x 48in Acrylic on Canvas "

    },

    {
      id: 4,
      name: "FORWARD",
      description: "Memories left behind still dictate the memories to come.",
      imageUrl: "/assets/images/forward.jpg",
      size: "medium",
      materials: "40in x 40in Acrylic on Canvas "

    },

   
    {
      id: 5,
      name: "LOOK UP",
      description: "As seen in a dream, I knew I needed to bring it back with me.",
      imageUrl: "/assets/images/look up.JPG",
      size: "medium",
      materials: "30in x 30in Acrylic on Canvas "
    },
    {
      id: 6,
      name: "Abstract Studio Mural",
      description: "Commissioned for an artists studio space",
      imageUrl: "/assets/images/mural.JPG",
      size: "large",
      materials: "10ft x 15ft Acrylic paint on Drywall "
    },

    {
      id: 7,
      name: "I THINK I THINK TOO MUCH",
      description: "Thought upon thought after thought.",
      imageUrl: "/assets/images/think.jpg",
      size: "tall",
      materials: "45in x 31in Acrylic on Canvas "

    },
    {
      id: 8,
      name: "THROUGH",
      description: "I rode a horse this past summer. It wasn't my first time but it was certainly the fastest I'd ever gone.",
      imageUrl: "/assets/images/through.JPG",
      size: "medium",
      materials: "20in x 20in Acrylic & Oil Pastel on Canvas "

    },

    {
      id: 9,
      name: "SHOW YOUR FACE",
      description: "There is always something to hide.",
      imageUrl: "/assets/images/SYF.jpg",
      size: "tall",
      materials: "20in x 24in Acrylic on Canvas "

    },

    {
      id: 10,
      name: "DON'T BEAT YOURSELF UP",
      description: "Do as I say, not as I do.",
      imageUrl: "/assets/images/dbyu.JPG",
      size: "tall",
      materials: "20in x 24in Acrylic on Canvas "

    },

    {
      id: 11,
      name: "Do You Want My Tomatoes?",
      description: "❤️",
      imageUrl: "/assets/images/DYWMT.JPG",
      size: "medium",
      materials: "40in x 40in Acrylic on Canvas "

    },

    {
      id: 12,
      name: "ADEQUATE NATURAL",
      description: "It tok me forever to finish this one. Not because the process was labour intensive, or techically impressive. I just didn't wan't to deal with my emotions at the time. ",
      imageUrl: "/assets/images/adequate.jpg",
      size: "medium",
      materials: "40in x 40in Acrylic on Canvas ",
      selling: "yes",
      price: "50.00"

    },

    {
      id: 13,
      name: "HEAVY",
      description: "An ode to the poignant mind, stagnant in a world that cares not. The relished thinker is locked in a state of self reflect; their void will grow, but not before they do.",
      imageUrl: "/assets/images/heavy.JPG",
      size: "medium",
      materials: "11.5in x 11.5in Acrylic and Marker Pen on Cavnas"

    },

    {
      id: 14,
      name: "TRY AGAIN",
      description: "Reach for the sky.",
      imageUrl: "/assets/images/tryagain.JPG",
      size: "medium",
      materials: "36in x 36in Acrylic on Cavnas"

    },

    {
      id: 14,
      name: "HUNDRED MARK",
      description: "💯",
      imageUrl: "/assets/images/hundred.jpg",
      size: "tall",
      materials: "22in x 18in Acrylic and Oil Pastel on Canvas "

    },

    {
      id: 15,
      name: "CATCH AND RELEASE",
      description: " ",
      imageUrl: "/assets/images/catch.JPG",
      size: "medium",
      materials: "36in x 36in Acrylic on Canvas "

    },

    {
      id: 16,
      name: "Mr. Crystal",
      description: "",
      imageUrl: "/assets/images/crystal.JPG",
      size: "medium",
      materials: "36in x 36in Acrylic on Canvas "

    },

  ],

  drawings: [

    {
      id: 1,
      name: "Rogue Poision",
      description: " ",
      imageUrl: "/assets/images/rogue.JPG",
      size: "tall",
      materials: "8.5 x 11 in Pen and Ink on paper "

    },

    {
      id: 2,
      name: "SHUTDOWN",
      description: " ",
      imageUrl: "/assets/images/SD.jpg",
      size: "tall",
      materials: "8.5 x 11 in Pen and Ink on paper"

    },

    {
      id: 3,
      name: "The Arbiter",
      description: " ",
      imageUrl: "/assets/images/arbiter.JPG",
      size: "tall",
      materials: "8.5in x 11in Pen and Ink on Paper (vectorized) "

    },

    {
      id: 4,
      name: "Direct Dismay",
      description: " ",
      imageUrl: "/assets/images/direct.JPG",
      size: "tall",
      materials: "8.5in x 11in Digital "

    },

    {
      id: 5,
      name: "CUSP",
      description: " ",
      imageUrl: "/assets/images/cusp.JPG",
      size: "tall",
      materials: "8.5in x 11in Digital "

    },

    {
      id: 6,
      name: "DAMNED",
      description: " ",
      imageUrl: "/assets/images/damned.JPG",
      size: "tall",
      materials: "8.5in x 11in Digital "

    },

    {
      id: 7,
      name: "All Akimbo",
      description: " ",
      imageUrl: "/assets/images/akimbo.jpg",
      size: "tall",
      materials: "8.5in x 11in Digital "

    },

    {
      id: 8,
      name: "i trusted u",
      description: " ",
      imageUrl: "/assets/images/trusted.jpg",
      size: "tall",
      materials: "8.5in x 11in Digital "

    },

    {
      id: 9,
      name: "thisisntarobberyitsjustperspective",
      description: " ",
      imageUrl: "/assets/images/robbery.JPG",
      size: "tall",
      materials: "8.5in x 11in Digital "

    },

  ],

  flyers: [

    {
      id: 1,
      name: "SONDER",
      description: " ",
      imageUrl: "/assets/images/sonder.jpg",
      size: "tall",
      materials: "1350 x 1080px Movie Poster Mockup"

    },

    {
      id: 2,
      name: "DOUBLE",
      description: " ",
      imageUrl: "/assets/images/duble.jpg",
      size: "tall",
      materials: "1350 x 1080px Movie Poster Mockup"

    },

    {
      id: 3,
      name: "BAUMHEIM",
      description: " ",
      imageUrl: "/assets/images/baum.jpg",
      size: "tall",
      materials: "1350 x 1080px Movie Poster Mockup"

    },
   
   

    {

      
      id: 4,
      name: "BREAKCORE",
      description: "A rave hosted by SATURNSARii with Perrero Del Futuro in Wynwood, Miami FL on March, 11 2023 ",
      imageUrl: "/assets/images/bc.jpg",
      size: "tall",
      materials: "1350 x 1080px Flyer"

    },

    

    {
      id: 5,
      name: "IN DUE TIME",
      description: " ",
      imageUrl: "/assets/images/timedue.jpg",
      size: "tall",
      materials: "1350 x 1080px Poster"

    },

    {
      id: 6,
      name: "PRESS ON",
      description: " ",
      imageUrl: "/assets/images/press on.jpg",
      size: "tall",
      materials: "1350 x 1080px Poster"

    },

    {
      id: 7,
      name: "VILE",
      description: " ",
      imageUrl: "/assets/images/vile.jpg",
      size: "tall",
      materials: "1080 x 1920px Poster"

    },

    {
      id: 8,
      name: "FAST IS IN",
      description: " ",
      imageUrl: "/assets/images/moveover.jpg",
      size: "tall",
      materials: "1080 x 1920px Poster"

    },

    {
      id: 9,
      name: "SQUARE 1",
      description: " ",
      imageUrl: "/assets/images/sq11.JPG",
      size: "tall",
      materials: "1080 x 1920px Poster"

    },




   
   

  ],

  merch: [
    {

      id: 1,
      name: "MESS",
      description: " ",
      imageUrl: "/assets/images/messhoodie.jpg",
      size: "tall",
      materials: "Heavyweight Hoodie, Direct to Garment Print"

  },

  {

      id: 2,
      name: "SPIKE TEE",
      description: "Unpleasant Design. ",
      imageUrl: "/assets/images/spiketee.jpg",
      size: "tall",
      materials: "Heavyweight T-shirt, Direct to Garment Print"

  },
  {

      id: 3,
      name: "Content",
      description: "Unpleasant Design. ",
      imageUrl: "/assets/images/content.jpg",
      size: "tall",
      materials: "Heavyweight T-shirt, Direct to Garment Print"

  },

  {

      id: 4,
      name: "PROJECT: RUKUS",
      description: "Band Merch for Project: Rukus",
      imageUrl: "/assets/images/merchmockup.jpg",
      size: "tall",
      materials: "Heavyweight T-shirt, Direct to Garment Print"

  }
],
  

  logos: [

    {
      id: 1,
      name: "KEN BENZ Logo Type",
      description: " ",
      imageUrl: "/assets/images/kenni.jpg",
      imagesUrl: ["/assets/images/lister.JPG", "/assets/images/underground.jpg" , "/assets/images/bc.jpg"],
      size: "medium",
      materials: " ",
      carousel: "no"

    },

    {
      id: 2,
      name: "KEN BENZ Logo Mockup",
      description: " ",
      imageUrl: "/assets/images/kbb.jpeg",
      imagesUrl: ["/assets/images/lister.JPG", "/assets/images/underground.jpg" , "/assets/images/bc.jpg"],
      size: "medium",
      materials: " ",
      carousel: "no"

    },

    {
      id: 3,
      name: "Studio Unpleasant",
      description: " ",
      imageUrl: "/assets/images/un.jpg",
      size: "medium",
      materials: " "

    },

    {
      id: 4,
      name: "Traction",
      description: " ",
      imageUrl: "/assets/images/tracc.jpg",
      size: "medium",
      materials: " "

    },

    {
      id: 5,
      name: "MAKUHWAY",
      description: " ",
      imageUrl: "/assets/images/mawling.jpg",
      size: "medium",
      materials: " "

    },

    {
      id: 6,
      name: "POSE",
      description: " ",
      imageUrl: "/assets/images/pose.jpg",
      size: "medium",
      materials: " "

    },

    {
      id: 7,
      name: "PECK.LIVE",
      description: " ",
      imageUrl: "/assets/images/pkk.jpg",
      size: "medium",
      materials: " "

    },

    {
      id: 8,
      name: "BULLS i URBAN",
      description: " ",
      imageUrl: "/assets/images/biu.jpg",
      size: "medium",
      materials: " "

    },

    

  ],

  coverart: [


      {
        id: 1,
        name: "Thanks For LIStening",
        description: "Unreleased",
        imageUrl: "/assets/images/lister.jpg",
        size: "medium",
        materials: " "
  
      },
  
      {
        id: 2,
        name: "Tomes from The Underground",
        description: "Mockup",
        imageUrl: "/assets/images/underground.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },
  
  
      {
        id: 3,
        name: "LOOP.",
        description: "Project: Rukus 2022",
        imageUrl: "/assets/images/loop.JPG",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },
      {
        id: 4,
        name: "TWELFTH HOUR.",
        description: "Project: Rukus 2022",
        imageUrl: "/assets/images/12.JPG",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 5,
        name: "Florida",
        description: "OnyxDaBerry 2018",
        imageUrl: "/assets/images/florida.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 7,
        name: "HELLO",
        description: "Mockup",
        imageUrl: "/assets/images/hello.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 8,
        name: "Gateway",
        description: "Styx River 2020",
        imageUrl: "/assets/images/styx.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 9,
        name: "Thotta",
        description: "Mawlilz 2021",
        imageUrl: "/assets/images/thotta.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 10,
        name: "Listen For Me",
        description: "Project: Rukus 2021",
        imageUrl: "/assets/images/listen for me.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 11,
        name: "Slumsgiving",
        description: "Project: Rukus 2021",
        imageUrl: "/assets/images/SG.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 12,
        name: "Polite",
        description: "Mockup",
        imageUrl: "/assets/images/polite.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 13,
        name: "Amethyst Skies",
        description: "Aster The Gemini",
        imageUrl: "/assets/images/amethyst skies.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      

  ],

  shortform: [

    {
      id: 1,
      name: "Create",
      description: " ",
      imageUrl: "/assets/images/create.jpg",
      size: "tall ",
      materials: " ",
      video: "yes",
      embedURL: "https://www.youtube.com/watch?v=lwFH05unSZg"

    },



  ],

  musicvideo: [

    {
      id: 1,
      name: "Create",
      description: " ",
      imageUrl: "/assets/images/create.jpg",
      size: "tall ",
      materials: " ",
      video: "yes",
      embedURL: "https://www.youtube.com/watch?v=LlsO9MCLc_k"

    },



  ],

  shortfilm: [

    {
      id: 1,
      name: " ",
      description: " ",
      imageUrl: "/assets/images/ ",
      size: " ",
      materials: " "

    },

  ],

 
}  

const productData = {
  prints: [

    {
      id: 1,
      name: "SUNDOWN",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/sundown-thumb.webp",
          medium: "/assets/images/sundown-medium.webp",
          large: "/assets/images/sundown.jpg",

      } ],
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'sundown-thumb.jpg',



    },

    {
      id: 2,
      name: "DON'T BEAT YOURSELF UP",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/dbyu-thumb.webp",
          medium: "/assets/images/dbyu-medium.webp",
          large: "/assets/images/dbyu.JPG",

      } ],

      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'dbyu-thumb.jpg',


    },

    {
      id: 3,
      name: "FLY CATCHER",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/flycatcher-thumb.webp",
          medium: "/assets/images/flycatcher-medium.webp",
          large: "/assets/images/flycatcher.JPG",

      } ],
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'flycatcher-thumb.jpg',


    },

    {
      id: 4,
      name: "SHOW YOUR FACE",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/SYF-thumb.webp",
          medium: "/assets/images/SYF-medium.webp",
          large: "/assets/images/SYF.jpg",

      } ],
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'SYF-thumb.jpg',



    },

    {
      id: 5,
      name: "MAKE LESS MONEY",
      description: "Do as I say, not as I do.",
      imageUrl:  [{
        thumbnail: "/assets/images/money-thumb.webp",
        medium: "/assets/images/money-medium.webp",
        large: "/assets/images/money.JPG",

    } ],
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'money-thumb.jpg'


    },

    

    {
      id: 6,
      name: "Mr. Crystal",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/crystal-thumb.webp",
          medium: "/assets/images/crystal-medium.webp",
          large: "/assets/images/crystal.JPG",

      } ],
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'crystal-thumb.jpg'



    },

    {
      id: 7,
      name: "All Akimbo",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/akimbo-thumb.webp",
          medium: "/assets/images/akimbo-medium.webp",
          large: "/assets/images/akimbo.JPG",

      } ],
      
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print", 
      productType: "print",
      imageFilename: 'akimbo-thumb.jpg'



    },

    {
      id: 8,
      name: "THE ARBITER",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/arbiter-thumb.webp",
          medium: "/assets/images/arbiter-medium.webp",
          large: "/assets/images/arbiter.JPG",

      } ],
      
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'arbiter-thumb.jpg'



    },

    {
      id: 9,
      name: "Shutdown",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/SD-thumb.webp",
          medium: "/assets/images/SD-medium.webp",
          large: "/assets/images/SD.jpg",

      } ],
      
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'SD-thumb.jpg'



    },

    {
      id: 10,
      name: "Rogue Poison",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/rogue-thumb.webp",
          medium: "/assets/images/rogue-medium.webp",
          large: "/assets/images/rogue.JPG",

      } ],
      
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'rogue-thumb.jpg'



    },

    {
      id: 11,
      name: "thisisntarobberyitsjustperspective",
      description: " ",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/robbery-thumb.webp",
          medium: "/assets/images/robbery-medium.webp",
          large: "/assets/images/robbery.JPG",

      } ],
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'robbery-thumb.jpg'


    },

    {
      id: 12,
      name: "DAMNED",
      description: " ",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/damned-thumb.webp",
          medium: "/assets/images/damned-medium.webp",
          large: "/assets/images/damned.JPG",

      } ],
      
      size: [
        { name: "8.5 x 11 inches", price: 30 },
        { name: "12 x 16 inches", price: 35 },
        { name: "18 x 24 inches", price: 40 }

      ],
      
      initPrice: 30,
      materials: "Giclee Print",
      productType: "print",
      imageFilename: 'damned-thumb.jpg'


    },

  ],

  originals: [

    {
      id: 1,
      name: "FLY CATCHER",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/flycatcher-thumb.webp",
          medium: "/assets/images/flycatcher-medium.webp",
          large: "/assets/images/flycatcher.JPG",

      } ],

      size: [
        { name: "24 x 36 inches", price: 1200 },


      ],
      
      initPrice: 1200,
      materials: "Acrylic on Canvas",
      productType: "original",
      imageFilename: 'flycatcher-thumb.jpg'




    },

    {
      id: 2,
      name: "Mr. Crystal",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/crystal-thumb.webp",
          medium: "/assets/images/crystal-medium.webp",
          large: "/assets/images/crystal.JPG",

      } ],
      
      size: [
        { name: "17 x 15 inches", price: 800 },

      ],
      
      initPrice: 800,
      materials: "Acrylic on Canvas",
      productType: "original",
      imageFilename: 'crystal-thumb.jpg'



    },

    {
      id: 3,
      name: "Sundown",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/sundown-thumb.webp",
          medium: "/assets/images/sundown-medium.webp",
          large: "/assets/images/sundown.jpg",

      } ],
      
      size: [
        { name: "48 x 48 inches", price: 4300 },

      ],
      
      initPrice: 4300,
      materials: "Acrylic on Canvas",
      productType: "original",
      imageFilename: 'sundown-thumb.jpg'



    },

    {
      id: 4,
      name: "Make Less Money",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/money-thumb.webp",
          medium: "/assets/images/money-medium.webp",
          large: "/assets/images/money.JPG",

      } ],

      size: [
        { name: "5 x 3 ft", price: 5600 },

      ],
      
      initPrice: 5600,
      materials: "Acrylic on Canvas",
      productType: "original",
      imageFilename: 'money-thumb.jpg'



    },

    {
      id: 5,
      name: "Try Again",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/tryagain-thumb.webp",
          medium: "/assets/images/tryagain-medium.webp",
          large: "/assets/images/tryagain.JPG",

      } ],

      size: [
        { name: "36 x 36 inches", price: 4600 },

      ],
      
      initPrice: 4600,
      materials: "Acrylic on Canvas",
      productType: "original",
      imageFilename: 'tryagain-thumb.jpg'



    },

    {
      id: 6,
      name: "SHOW YOUR FACE",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/SYF-thumb.webp",
          medium: "/assets/images/SYF-medium.webp",
          large: "/assets/images/SYF.jpg",

      } ],

      size: [
        { name: "17 x 15 inches", price: 1400 },

      ],
      
      initPrice: 1400,
      materials: "Acrylic on Canvas",
      productType: "original",
      imageFilename: 'SYF-thumb.jpg'



    },

    {
      id: 7,
      name: "Don't Beat Yourself Up",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/dbyu-thumb.webp",
          medium: "/assets/images/dbyu-medium.webp",
          large: "/assets/images/dbyu.JPG",

      } ],

      size: [
        { name: "10 x 8 inches", price: 400 },

      ],
      
      initPrice: 400,
      materials: "Acrylic on Canvas",
      productType: "original",
      imageFilename: 'dbyu-thumb.jpg'



    },

    {
      id: 8,
      name: "Catch and Release",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/catch-thumb.webp",
          medium: "/assets/images/catch-medium.webp",
          large: "/assets/images/catch.JPG",

      } ],
      
      size: [
        { name: "36 x 36 inches", price: 3400 },

      ],
      
      initPrice: 3400,
      materials: "Acrylic on Canvas",
      productType: "original",
      imageFilename: 'catch-thumb.jpg'



    },

    {
      id: 9,
      name: "Adequate Natural",
      description: "Do as I say, not as I do.",
      imageUrl: [ 
        {
          thumbnail: "/assets/images/adequate-thumb.webp",
          medium: "/assets/images/adequate-medium.webp",
          large: "/assets/images/adequate.jpg",

      } ],
      
      size: [
        { name: "36 x 36 inches", price: 4600 },

      ],
      
      initPrice: 4600,
      materials: "Acrylic on Canvas",
      productType: "original",
      imageFilename: 'adequate-thumb.jpg'



    },

    

    

  ]
}
  

 
  
  return (
    <CartProvider>
    <Router>

      <div id= "root">
        <div className = "content">
        
        <Header />
            <Routes>

              <Route path= "/" element = {<Landing />} />

              <Route path="/graphicDesign" element={<GraphicDesign category= "graphicDesign" images = {imageData}/>} />
              <Route path="/paintings" element={<TraditionalArt category="paintings" images = {imageData} />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/info/:category/:id" element={<Info images = {imageData} />} />
              <Route path="/product/:category/:id" element={<ProductPage product = {productData} />} />

              <Route path="/drawings" element={<Drawings category="drawings" images = {imageData} />} />

              <Route path="/graphicDesign/logos" element={<Logos category="logos" images = {imageData} />} />
              <Route path="/graphicDesign/cover-art" element={<CoverArt category="coverart" images = {imageData} />} />
              <Route path="/graphicDesign/flyers" element={<Flyers category="flyers" images = {imageData} />} />
              <Route path="/construction" element={<Construction />} />
              <Route path="/Merch" element={<Merch category="merch" images = {imageData} />} />


              {/* <Route path="/video/shortform" element={<VideoShortForm category="shortform" images = {imageData} />} />
              <Route path="/video/musicvideos" element={<MusicVideo category="musicvideo" images = {imageData} />} />
              <Route path="/video/shortfilms" element={<VideoShortFilm category="shortfilm" images = {imageData} />} /> */}

              

              <Route path="/video/shortform" element={<Navigate to = "/construction"/>} />
              <Route path="/video/musicvideos" element={<Navigate to = "/construction"/>} />
              <Route path="/video/shortfilms" element={<Navigate to = "/construction"/>} />

              <Route path="/video/reels" element={<VideoReels/>} />

              <Route path="/shop-prints" element={<ShopPrints category = "prints" products = {productData}/>} />
              <Route path="/shop-originals" element={<ShopOriginals category = "originals" products = {productData}/>} />

              <Route path="/checkout" element={<CartPage />} />
              <Route path="/success" element={<CheckoutSuccess />} />







            </Routes>
  

        <Footer />

        </div>

      </div>
      

    </Router>

    </CartProvider>
  );
}

export default App;
