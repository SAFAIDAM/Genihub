import "../images.css";
import image from "../assets/image.jpg";
import user from "../assets/user.jpg"
import d from "../assets/group.jpg"
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LuPencil } from "react-icons/lu";
import { FiEdit2 } from "react-icons/fi";
import { HiMiniPlus } from "react-icons/hi2";
import Footer from "../components/Footer";
import { ClipLoader } from "react-spinners";
function PostIem() {
  const [posts, setPosts] = useState([]);
  // const loggedInUserId = 1;
  const [loading, setLoading] = useState(true);

  const [generatedUsernames, setGeneratedUsernames] = useState({});

useEffect(() => {
  // Fetch posts
  axios
    .get("http://localhost:8000/ideas")
    .then((result) => {
      setPosts(result.data);

      // Generate random usernames for each post
      result.data.forEach((post) => {
        axios
          .get("https://randomuser.me/api/")
          .then((response) => {
            const username = response.data.results[0].login.username;
            setGeneratedUsernames((prevUsernames) => ({
              ...prevUsernames,
              [post.id]: username,
            }));
          })
          .catch((error) => {
            console.error("Error fetching random username:", error);
          });
      });

      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}, []);
  // const handleDelete = (id) => {
  //   axios
  //     .delete("http://localhost:8000/deleteUser/" + id)
  //     .then((res) => {
  //       console.log(res);
  //       window.location.reload();
  //     })
  //     .catch((err) => console.log(err));
  // };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/deleteidea/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  

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
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#fdfdfd" size={50} />
        </div>
      ) : (
        <div className="justify-center">
          <div className="flex justify-center align-middle mt-8 flex-wrap gap-[77px]  ">
            {posts.map((post) => (
              <div key={post.id}>
                <div>
                  <div className="flex gap-3 mb-3 align-middle text-white ">
                    <img
                      className="w-[52px] h-[52px] rounded-[30px]"
                      src={user}
                      alt="upload"
                    />

                    <h4 className="mt-3">{generatedUsernames[post.id] || 'DefaultUsername'}</h4>
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
                        src={d}
                        // src={`http://localhost:8000/Images/${post.image}`}
                        alt="image"
                      />
                      <div className="flex justify-between ">
                        <p className="text-[12px] w-[291px] line-clamp-2">
                          {post.description}
                        </p>
                        <p className="text-[12px] text-[#7F8286]">
                          {formatDate(post.formattedDate)}
                        </p>
                      </div>
                      <div
                        className="flex justify-between 
                    
                mt-4"
                      >
                        {/* <button
                      className="border border-[#3F64EC] rounded-[22px] 
                w-[160px] h-[39px] 
                transition-[0.4s] bg-[#3F64EC]
                 hover:bg-transparent hover:transition-[0.4s] hover:shadow-amber-50"
                    >
                      Interested
                    </button> */}
                        <div className="flex gap-4">
                          <div>
                            <Link to={`/updateidea/${post._id}`}>
                              <LuPencil className="text-[26px]" />
                            </Link>
                          </div>
                          <button onClick={() => handleDelete(post._id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="25"
                              viewBox="0 0 20 22"
                              fill="none"
                            >
                              <path
                                d="M17.3636 4.27246L16.7552 14.2147C16.5997 16.7548 16.522 18.025 15.8917 18.9381C15.58 19.3896 15.1788 19.7706 14.7134 20.0569C13.7722 20.6361 12.5125 20.6361 9.99282 20.6361C7.46996 20.6361 6.2085 20.6361 5.26669 20.0558C4.80107 19.769 4.3997 19.3873 4.08815 18.9351C3.45802 18.0205 3.38199 16.7486 3.22997 14.2049L2.63635 4.27246"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M1 4.27273H19M14.0557 4.27273L13.3731 2.9559C12.9196 2.08118 12.6928 1.64381 12.3017 1.37104C12.215 1.31054 12.1231 1.25671 12.027 1.21011C11.5939 1 11.0741 1 10.0345 1C8.9688 1 8.436 1 7.99568 1.21892C7.8981 1.26744 7.80498 1.32344 7.71729 1.38634C7.32164 1.67016 7.10063 2.12353 6.65861 3.03027L6.05292 4.27273"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>

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
          <Footer />
        </div>
      )}
    </>
  );
}

export default PostIem;
