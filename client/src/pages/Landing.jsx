import React, { useRef } from "react";
import backgroundImage from "../assets/bg1.png";
import right from "../assets/RE.png";
import left from "../assets/REE.png";
import svgd from "../assets/Gr126.svg";
import "./landing.css";
import logo from "../assets/logo.png";
import bg2 from "../assets/bg2.png";
import flesh from "../assets/flesh.png";
import { Link } from "react-router-dom";

function App() {
  const aboutSectionRef = useRef(null);
  const HomeSectionRef = useRef(null);

  const scrollToAboutSection = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHomeSection = () => {
    HomeSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <div
        ref={HomeSectionRef}
        className="bg-cover bg-center h-screen flex items-center flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <nav className="flex justify-between p-8 w-full">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="" />
            <h2 className="order-2 text-xl text-white">Genihub</h2>
          </div>
          <button onClick={scrollToAboutSection} className="text-white text-xl">
            About
          </button>
          <Link to="/login">
          <button className="bt w-40 h-12 ">Login</button>
          </Link>
            
        </nav>
        <div className="flex items-center justify-center flex-col w-1/2 h-screen">
          <h1 className="text-8xl font-bold text-white text-center pb-16">
            Collaborate Together <br /> News, Links, Ideas.
          </h1>
          <p className="text-center text-xl text-white pb-16">
            Join our vibrant community today! Sign up to unlock a world of
            knowledge sharing and collaborative projects. Your journey into a
            community of innovation starts here.
          </p>
        <Link to="/register">
        <button className="bt  w-40 h-12 text-white hover:transition-[0.5s] transition-[0.5s]">
              Sign up
            </button>
        </Link>
            
          

          <button
            className="down-button  pt-16 bottom-0"
            onClick={scrollToAboutSection}
          >
            <img src={svgd} className="w-8" alt="" />
          </button>
        </div>
        <div className="fixed bottom-12 left-0">
          <img className="w-56" src={left} alt="Left" />
        </div>
        <div className="fixed top-48 right-0">
          <img className="w-72" src={right} alt="Right" />
        </div>
      </div>

      <div
        ref={aboutSectionRef}
        className=" about  bg-cover bg-center h-screen flex items-center flex-col"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="flex items-center justify-center flex-col w-1/2 h-screen">
          <h1 className="text-8xl font-bold text-white text-center pb-16">
            About the community{" "}
          </h1>
          <p className="text-center text-xl text-white ">
            Community is an online platform that fosters communication,
            collaboration, and the sharing of ideas among individuals interested
            in technology and software development. It serves as a hub for
            developers, designers, researchers, and enthusiasts to connect,
            learn, and explore new technologies.
          </p>
        </div>
        <button onClick={scrollToHomeSection} className="self-end mr-12 pb-12 ">
          <img src={flesh} className="" alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
