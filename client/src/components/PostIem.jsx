import "../images.css";
import image from "../assets/image.jpg";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { HiMiniPlus } from "react-icons/hi2";
import Footer from "../components/Footer"
function PostIem() {
  const [posts, setPosts] = useState([]);
  // const loggedInUserId = 1; 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <NavBar />

      <div className=" flex justify-center gap-[30rem] text-white h-[100px] mt-[100px]  ">
        <div className="text-[36px]">
          <h1>Discover New Ideas</h1>
        </div>
        <div className="">
          <Link to="/createidea">
            <button className="font-thin flex gap-2 pt-3 pb-3 px-5 rounded-[17px] bg-gradient-to-r from-[#3C6FF2] to-[#5724A4]">
              Insert New Ideas
              <HiMiniPlus className="text-[17px] mt-1" />
            </button>
          </Link>
        </div>
      </div>
      <div className="justify-center">
        <div className="flex justify-center align-middle mt-8 flex-wrap gap-[77px]  ">
          {posts.map((post)=> ( 
          <div key={post.id}>
            <div>
              <div className="flex gap-3 mb-3 align-middle text-white ">
                <img
                  className="w-[52px] h-[52px] rounded-[30px]"
                  src={image}
                  alt=""
                />
                <h4 className="mt-3">{post.userId}</h4>
              </div>
            </div>
            <section
              className="bg-[#2A2F35] w-[489px] h-[480px] p-6 border border-[#4C4B4B] 
              align-middle rounded-[22px]  
              border solid-[1px]  "
            >
              <div className="text-white solid-[1px]">
                <div className="">
                  {/* <div></div> */}
                  <h3 className="text-center mb-2">{post.title}</h3>
                  <img
                    className="w-[430px] h-[ 206px] rounded-[22px] mb-5"
                    src={image}
                    alt="image"
                  />
                  <div className="flex justify-between ">
                    <p className="text-[12px] w-[291px]">
                      {post.body}
                    </p>
                    <p className="text-[12px] text-[#7F8286]">May,2023</p>
                  </div>
                  <div
                    className="flex justify-between 
                mt-4"
                  >
                    <button
                      className="border border-[#3F64EC] rounded-[22px] 
                w-[160px] h-[39px] 
                transition-[0.4s] bg-[#3F64EC]
                 hover:bg-transparent hover:transition-[0.4s] hover:shadow-amber-50"
                    >
                      Interested
                    </button>
                    {/* { post.userId === loggedInUserId && (  ) } */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                    >
                      <path
                        d="M15.6047 23.2622C20.6243 22.9256 24.6227 18.8349 24.9518 13.6995C25.0161 12.6945 25.0161 11.6537 24.9518 10.6487C24.6227 5.5133 20.6243 1.42263 15.6047 1.08603C13.8922 0.971202 12.1043 0.971444 10.3953 1.08603C5.37567 1.42263 1.37729 5.5133 1.04829 10.6487C0.983905 11.6537 0.983905 12.6945 1.04829 13.6995C1.16812 15.5699 1.98811 17.3017 2.95349 18.764C3.51401 19.7877 3.14409 21.0654 2.56025 22.1815C2.13929 22.9863 1.92881 23.3887 2.0978 23.6793C2.26681 23.97 2.64431 23.9793 3.39931 23.9978C4.8924 24.0345 5.89921 23.6074 6.69841 23.0129C7.15168 22.6758 7.37832 22.5072 7.53453 22.4878C7.69072 22.4684 7.99812 22.5961 8.61281 22.8516C9.16528 23.0811 9.80675 23.2227 10.3953 23.2622C12.1043 23.3768 13.8922 23.377 15.6047 23.2622Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </section>
          </div>
          ))}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default PostIem;
