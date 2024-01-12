import React from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Footer from "../components/Footer"
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { useRef } from "react";

function PfeCreate() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleChooseFileClick = () => {
    // Programmatically trigger click event on the hidden file input
    fileInputRef.current.click();
  };

  return (
    <>
    <main className="mb-10">
      <NavBar />
      <div className="flex justify-center gap-[30rem] text-white h-[100px] mt-[100px] ">
        <div className="text-[36px] mr-[10rem]">
          <h1>Add a creative Ideas</h1>
        </div>
        <div></div>
      </div>
      <div className="flex justify-center"> 
        <div className="text-white w-[1067px] p-[6rem] bg-[#2A2F35] rounded-[22px]">
          <form className="flex flex-col gap-6" action="">
            <div className="flex flex-col gap-5">
              <label htmlFor="">Title / Header</label>
              <input
                className="w-[870px] h-[80px] bg-[#202429] border border-[#4C4B4B] rounded-[22px] hover:border hover:border-[#3F64EC] focus:outline-none  focus:ring focus:border focus:border-[#3F64EC]  focus:pl-4 pl-4 "
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">Description</label>
              <p className="text-[10px] text-[#6c6a6a]">the max is 100 words</p>
              <textarea
                className="w-[870px] h-[100px] bg-[#202429] border border-[#4C4B4B] rounded-[22px] hover:border hover:border-[#3F64EC] focus:outline-none  focus:ring focus:border focus:border-[#3F64EC] text-[13px]  focus:text-[13px] focus:pl-4 pl-4 focus:pt-4 pt-4 "
                rows="4" 
                cols="10"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="">Insert Image</label>
              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
                
              />
              {/* Button to trigger file input */}
              <button
                type="button"
                className="bg-[#3F64EC] w-[190px] h-[53px] border border-[#3F64EC] rounded-[30px] transition-[0.4s] hover:border hover:transition-[0.4s]  hover:border-[#3F64EC] hover:bg-transparent flex gap-2 pt-4 pb-4 px-5"
                onClick={handleChooseFileClick}
              >
                Upload image <HiOutlineArrowDownTray  className="text-[20px]"/>
                
              </button>
              {image && <p>Selected file: {image.name}</p>}
            </div>
            <div className="flex gap-3 mx-[45rem]">
              <button className=" bg-[#3F64EC] border border-[#3F64EC]  hover:transition-[0.4s] hover:border hover:border-[#3F64EC] hover:bg-transparent px-4 pt-2 pb-2 rounded-[22px]" type="submit">Submit</button>
              <button className="bg-[#4C4B4B] transition-[0.4s]  border border-[#4C4B4B]  hover:transition-[0.4s] hover:border hover:border-[#4C4B4B] hover:bg-transparent px-4 pt-2 pb-2 rounded-[22px]" type="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </main>
    <Footer />
    </>
    
  );
}

export default PfeCreate;
