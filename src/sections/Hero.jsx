import React from 'react';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx'; // make sure Button component exists

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden w-full min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img src="/images/bg.png" alt="background" className="w-full h-full object-cover"/>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center w-full md:px-20 px-5">
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="hero-text space-y-4 md:space-y-6">
            
            {/* Headings */}
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold text-white leading-tight">
              Shaping
              <span className="slide ml-4">
                <span className="wrapper flex flex-wrap gap-4">
                  {words.map((word, index) => (
                    <span key={index} className="flex items-center gap-3 pb-2">
                      <img
                        src={word.imgPath || '/images/default.png'}
                        alt={word.text || 'word'}
                        className="w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16 p-1 rounded-full bg-white/50"
                      />
                      <span className="text-white font-semibold text-3xl md:text-5xl">
                        {word.text}
                      </span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold text-white leading-tight">
              into Real Projects
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-bold text-white leading-tight">
              that Deliver Results
            </h1>

            {/* Description */}
            <p className="text-white/60 md:text-xl relative z-10">
            hi i am elisha  lets make this world great place to live
            </p>

            {/* Button */}
            <Button text="See My Work" className="md:w-80 md:h-16 w-60 h-12" id="counter" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
