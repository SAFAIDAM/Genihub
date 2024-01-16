import React from "react";
import image from "../assets/image.jpg";
import { LuTrash } from "react-icons/lu";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { HiArrowLeft } from "react-icons/hi2";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function User() {
  return (
    <>
      <NavBar />

      <div className="flex justify-center items-center flex-col">
        <div className="text-white mt-[10rem] mb-9 mr-[60rem]">
          <Link to="/Newspage">
          <button className="w-[66px] h-[66px] bg-[#3F64EC] border border-[#3F64EC] rounded-[66px]  hover:border hover:border-[#3F64EC] hover:transition-[0.4s] transition-[0.4s] hover:bg-transparent"><HiArrowLeft  className="ml-4 text-[28px]"/></button>
          </Link>
          
        </div>
        <div className="flex gap-3 mb-5 mr-[22rem] text-[13px]">
          <img className="w-[109px] h-[109px] rounded-[109px] border-[10px] border-[#262E39]" src={image} alt="" />
          <div className="flex flex-col gap-2 mt-3">
          <button
                type="button"
                className="bg-[#3F64EC] text-white w-[160px] h-[43px] border border-[#3F64EC] rounded-[30px] transition-[0.4s] hover:border hover:transition-[0.4s]  hover:border-[#3F64EC] hover:bg-transparent flex justify-center gap-2 pt-3 px-5"
              >
                Upload image <HiOutlineArrowDownTray  className="text-[16px]"/>
                
              </button>
              <button
                type="button"
                className="bg-[#4C4B4B] text-white w-[160px] h-[43px] border border-[#4C4B4B] rounded-[30px] transition-[0.4s] hover:border hover:transition-[0.4s]  hover:border-[#4C4B4B] hover:bg-transparent flex justify-center gap-2 pt-3 px-5"
              >
                Delete image < LuTrash  className="text-[16px]"/>
                
              </button>
          </div>
        </div>
        <div className="text-white text-[13px]">
          <div>
            <form action="">
              <div>
                <div className="">
                  <div className="flex gap-9">
                    <div className="flex gap-1 mt-4 flex-col">
                      <label htmlFor="">Username</label>
                      <input
                        type="text"
                        className="w-[300px] h-[49px] bg-transparent border border-[#4C4B4B] rounded-[15px] hover:border hover:border-[#3F64EC] focus:outline-none  focus:ring focus:border focus:border-[#3F64EC]  focus:pl-4 pl-4 "
                        placeholder="Username"
                      />
                    </div>
                    <div className="flex gap-1 mt-4 flex-col">
                      <label htmlFor="">Phone Number</label>
                      <input
                        type="text"
                        className="w-[300px] h-[49px] bg-transparent border border-[#4C4B4B] rounded-[15px] hover:border hover:border-[#3F64EC] focus:outline-none  focus:ring focus:border focus:border-[#3F64EC]  focus:pl-4 pl-4"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="flex gap-9">
                    <div className="flex gap-1 mt-6 flex-col">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        className="w-[300px] h-[49px] bg-transparent border border-[#4C4B4B] rounded-[15px] hover:border hover:border-[#3F64EC] focus:outline-none  focus:ring focus:border focus:border-[#3F64EC]  focus:pl-4 pl-4"
                        placeholder="Email"
                      />
                    </div>
                    <div className="flex  gap-1 mt-6 flex-col">
                      <label htmlFor="">Occupation</label>
                      <input
                        type="text"
                        className="w-[300px] h-[49px] bg-transparent border border-[#4C4B4B] rounded-[15px] hover:border hover:border-[#3F64EC] focus:outline-none  focus:ring focus:border focus:border-[#3F64EC]  focus:pl-4 pl-4"
                        placeholder="Occupation"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mt-6 flex-col">
                  <label htmlFor="">Bio</label>
                  <textarea
                    type="text"
                    className="h-[109px] line-clamp-3 bg-transparent border border-[#4C4B4B] rounded-[15px] hover:border hover:border-[#3F64EC] focus:outline-none  focus:ring focus:border focus:border-[#3F64EC]  focus:pl-4 pl-5 pt-4 focus:pt-4 "
                    placeholder="Back-end architect crafting robust databases and scalable APIs. Debugging the world, one line of code at a time.

                    "
                    rows="4"
                    cols="10"
                  />
                </div>
                <div className="flex gap-3 mt-5 ml-[26rem]">
              <button className=" bg-[#3F64EC] border border-[#3F64EC]  hover:transition-[0.4s] hover:border hover:border-[#3F64EC] hover:bg-transparent px-4 pt-2 pb-2 rounded-[22px]" type="submit">Save changes</button>
              <button className="bg-[#4C4B4B] transition-[0.4s]  border border-[#4C4B4B]  hover:transition-[0.4s] hover:border hover:border-[#4C4B4B] hover:bg-transparent px-4 pt-2 pb-2 rounded-[22px]" type="button">Cancel</button>
            </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default User;
