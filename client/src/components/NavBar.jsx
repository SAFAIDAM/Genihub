import { useState } from "react";
import logo from "../assets/logo.svg";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function NavBar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="background ">
      <div className="container space">
        <header>
          <nav className="flex justify-between ">
            <div className="flex justify-center gap-[24px] ">
              <img src={logo} alt="logo" />
              <ul className=" flex gap-[24px] text-white">
                <li>
                  <a href={"./Newspage"}>Recent News</a>
                </li>
                <li>
                  <a href="#">Latest updates</a>
                </li>
                <li>
                  <a href={"./ideas"}>Project ideas</a>
                </li>
              </ul>
            </div>
            <div className="flex align-center gap-2">
              <HiOutlineMagnifyingGlass className="size-[20px] text-white relative right-[-270px] top-[8px] align-middle" />
              <input className="input bg-transparent" type="search" />
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <g style={{ mixBlendMode: "luminosity" }}>
                    <path
                      d="M18 35C27.3888 35 35 27.3888 35 18C35 8.61116 27.3888 1 18 1C8.61116 1 1 8.61116 1 18C1 27.3888 8.61116 35 18 35Z"
                      stroke={isHovered ? "#69A4EB" : "white"}
                      strokeWidth="2"
                      style={{
                        transition: "stroke 0.3s ease",
                      }}
                    />
                    <path
                      d="M10.35 26.5C14.3139 22.3483 21.6434 22.1528 25.65 26.5M22.2416 13.75C22.2416 16.0972 20.3361 18 17.9855 18C15.6351 18 13.7295 16.0972 13.7295 13.75C13.7295 11.4028 15.6351 9.5 17.9855 9.5C20.3361 9.5 22.2416 11.4028 22.2416 13.75Z"
                      stroke={isHovered ? "#69A4EB" : "white"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={{
                        transition: "stroke 0.3s ease",
                      }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default NavBar;
