import {loadStripe} from "@stripe/stripe-js"
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import { useParams } from "react-router-dom";



import Skeleton from "../components/Skeleton";



import "./ShopPrints.css"

import { Link } from 'react-router-dom';


const stripePromise = loadStripe("pk_live_51RGS5Y06EYiUL1OZXsoliznvftgYLeCLiKkX8gXlSDujz1KTwiGv0KUQTC6H3DtMBiRFS6EcSF4WRrRRO6t7RcG200q8ancIPt");




const ShopPrints = ({category, products}) => {

  const [loaded, setLoaded] = useState(false);


  const [available, setAvailable] = useState(true);





    const categoryProducts = products[category];
    

    const [availabilityMap, setAvailabilityMap] = useState({});

    useEffect(() => {
      const fetchAllAvailability = async () => {
        const availability = {};
        await Promise.all(categoryProducts.map(async (product) => {
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

                      <div style = {{
                                           transition: 'opacity 0.3s ease',
                      
                                           opacity: loaded ? 0 : 1,
                                           position: 'absolute',
                                           width:"80vw", height: "60vh"
                                           }}>
                                           <Skeleton width="100%" height="100%"   borderRadius={0}/>
                                        </div>
                    
                        <img src={product.imageUrl[0].medium} onLoad={() => setLoaded(true)} loading = "lazy" style = {{opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease',}} alt={product.name} />
                        </div>

                        <h1>{product.name}</h1>

                        </Link>
                        </div>
                        


                        <div className = "buy-container">

                        {availabilityMap[product.id] === false ? (
                        <p>Sold Out</p>

                          ) : (

                        <p>${(product.initPrice).toFixed(2)}</p>
                        
                           )}
                            
                        </div>
            </div>
        </div>
      ))}
    </div>
    </div>

    
  );
};

export default ShopPrints