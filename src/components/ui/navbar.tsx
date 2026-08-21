
import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import {ShoppingCart} from 'lucide-react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isWorksOpen, setIsWorksOpen] = useState(false);
  return (

    <motion.div 
    initial = {{y:-120}}
    animate = {{y: isOpen ? 0 : -120}}
    
    className = "  h-50  fixed bg-white  w-screen lg:items-center flex flex-row ">
     
    <nav className=" flex z-100 p-8 w-full absolute top-30 justify-between items-center  flex-row">
      <div className='w-full flex flex-row'>
      <Link to="/"><h1>Dominic Bloomfield</h1></Link>
      </div>
      <div className = "flex flex-row gap-8 items-center ">
        
      <ul className="z-100 lg:top-0  lg:relative lg:right-0 absolute right-50 -top-27 flex lg:flex-row flex-col items-center justify-between gap-4">
        <motion.li className="cursor-pointer" onClick={()=> {setIsShopOpen(!isShopOpen); setIsWorksOpen(false)}}>Shop</motion.li>
            
            <motion.div 
              initial={{opacity: 0}}
              animate = {{opacity: isShopOpen ? 1 : 0,  y: isShopOpen ? 0 : -10}}
              exit={{opacity: 0, y: -10}}
              transition = {{duration: 0.3}}
            
            className = {` ${!isShopOpen ? "hidden":"absolute top-10 "} `}>
            <li className="cursor-pointer"><Link to="/originals">Paintings</Link></li>
            <li className="cursor-pointer"><Link to="/prints">Prints</Link></li>
            </motion.div>

        <li className="" onClick={()=> {{setIsWorksOpen(!isWorksOpen); setIsShopOpen(false)}}}>Works</li>
        <motion.div 
        
        initial={{opacity: 0}}
            animate = {{opacity: isWorksOpen ? 1 : 0,  y: isWorksOpen ? 0 : -10}}
            transition = {{duration: 0.3}}

        className = {` ${!isWorksOpen ? "hidden":"absolute left-15 top-10 "}`}>
            <li className="cursor-pointer"><Link to="/paintings">Paintings</Link></li>
            <li className="cursor-pointer"><Link to="/drawings">Drawings</Link></li>
            <li className="cursor-pointer"><Link to="/graphicdesign">Graphic Design</Link></li>

            </motion.div>
        <li className="cursor-pointer"><Link to="/about">About</Link></li>


      </ul>



         <ShoppingCart size={30}></ShoppingCart>
            <div className="flex z-100 gap-1 flex-col lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="rounded-2xl bg-black h-1 w-8 block"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        className="rounded-2xl bg-black h-1 w-8 block"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="justify-end rounded-2xl bg-black h-1 w-8 block"
                    />

              </div>
    </div>
    </nav>

      
    </motion.div>
  );
}

export default Navbar;