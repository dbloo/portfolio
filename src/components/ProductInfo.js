import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

import { useCart } from "../context/CartContext";


import {loadStripe} from "@stripe/stripe-js"

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Spinner from "../components/Spinner";




import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';

import "./Info.css";

 const  ProductInfo = ({images}) => {

   const { cart, addToCart, removeFromCart, isItemInCart, isLoading } = useCart();


   const stripePromise = loadStripe("pk_test_51RGS5lP4Be5qLo2uBrH3SBFNecxbnbqRpvuhan9TuMuqOgEQqwOqBMMuG5s2gABiXIdldSNvg6UyJlz2JQQVmRtp009VrAfe14");

   const [quantity, setQuantity] = useState(1);
   const [price, setPrice] = useState(1);

   const { category, id } = useParams(); 

   const [added, setAdded] = useState(false);

   const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

   



   const categoryImages = images[category]; 

   
   const product = categoryImages.find((pro) => pro.id === parseInt(id)); 
   const image = categoryImages.find((img) => img.id === parseInt(id)); 



   const [selectedSize, setSelectedSize] = useState(
      (category === "prints" || category === "originals") && image.size?.length > 0
        ? image.size[0].name
        : ""
    );


   const currentSize = product.size?.find(size => size.name === selectedSize);
   const currentPrice = currentSize ? (currentSize.price * quantity) : (product.initPrice).toFixed(2) * quantity;

   const handleSizeChange = (e) => {
      setSelectedSize(e.target.value);
      console.log("Selected size:", e.target.value); // Should log the size name
    };



   useEffect(() => {
      
         window.scroll(0, 0); 
      
   }, []);

   useEffect(() => {
      setPrice(product.price);
      
   }, []);

   const handleAddToCart = () => {
       const item = {

         id: product.id,
         name: product.name,
         imageUrl: product.imageUrl,  // Make sure this is correct
         price: currentSize.price,
         selectedSize: currentSize.name,
         quantity,
         materials: product.materials,
         productType: product.productType
      
      }

     
       
       addToCart(item);
       
       const existingItem = cart.find(cartItem => 
         cartItem.id === item.id && 
         cartItem.selectedSize === item.selectedSize
       );
       
       setConfirmationMessage(`Item Sucessfully Added to cart!` );
       
       setShowConfirmation(true);
       setTimeout(() => setShowConfirmation(false), 50000);
     };

  

   if (!images[category]) {
      return <div>Category not found!</div>;
    }
   

   
   
   
   


   const handleCheckout = async (productId) => {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const session = await response.json();
      await stripe.redirectToCheckout({ sessionId: session.id });
    };
 
   if (!images[category]) {
     return <div>Image not found!</div>;
   }




   if (!image){
      return <>Image not found</>;
   }

   

if (category == "prints" ){

   return (
      
     
      <>

          <div className= "info-container">

              <div className = "image-container">


                        <img src = {product.imageUrl}></img>

              <div className = "info-text-container">

                 <h1 className = "text-header">{product.name}</h1>
                 <p className = "description-product">Printed on Premium Giclee fine art paper </p>


                 <div className = "selector-wrapper">

                     <div className = "size-quantity">
                        <div className = "sizeSelector">
                                 

                                       <select 
                                          name = "sizes" 
                                          id = "sizes" 
                                          required value = {selectedSize} 
                                          onChange = {handleSizeChange}
                                        > 
                                             <option value="" disabled selected >Select a Size</option>
                                             {product.size.map((size) => (
                                                   <option key={size.name} value={size.name}>
                                                      {size.name} -- ${(size.price).toFixed(2)}
                                                   </option>
                                                   ))}
                                       </select>
                                    </div>

                        <div className = "quantitySelector">
                                 <button  onClick={()=> {if(quantity > 1){setQuantity(quantity-1)}}}>-</button>
                                 <p value = {quantity}><strong value = {quantity}>{quantity}</strong></p>
                                 <button onClick={()=>setQuantity(quantity+1)}>+</button>
                        </div>

                              </div>

                           <div className = "price-add">


                              <p className = "price"><strong>${(currentPrice)}</strong></p>
                              <button className = "addToCart" disabled = {!selectedSize || isLoading}onClick={() => handleAddToCart()}>
                                          
                               
                               {isLoading ? (<div className="button-message">Adding to Cart...<div className = "spinner-add"><Spinner></Spinner></div></div>) : (<>Add To Cart</>)}
                              </button>

                              {!isLoading && (

                                       <div className="confirmation-message">
                                          <p>{confirmationMessage}</p>
                                       </div>

                              )}

                              

                            </div>

                            </div>

                           

                  </div>
                 

                  

                  

           </div>

          </div> 
      </>

   );


}else if (category == "originals" ){

   return (
      
     
      <>

          <div className= "info-container">

              <div className = "image-container">


                        <img src = {product.imageUrl}></img>

              <div className = "info-text-container">

                 <h1 className = "text-header">{product.name}</h1>
                 <p className = "description-product">{currentSize.name} | Acrylic on Canvas </p>



                     

                           <div className = "price-add">


                              <p className = "price"><strong>${(product.initPrice)}</strong></p>
                              <button className = "addToCart"  disabled={isItemInCart(product.id, product.productType) || isLoading} onClick={() => 
                              handleAddToCart()
                                  
                                  }>

                                    {isItemInCart(product.id, product.productType) 
                                    ? "Already in Cart" 
                                    : isLoading ? (<div className="button-message">Adding to Cart...<div className = "spinner-add"><Spinner></Spinner></div></div>): (<>Add to Cart</>)}
                              </button>

                              {!isLoading && (

                                 <div className="confirmation-message">
                                    <p>{confirmationMessage}</p>
                                 </div>
                                 
                              )}

                            </div>


                           

                  </div>
                 

                  

                  

           </div>

          </div> 
      </>

   );
   
}




    
}

export default ProductInfo