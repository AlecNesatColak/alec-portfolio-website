import React from "react";
import Lottie from "react-lottie";
import animationData from "../../softwareAnimation.json"; // Ensure you have the JSON file downloaded

export default function HeroSection() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="intro--title">Hey, I'm Alec-Nesat</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span> <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            Welcome to my website, I am a software engineer with a passion for
            creating and improving technology. I wish to grow my website as a
            reflection of my own growth.
            <br />
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <Lottie options={defaultOptions} height={600} width={600} />
      </div>
    </section>
  );
}

