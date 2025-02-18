import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import GraphicDesign from "./pages/GraphicDesign";
import TraditionalArt from "./pages/TraditionalArt";
import Drawings from "./pages/Drawings";
import Logos from "./pages/Logos";

import Header from "./components/Header"; 
import AboutMe from "./pages/AboutMe.js";
import Footer from "./components/Footer.js";
import Info from "./components/Info.js";

import './index.css';
import { imageData } from "./components/ImageData.js";
import CoverArt from "./pages/CoverArt.js";
import Flyers from "./pages/Flyers.js";



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


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
      name: "Make more Money",
      description: "Success isn't always about hard work. Sometimes it's about getting really really uncomfortable. ",
      imageUrl: "/assets/images/money.jpg",
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
      imageUrl: "/assets/images/FORWARD.jpg",
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
      materials: "40in x 40in Acrylic on Canvas "

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
      name: "HUNDRED MARK",
      description: "💯",
      imageUrl: "/assets/images/hundred.jpg",
      size: "tall",
      materials: "22in x 18in Acrylic and Oil Pastel Canvas "

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
      id: 6,
      name: "All Akimbo",
      description: " ",
      imageUrl: "/assets/images/akimbo.jpg",
      size: "tall",
      materials: "8.5in x 11in Digital "

    },

    {
      id: 7,
      name: "i trusted u",
      description: " ",
      imageUrl: "/assets/images/trusted.jpg",
      size: "tall",
      materials: "8.5in x 11in Digital "

    },

    {
      id: 8,
      name: "thisisntarobberyitsjustperspective",
      description: " ",
      imageUrl: "/assets/images/robbery.JPG",
      size: "tall",
      materials: "8.5in x 11in Digital "

    },

  ],

  graphicDesign: [

    {
      id: 1,
      name: "Thanks For LIStening",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/assets/images/lister.jpg",
      size: "medium",
      materials: " "

    },

    {
      id: 2,
      name: "Tomes from The Underground",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/assets/images/underground.jpg",
      size: "medium",
      materials: "3000 x 3000px Cover Art"

    },

    {
      id: 4,
      name: "Thanks For LIStening",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/assets/images/messhoodie.jpg",
      size: "medium",
      materials: "3000 x 3000px Cover Art"

    },

    {
      id: 5,
      name: "LOOP.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/assets/images/loop.jpg",
      size: "medium",
      materials: "3000 x 3000px Cover Art"

    },
    {
      id: 6,
      name: "TWELFTH HOUR.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/assets/images/12.jpg",
      size: "medium",
      materials: "3000 x 3000px Cover Art"

    },

   
   

  ],

  flyers: [

   

   

    {
      id: 1,
      name: "BREAKCORE",
      description: "A rave hosted by SATURNSARii with Perrero Del Futuro in Wynwood, Miami FL on March, 11 2023 ",
      imageUrl: "/assets/images/bc.jpg",
      size: "medium",
      materials: "1350 x 1080px Flyer"

    },


   
   

  ],


  logos: [

    {
      id: 1,
      name: "MAKUHWAY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/assets/images/maw.jpg",
      imagesUrl: ["/assets/images/lister.JPG", "/assets/images/underground.jpg" , "/assets/images/bc.jpg"],
      size: "medium",
      materials: " ",
      carousel: "yes"

    },

    {
      id: 2,
      name: "Studio Unpleasant",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl: "/assets/images/unpl.jpg",
      size: "medium",
      materials: "3000 x 3000px Cover Art"

    },

    {
      id: 3,
      name: "Traction",
      description: " ",
      imageUrl: "/assets/images/tr.jpg",
      size: "medium",
      materials: "1350 x 1080px Flyer"

    },

    {
      id: 4,
      name: "MAKUHWAY",
      description: " ",
      imageUrl: "/assets/images/maww.jpg",
      size: "medium",
      materials: "3000 x 3000px Cover Art"

    },

  ],

  coverart: [


      {
        id: 1,
        name: "Thanks For LIStening",
        description: " ",
        imageUrl: "/assets/images/lister.jpg",
        size: "medium",
        materials: " "
  
      },
  
      {
        id: 2,
        name: "Tomes from The Underground",
        description: " ",
        imageUrl: "/assets/images/underground.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },
  
  
      {
        id: 3,
        name: "LOOP.",
        description: " ",
        imageUrl: "/assets/images/loop.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },
      {
        id: 4,
        name: "TWELFTH HOUR.",
        description: " ",
        imageUrl: "/assets/images/12.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 5,
        name: "Florida",
        description: " ",
        imageUrl: "/assets/images/florida.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      {
        id: 6,
        name: "HELLO",
        description: " ",
        imageUrl: "/assets/images/hello.jpg",
        size: "medium",
        materials: "3000 x 3000px Cover Art"
  
      },

      

  ]
}
  

    
    

    
    
  

 
  
  return (
    
    <Router>
                <ScrollToTop />

      <div id= "root">
        <div className = "content">
        
        <Header />
            <Routes>

              <Route path="/graphicDesign" element={<GraphicDesign category= "graphicDesign" images = {imageData}/>} />
              <Route path="/paintings" element={<TraditionalArt category="paintings" images = {imageData} />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/info/:category/:id" element={<Info images = {imageData} />} />
              <Route path="/drawings" element={<Drawings category="drawings" images = {imageData} />} />

              <Route path="/graphicDesign/logos" element={<Logos category="logos" images = {imageData} />} />
              <Route path="/graphicDesign/cover-art" element={<CoverArt category="coverart" images = {imageData} />} />
              <Route path="/graphicDesign/flyers" element={<Flyers category="flyers" images = {imageData} />} />



            </Routes>
  

        <Footer />

        </div>

      </div>
      

    </Router>
  );
}

export default App;
