import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { httpsCallable } from 'firebase/functions';


import Spinner from "../components/Spinner";

import "./CartPage.css"






export default function CartPage() {

  const [stripePromise, setStripePromise] = useState(null);

  const { cart, removeFromCart, subtotal, addToCart, isLoading, setIsLoading } = useCart();



  // Add this at the top of your CartPage.js
const FUNCTION_URL = process.env.NODE_ENV === 'development'
? 'http://localhost:5001/dbportf101/us-central1/api/checkout'
: 'https://us-central1-dbportf101.cloudfunctions.net/api/checkout';

const getImageUrl = (filename) => {
  return (`https://dominicbloomfield.com/assets/images/${filename}`);
};

// Then update your handleCheckout function:
const handleCheckout = async () => {
if (!stripePromise) {
  console.error('Stripe not initialized');
  return;
}

try {
  console.log('Sending to:', FUNCTION_URL); // Debug log
  setIsLoading(true);

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
        price: item.price
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
  alert(`Checkout failed: ${error.message}`);
}
};


useEffect(() => {

  const initializeStripe = async () => {
    try {
      const publishableKey = process.env.NODE_ENV !== 'development'
      ? process.env.STRIPE_PUBLISHABLE_KEY :  process.env.STRIPE_PUBLISHABLE_TEST_KEY;
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

            

            <img src = {item.imageUrl[0].thumbnail}></img>
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