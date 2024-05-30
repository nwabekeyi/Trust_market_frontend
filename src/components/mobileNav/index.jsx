import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMobilenav = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative justify-center lg:hidden py-5 px-3">
      <nav className="bg-white h-[30px] flex items-center justify-between px-4">
      <NavLink to="/" className="text-3xl text-red cursor">Trust <span className="text-yellow">Market</span></NavLink>
        <div onClick={toggleMobilenav} className="cursor-pointer space-y-2 z-20 relative">
          <motion.div
            className="h-1 w-8 bg-red"
            initial={{ rotate: 0, y: 0 }}
            animate={{
              rotate: isVisible ? 45 : 0,
              y: isVisible ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="h-1 w-8 bg-red"
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="h-1 w-8 bg-red"
            initial={{ rotate: 0, y: 0 }}
            animate={{
              rotate: isVisible ? -45 : 0,
              y: isVisible ? -17 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </nav>

      {isVisible && (
        <motion.ul
          className="bg-black text-white fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-4"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
        >
          <li className="text-xl">Home</li>
          <li className="text-xl">Categories</li>
          <li className="text-xl">Shop</li>
          <li className="text-xl">Sell</li>
          <li className="text-xl">About</li>
          <li className="text-xl">Contact</li>
        </motion.ul>
      )}
    </div>
  );
};

export default MobileNavbar;
