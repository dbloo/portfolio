import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";




import "react-responsive-carousel/lib/styles/carousel.min.css";



import {YouTubeEmbed } from 'react-social-media-embed';

import "./Info.css";

 const  Info = ({images}) => {




   const [quantity, setQuantity] = useState(1);

   const { category, id } = useParams(); 



   



   const categoryImages = images[category]; 

   
   const image = categoryImages.find((img) => img.id === parseInt(id)); 



  
 


   useEffect(() => {
      
         window.scroll(0, 0); 
      
   }, []);

  
       

  

   if (!images[category]) {
      return <div>Category not found!</div>;
    }




   if (!image){
      return <>Image not found</>;
   }

   if (image.carousel === "yes"){


    return (
      
     
                <div >

                    <div className= "info-container">
 
                        <div className = "image-container">

                           <Carousel  centerMode infiniteLoop dynamicHeight showThumbs={false}>

                           {categoryImages.map((img) => (
                              <>

                                  <img src = {img.imageUrl}></img>
                                  </>
                                 ))}


                           </Carousel>
                        <div className = "info-text-container">
                           <h1 className = "text-header">{image.name}</h1>
                              
                           <h3 className = "materials">{image.materials}</h3> 
                           <p className = "description">{image.description}</p> 
                        </div>

                     </div>

                    </div> 
                </div>
        

           
           
        );

      } else if (image.video ==="yes") {

        return (
      
     
         <>

             <div className= "info-container">

                 <div className = "image-container">


                           <div className= "embedContainer">
                          <YouTubeEmbed url = {image.embedURL}  width={400} height={500}/>
                           
                           </div>

                 <div className = "info-text-container">
                    <h1 className = "text-header">{image.name}</h1>
                       
                    <h3 className = "materials">{image.materials}</h3> 
                    <p className = "description">{image.description}</p> 
                 </div>

              </div>

             </div> 
         </>
 

    
    
 );

}else {

   return (
      
     
      <>

          <div className= "info-container">

              <div className = "image-container">


                        <img src = {image.imageUrl}></img>
                        

              <div className = "info-text-container">
                 <h1 className = "text-header">{image.name}</h1>
                    
                 <h3 className = "materials">{image.materials}</h3> 
                 <p className = "description">{image.description}</p> 
              </div>

           </div>

          </div> 
      </>

   );

}




    
}

export default Info