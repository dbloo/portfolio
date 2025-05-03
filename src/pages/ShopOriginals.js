import {loadStripe} from "@stripe/stripe-js"
import React, { PureComponent } from 'react';

import { useParams } from "react-router-dom";


import "./ShopPrints.css"

import { Link } from 'react-router-dom';


const stripePromise = loadStripe("pk_live_51RGS5Y06EYiUL1OZXsoliznvftgYLeCLiKkX8gXlSDujz1KTwiGv0KUQTC6H3DtMBiRFS6EcSF4WRrRRO6t7RcG200q8ancIPt");


// const products = [


//         {           
//             id: 1,
//             name: " hello",
//             price: 0,
//             image: "/assets/images/goldback.JPG" 
//         },

//         {           
//             id: 2,
//             name: " hello",
//             price: 0,
//             image: "/assets/images/flycatcher.JPG" 
//         },


//         {           
//             id: 3,
//             name: " hello",
//             price: 0,
//             image: "/assets/images/look up.JPG" 
//         },

//         {           
//             id: 4,
//             name: " hello",
//             price: 0,
//             image: "/assets/images/look up.JPG" 
//         },



// ]


const ShopPrints = ({category, products}) => {




    const categoryProducts = products[category];

    

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


  return (
    <div className = "pageContainer">
        <div className = "titleContainer">
         <h1>ORIGINALS</h1>
        </div>
      <div className="itemContainer">
      {categoryProducts.map((product) => (
        
        <div className="product-container">
            <div className = "product" key={product.id}>
            <div className = "title-thumbnail-wrapper">

                <Link to = {`/product/${category}/${product.id}`}>
                    <div className="thumbnail-container">
                    
                        <img src={product.imageUrl} alt={product.name} />
                        </div>

                        <h1>{product.name}</h1>

                        </Link>
                        </div>
                        


                        <div className = "buy-container">

                            <p>${(product.initPrice).toFixed(2)}</p>
                            
                        </div>
            </div>
        </div>
      ))}
    </div>
    </div>

    
  );
};

export default ShopPrints