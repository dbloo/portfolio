import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

import Skeleton from "./Skeleton";


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

  const [available, setAvailable] = useState(true);

   
  const [loaded, setLoaded] = useState(false);



   const categoryImages = images[category]; 

   
   const product = categoryImages.find((pro) => pro.id === parseInt(id)); 
   const image = categoryImages.find((img) => img.id === parseInt(id)); 



   const [selectedSize, setSelectedSize] = useState(
      ""
    );


   const currentSize = product.size?.find(size => size.name === selectedSize);
   const paintingSize = image.size[0]?.name

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

   const [availabilityMap, setAvailabilityMap] = useState({});

   useEffect(() => {
         const fetchAllAvailability = async () => {
           const availability = {};
           await Promise.all(categoryImages.map(async (product) => {
             try {
               const docRef = doc(db, "paintings", String(product.id));
               const docSnap = await getDoc(docRef);
               availability[product.id] = docSnap.exists() ? docSnap.data().available : true;
             } catch (error) {
               console.error("Error checking availability for", product.id, error);
               availability[product.id] = true;
             }
           }));
           setAvailabilityMap(availability);
         };
     
         fetchAllAvailability();
       }, [categoryImages]);

   const handleAddToCart = () => {
       const item = {

         id: product.id,
         name: product.name,
         imageUrl: product.imageUrl,  
         price: currentSize.price,
         selectedSize: currentSize.name,
         quantity,
         materials: product.materials,
         productType: product.productType,
         imageFilename: product.imageFilename
      
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
      
     
      <div className="productContainer">

      <div className = "backbutton">                                 
           <Link to = "/shop-prints"> <button className = "backB"><span> </span><span> </span><p>Prints</p></button></Link>
         </div>

          <div className= "info-container-shop">

              <div className = "image-container" style = {{position: "relative"}}>


                  <div 
                  className="skeleton-wrapper"
                  style = {{
                     transition: 'opacity 0.3s ease',

                     opacity: loaded ? 0 : 1,
                     position: 'absolute',
                     }}>
                     <Skeleton width="100%" height="100%"   borderRadius={10}/>
                  </div>
                  
                  


                       

                        

                        <img src = {product.imageUrl[0].large} onLoad={() => setLoaded(true)} loading = "lazy" style = {{opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease',}}></img>

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
                                          style = {{textAlign: "center", textAlignLast: "center"}}
                                        > 
                                             <option value="" disabled selected ><p>Select a Size</p></option>
                                             {product.size.map((size) => (
                                                   <option key={size.name} value={size.name}>
                                                      <p>{size.name} -- ${(size.price).toFixed(2)}</p>
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
      </div>

   );


}else if (category == "originals" ){

   return (
      
     
      <div className="productContainer">

         <div className = "backbutton">                                 
           <Link to = "/shop-originals"> <button className = "backB"><span> </span><span> </span><p>Originals</p></button></Link>
         </div>
          <div className= "info-container-shop">

              <div className = "image-container">

              <div className="skeleton-wrapper"
              
              style = {{
                     transition: 'opacity 0.3s ease',

                     opacity: loaded ? 0 : 1,
                     position: 'absolute',
                     }}
                     
                     >
                     <Skeleton width="100%" height="100%"   borderRadius={10}/>
                  </div>


                        <img src = {product.imageUrl[0].large } onLoad = {() => setLoaded(true)}loading = "lazy" style = {{opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease',}}></img>

              <div className = "info-text-container">

                 <h1 className = "text-header">{product.name}</h1>
                 <p className = "description-product">{paintingSize} | Acrylic on Canvas </p>



                     

                           <div className = "price-add">


                              <p className = "price"><strong>${(product.initPrice)}</strong></p>
                              <button className = "addToCart"  disabled={isItemInCart(product.id, product.productType) || isLoading || availabilityMap[product.id] === false } onClick={() => 
                              handleAddToCart()
                                  
                                  }>

                                    {isItemInCart(product.id, product.productType) 
                                    ? "Already in Cart" : availabilityMap[product.id] === false ? "Sold Out"
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
      </div>

   );
   
}




    
}

export default ProductInfo