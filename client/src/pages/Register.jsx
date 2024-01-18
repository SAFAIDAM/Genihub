import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoCheckboxOutline } from "react-icons/io5";
export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  if (name === "phoneNumber" && !/^\d*$/.test(value)) {
    toast.error("Please enter only numbers for the phone number.");
    return;
  }

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, phoneNumber } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        phoneNumber,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login successful. welcome");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-[30px]">
       <div className="register-container">
      <form className="form-group" onSubmit={registerUser}>
        <h1 className="text-white text-center text-4xl font-bold mt-8">Sign up</h1>
        <h3 className="text-gray-400 text-center text-base font-normal">create your community account</h3>
        <label className="block mb-3 mt-10 mr-[14rem] text-white text-[13px] font-medium"> UserName</label>
        <input
         className="input-group"
          type="text"
          placeholder="Enter username"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label className="block mb-3 mt-10 mr-[14rem] text-white text-[13px] font-medium"> Email</label>
        <input
         className="input-group"
          type="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label className="block mb-3 mt-10 mr-[14rem] text-white text-[13px] font-medium"> Phone Number</label>
        <input
         className="input-group"
          type="tel"
          placeholder="Enter Phone number"
          value={data.phoneNumber}
          onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
        />
        <label className="block mb-3 mt-10 mr-[14rem] text-white text-[13px] font-medium"> Password</label>
        <input
        className="input-group"
          type="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <div className="">
        <p  className=" text-[#AAA] text-[10px] mr-[14rem] flex justify-center gap-1 mt-4"><IoCheckboxOutline /> Remember me</p>
        <p className="text-[#AAA] text-[10px] ml-[14rem]">Forgot password ?</p>
        </div>
        
        <button className="text-white flex gap-2 pt-3 pb-3 px-5 rounded-[22px] bg-gradient-to-r from-[#3C6FF2] to-[#5724A4] mb-9" type="submit">Sign up</button>
        <p className="text-white mt-[-30px]"> 
          Already have an account? <Link to="/login"  className="text-blue-500 ">Login</Link>
        </p>
      </form>
    </div>
    </div>
   
  );
}
