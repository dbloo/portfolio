import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { httpsCallable } from 'firebase/functions';


import Spinner from "../components/Spinner";

import "./CartPage.css"

import Skeleton from '../components/Skeleton';






export default function CartPage() {

  const [loaded, setLoaded] = useState(false);
  const [failed , setFailed] = useState(false);
  

  const [stripePromise, setStripePromise] = useState(null);

  const { cart, removeFromCart, subtotal, addToCart, isLoading, setIsLoading } = useCart();



const FUNCTION_URL = process.env.NODE_ENV === 'development'
? process.env.REACT_APP_API_BASE_URL_DEV + "/checkout"
: process.env.REACT_APP_API_BASE_URL + "/checkout";

const getImageUrl = (filename) => {
  return (`https://dominicbloomfield.com/assets/images/${filename}`);
};

const handleCheckout = async () => {
if (!stripePromise) {
  console.error('Stripe not initialized');
  return;
}

try {
  console.log('Sending to:', FUNCTION_URL); 
  setIsLoading(true);
  setFailed(false);


  const response = await fetch(FUNCTION_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        size: item.selectedSize,
        image: getImageUrl(item.imageFilename),
        quantity: item.quantity,
        materials: item.materials,
        price: item.price,
        type: item.productType,
      })),
      userId: "user_123"
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Checkout failed');
  }

  const { id: sessionId } = await response.json();
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    sessionId
  });

  if (error) throw error;
  
} catch (error) {
  console.error('Checkout error:', error);
  setIsLoading(false);
  setFailed(true);
}
};


useEffect(() => {

  const initializeStripe = async () => {
    try {
      const publishableKey = process.env.NODE_ENV !== 'development'
      ? process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY :  process.env.REACT_APP_STRIPE_PUBLISHABLE_TEST_KEY;
      if (!publishableKey) {
        throw new Error('Stripe publishable key not found');
      }
      const promise = await loadStripe(publishableKey);
      setStripePromise(promise);
    } catch (error) {
      console.error('Failed to initialize Stripe:', error);
    }
  };
  initializeStripe();
}, []);

  useEffect(() => {
    console.log('Cart contents:', cart);
  }, [cart]);
  
 
  if (subtotal !== 0 ){
  return (
    <div className='page-wrapper'>
      <h1>Your Cart</h1>
      <div className = "cart-wrapper">
      {cart.map((item) => (
        <div className = "items-wrapper">
          <div className = "checkout-info-wrapper" key={`${item.id}-${item.selectedSize}`}>
            <div className='checkout-text'>
                <h3>{item.name}  </h3>
                <span><p>{(item.selectedSize)}<h3>{(item.materials)}</h3></p></span>
                <h2>${(item.price).toFixed(2)}</h2>

            </div>
            <div className = "image-button-wrapper">

              <div style = {{
                                           transition: 'opacity 0.3s ease',
                      
                                           opacity: loaded ? 0 : 1,
                                           position: 'absolute',
                                           width:"28.4vw", height: "20vh"
                                           }}>
                                           <Skeleton width="100%" height="100%"   borderRadius={10}/>
                                        </div>

            

            <img src = {item.imageUrl[0].thumbnail} onLoad={() => setLoaded(true)} loading = "lazy" style = {{opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease',}}></img>
                <div className='remove-controls'>

                    <div className="quantity-controls">
                      {item.productType === "print"  ? (<>


                        <button onClick={() => removeFromCart(item.id, item.selectedSize, item.productType)}>
                          -
                        </button>

                        <span className='quantity-indicator'>{item.quantity}</span>

                        <button onClick={() => addToCart(item, item.selectedSize)}>
                          +
                        </button>

                        </>):(<></>)}

                  </div>
                    <button className = "price-removeButton" onClick={() => removeFromCart(item.id, item.selectedSize, item.productType, true )}>Remove</button>


              </div>
          </div>
            


          </div>

        </div>
      ))}
      <div className = "subtotal-wrapper"><h2 className = "subtotal"><strong>Subtotal: ${(subtotal).toFixed(2)}</strong></h2></div>
      <button className = "checkout-button" onClick={handleCheckout} disabled={!cart.length || isLoading}>
        Proceed to Checkout

        {isLoading ? (<div className = "spinner-checkout"><Spinner></Spinner></div>):(<></>)}

      </button>
      {failed ? (<div className='confirmation-message'><p>Failed to proceed to checkout. Please try again later.</p></div>):(<></>)}

    </div>
        <div className= "shipping-policy">
            <h1>SHIPPING POLICY:</h1>
            <p><strong>Domestic Orders (U.S.):</strong> 5-10 Business Days</p>
            <p><strong>Interational Orders:</strong> 10-15 Business Days</p>
        </div>
    </div>

  );
}else {

  return (
    <div className='page-wrapper'>
      <h1>Your Cart</h1>
      <div className = "cart-wrapper">
        <h2>Your cart is empty.</h2>
    </div>
    </div>

  );

}
}