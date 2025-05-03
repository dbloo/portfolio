import { createContext, useState, useContext, useEffect  } from "react";
import Spinner from "../components/Spinner";
import { httpsCallable } from 'firebase/functions';


const CartContext = createContext();



export function CartProvider({ children }) {

  const [added, setAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (item) => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 800));



    setCart((prevCart) => {


      
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize && item.productType == cartItem.productType
      );
  
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id && cartItem.selectedSize === item.selectedSize && cartItem.productType == item.productType
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }

    });

    setIsLoading(false);



  };




  const isItemInCart = (productId, productType) => {
    console.log(productId, productType)

    return cart.find(item => 
      item.id === productId && 
      item.productType === productType &&
      (productType !== "print" )
      
    );
    
  };

  const removeFromCart = async (productId, size, productType, forceRemove = false) => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 800));
    setCart(prevCart => {
      // Filter out the item completely if forceRemove is true
      if (forceRemove) {
        return prevCart.filter(item => 
          !(item.id === productId && 
            item.selectedSize === size && 
            item.productType === productType)
        );
      }
      
      // Otherwise decrease quantity
      return prevCart.map(item => {
        if (item.id === productId && 
            item.selectedSize === size && 
            item.productType === productType) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1
          };
        }
        return item;
      });
    });
    setIsLoading(false);

  };
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, subtotal, isItemInCart, isLoading}}>
      {isLoading && <Spinner />}
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}