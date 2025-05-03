import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { httpsCallable } from 'firebase/functions';


import Spinner from "../components/Spinner";

import "./CartPage.css"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function CartPage() {
  const { cart, removeFromCart, subtotal, addToCart, isLoading } = useCart();
  useEffect(() => {
    console.log('Cart contents:', cart);
  }, [cart]);

  const handleCheckout = async () => {

    
    const stripe = await stripePromise;
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart }),
    });

    const session = await response.json();

  
  
  // Redirect to Stripe
  window.location.href = data.sessionId;
  };
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

            

            <img src = {item.imageUrl}></img>
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