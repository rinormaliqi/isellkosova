// App.js
import React, { useState, useEffect } from 'react';

const LogoComp = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('December 31, 2024 23:59:59').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify you at ${email} when we launch.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[#DAA06D] text-white flex flex-col">


      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        {/* Animated Logo */}
        <div className="mb-8 animate-float">
          <div className="w-56 h-56 mt-12 mx-auto rounded-full bg-none flex items-center justify-center shadow-lg">
<img src="/logo4.png" alt="ssss" />          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="mb-12 text-4xl md:text-6xl font-bold mb-4 animate-slide-in">
          <span className="text-white">Vjen</span>{' '}
          <span className="text-white">së Shpejti</span>
        </h1>
        
        {/* Typing Animation */}
        <div className="mb-8 animate-typing overflow-hidden border-r-2 border-gray-400 whitespace-nowrap mx-auto text-xl md:text-2xl text-white">
          Real Estate & Shit/Blerje Veturash
        </div>
        
        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-12 text-white animate-fade-in">
Po punojmë shumë për t'ju sjellë platformën më të mirë për blerjen dhe shitjen e pronave dhe veturave në Kosovë. Qëndroni të njoftuar për diçka të mrekullueshme!        </p>
        
   
        
        {/* Notify Form */}
        <div className="max-w-md w-full mx-auto mb-16 animate-slide-in">
          <p className="text-lg mb-4 text-white">Më njoftoni kur të lancohet!</p>
          <form onSubmit={handleSubmit} className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded-l-lg bg-white text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button 
              type="submit"
              className="bg-white text-black font-semibold px-6 py-3 rounded-r-lg hover:bg-black hover:text-white transition-colors duration-300 animate-pulse"
            >
              Më njofto!
            </button>
          </form>
        </div>
        
   
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-white text-sm animate-fade-in">
        <p>&copy; {new Date().getFullYear()} isellkosova.com. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default LogoComp;