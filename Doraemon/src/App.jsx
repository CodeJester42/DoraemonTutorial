import React from 'react'
import AOS from "aos";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in",
    });
  }, []);  
    return <div className="overflow-hidden">
      <Navbar />
      <Hero />
    </div>;
};

export default App

