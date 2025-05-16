import React from "react";
import Lottie from "lottie-web";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import './CheckoutSuccess.css'
import Realistic from 'react-canvas-confetti/dist/presets/realistic'
import { useCart } from '../context/CartContext';
<<<<<<< HEAD
import Skeleton from "../components/Skeleton";
=======
>>>>>>> d19cd55083afb602171c57417363b4732424b89f



function Landing(){

    const [searchParams] = useSearchParams();
  const [session, setSession] = useState(null);
  const [images, setImages] = useState([]);

<<<<<<< HEAD

  const [loaded, setLoaded] = useState(false);

=======
>>>>>>> d19cd55083afb602171c57417363b4732424b89f
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch(
            
          `${process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_BASE_URL_DEV : process.env.REACT_APP_API_BASE_URL}/session/${sessionId}`
        );

        const session = await response.json();
        const imageUrls = session.metadata?.imageUrls?.split(",") || [];
        setImages(imageUrls);
      } catch (err) {
        console.error("Error fetching Stripe session:", err);
      }
    };

    console.log(images)
    console.log(session)

    if (sessionId) {
      fetchSession();
    }
  }, [sessionId]);

    const {clearCart } = useCart();


   
useEffect(() => {
    clearCart();
    console.log(images.length)

}, []);

    


return (
<>
<Realistic autorun={{speed: 0.2, width: 500}}/>
    <div className = "page-container">
         <div className = "success-container">
            <div className="card-container">
          
                <div className = {images.length === 1 ? "image-container-success" : "image-container-multi"}>
                    {images.slice(0, 3 ).map((url, idx) => (
<<<<<<< HEAD
                      <>
                      <div style = {{
                        transition: 'opacity 0.3s ease',
   
                        opacity: loaded ? 1 : 1,
                        position: 'absolute',
                        width:"28.4vw", height: "20vh"
                        }}>

                            <Skeleton width="100%" height="100%"   borderRadius={10}/>
                          
                        </div>
                      
                          <img
                          key={idx}
                          src={url}
                          alt={`Purchased artwork ${idx + 1}`}
                          onLoad={() => setLoaded(true)} 
                          loading = "lazy" 
                          style = {{
                            opacity: loaded ? 1 : 0, 
                            transition: 'opacity 0.3s ease',
                          }}
                          >
                          </img>
                        </>
=======
                        <img
                        key={idx}
                        src={url}
                        alt={`Purchased artwork ${idx + 1}`}
                        >
                        </img>
>>>>>>> d19cd55083afb602171c57417363b4732424b89f
                    ))}
            </div>
          </div>

            <h1>🔥THANK YOU!🔥</h1>
            <h2>Your order is being processed.</h2>
            <p>You will receive a confirmation email shortly with reciept and shipping information.</p>

        </div>
    </div>
    </>
);
}

export default Landing