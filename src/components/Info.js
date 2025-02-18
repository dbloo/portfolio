import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Info.css";

 const  Info = ({images}) => {

   

   const { category, id } = useParams(); // Get category and ID from the URL

   if (!images[category]) {
      return <div>Category not found!</div>;
    }
   
   const categoryImages = images[category]; // Get images for the specified category
   
   const image = categoryImages.find((img) => img.id === parseInt(id)); // Find the image
 
   if (!images[category]) {
     return <div>Image not found!</div>;
   }



   if (!image){
      return <>Image not found</>;
   }

   if (image.carousel === "yes"){


    return (
      
     
                <>

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
                </>
        

           
           
        );

      } else {

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