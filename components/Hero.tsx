import Image from 'next/image';
import React from 'react';


const Hero = () => {

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Welcome to our Online Store
        </h1>

        <p className="hero__subtitle">
          Streamline your online shopping experience with our online store
        </p>

        <button
          className='custom-btn bg-primary-blue text-white rounded-full mt-10'
          onClick={handleScroll}
        >
          Explore
        </button>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;