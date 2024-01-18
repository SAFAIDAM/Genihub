import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import Newspage from '../pages/Newspage';

import { IoCheckboxOutline } from "react-icons/io5";
// Import your CSS file for styling

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [userNotFound, setUserNotFound] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      const response = await axios.post('/login', {
        email,
        password,
      });

      if (response.data.error) {
        toast.error(response.data.error);
        setUserNotFound(true); // Set state to indicate user not found
      } else {
        setData({});
        setUserNotFound(false); // Reset state
        navigate("/Newspage");
      }
    } catch (error) {
      // Handle error
      console.error("Login error:", error);
    }
  };

  return (
    <div className="mt-[30px]">
      
      <div className={`login-container ${userNotFound ? 'user-not-found' : ''}`} 
      >
      <form className="form-group " onSubmit={loginUser}>
        <h1 className="text-white text-center text-5xl font-bold" >Login</h1>
        <h3 className="text-gray-400 text-center text-base font-normal">Log into your community account</h3>
        <label className="block mb-3 mt-10 mr-[25rem] text-white text-[16px] font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className={`input-group ${userNotFound ? 'error-border' : ''}`}
        />
        <labe className="block mb-3 mt-10 mr-[24rem] text-white text-[16px] font-medium">Password</labe>
        <input     
          type="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className={`input-group  ${userNotFound ? 'error-border' : ''}`}
        />
        <div className="">
        <p  className=" text-[#AAA] text-[15px] mr-[22rem] flex justify-center gap-1"><IoCheckboxOutline /> Remember me</p>
        <p className="text-[#AAA] text-[15px] ml-[22rem]">Forgot password ?</p>
        </div>
        {userNotFound ? (
          <button type="button">Login</button>
        ) : (
          <Link to="/Newspage">
            <button  className="text-white flex gap-2 pt-3 pb-3 px-5 rounded-[22px] bg-gradient-to-r from-[#3C6FF2] to-[#5724A4]" type="submit">Login</button>
          </Link>
        )}
        <p className="text-white">
          Don’t have an account? <Link to="/register" className="text-blue-500">Sign up</Link>
        </p>
      </form>
    </div>
    </div>
    
  );
}
