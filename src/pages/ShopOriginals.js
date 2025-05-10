import {loadStripe} from "@stripe/stripe-js"
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
=======
import React, { PureComponent } from 'react';
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
=======
import React, { PureComponent } from 'react';
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad

import { useParams } from "react-router-dom";


import "./ShopPrints.css"

import { Link } from 'react-router-dom';


const stripePromise = loadStripe("pk_live_51RGS5Y06EYiUL1OZXsoliznvftgYLeCLiKkX8gXlSDujz1KTwiGv0KUQTC6H3DtMBiRFS6EcSF4WRrRRO6t7RcG200q8ancIPt");


<<<<<<< HEAD
<<<<<<< HEAD



const ShopPrints = ({category, products}) => {

  const [available, setAvailable] = useState(true);


=======
=======
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
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

<<<<<<< HEAD
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
=======
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad



    const categoryProducts = products[category];
<<<<<<< HEAD
<<<<<<< HEAD
    

    const [availabilityMap, setAvailabilityMap] = useState({});

    useEffect(() => {
      const fetchAllAvailability = async () => {
        const availability = {};
        await Promise.all(categoryProducts.map(async (product) => {
          console.log(product.id)
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
    }, [categoryProducts]);

    

=======
=======
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad

    

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

<<<<<<< HEAD
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
=======
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad

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
                    
<<<<<<< HEAD
<<<<<<< HEAD
                        <img src={product.imageUrl[0].medium} alt={product.name} />
=======
                        <img src={product.imageUrl} alt={product.name} />
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
=======
                        <img src={product.imageUrl} alt={product.name} />
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
                        </div>

                        <h1>{product.name}</h1>

                        </Link>
                        </div>
                        


                        <div className = "buy-container">

<<<<<<< HEAD
<<<<<<< HEAD
                        {availabilityMap[product.id] === false ? (
                        <p>Sold Out</p>

                          ) : (

                        <p>${(product.initPrice).toFixed(2)}</p>
                        
                           )}
=======
                            <p>${(product.initPrice).toFixed(2)}</p>
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
=======
                            <p>${(product.initPrice).toFixed(2)}</p>
>>>>>>> cba2d32e104c7ffb911089781ddd61e1c6ae0bad
                            
                        </div>
            </div>
        </div>
      ))}
    </div>
    </div>

    
  );
};

export default ShopPrints