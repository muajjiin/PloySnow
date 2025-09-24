import React from 'react';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';  
import HeroExperience from '../components/models/hero_models/HeroExperience.jsx';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import { useGSAP} from '@gsap/react';
import gsap from 'gsap';
const Hero = () => {
   useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background pattern" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="text-lg md:text-2xl text-white">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                into Real Projects
              </h1>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                that Deliver Results
              </h1>
            </div>

            <p className="text-white-50 md:text-xl text-lg relative z-10 pointer-events-none">
              Hi, Iam elisha lets make this world a great place to live
            </p>

            {/* CTA Button */}
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

                    {/* Right Side 3d model */}

                    <figure>
                      <div className='hero-3d-layout border-red-200' >
                      <HeroExperience/>
                      </div>
                    </figure>

      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
