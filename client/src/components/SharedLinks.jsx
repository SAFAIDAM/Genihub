
import large from "../assets/htmlTag.png" 
import like from "../assets/like.png" 
import comment from "../assets/comment.png" 
import read from "../assets/read.png" 
import three from "../assets/threeDots.png"
import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Header from "./Header"
import d from "../assets/group.jpg"
import ThreeDots from "./ThreeDots"
import user from "../assets/user.jpg"
import Footer from "./Footer"

// import { link } from "react-router-dom"



export function SharedLinks() {

    const [miniPopUpMap, setMiniPopUpMap] = useState({});


    const handleUpdateClick = (linkId) => {
        setMiniPopUpMap((prevMap) => ({
            ...prevMap,
            [linkId]: !prevMap[linkId],
        }));
    };

    const [links, setLinks] = useState([]);



    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const response = await fetch('https://reqres.in/api/users');
                const userData = await response.json();
    
                const linksResponse = await fetch('http://localhost:8000/sharedLinks');
                const linksData = await linksResponse.json();
    
                const combinedData = linksData.map((link, index) => {
                    return {
                        ...link,
                        user: {
                            name: `${userData.data[index].first_name} ${userData.data[index].last_name}`,
                            profilePicture: userData.data[index].avatar,
                        },
                    };
                });
    
                setLinks(combinedData);
            } catch (error) {
                console.error('Error fetching links:', error);
            }
        };
    
        fetchLinks();
    }, []);


    const handleReadPost = (linkUrl) => {
        window.open(linkUrl, '_blank');
    };

    return (
        <>
            <NavBar />
            <Header />
            <div className="flex text-white justify-start flex-wrap items-center w-[1300px] mx-auto gap-[50px] mb-8">
                {links.map(link => (
                    <div key={link._id}>
                        <div className="w-[400px] h-[480px] p-6 bg-[#2A2F35] rounded-[20px] border border-solid border-gray-700 overflow-hidden relative">
                        {/* user and three */}
                        <div className="flex justify-between items-center mb-6">
                            {/* image and username and date */}
                            <div className="flex justify-between items-center gap-3">
                                <div>
                                    {/* <img src={prof} className="rounded-full w-[60px] h-[60px]" alt="" /> */}
                                    <img src={link.user.profilePicture} className="rounded-full w-[60px] h-[60px]" alt="" />
                                    </div>
                                <div>
                                    <h3 className="text-xl font-normal">{link.user.name}</h3>
                                    <p className="font-normal text-xs text-[#E0D4D4]">{new Date(link.linkDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        })}
                                    </p>
                                </div>
                            </div>
                            {/* three dots */}
                            <div className="w-[20px] h-[20px] hover:cursor-pointer">
                                <img
                                    src={three}
                                    onClick={() => handleUpdateClick(link._id)}
                                    alt=""
                                />
                            </div>
                        </div>
                        {miniPopUpMap[link._id] && (
                            <ThreeDots
                            linkId={link._id}
                            onClose={() =>
                                setMiniPopUpMap((prevMap) => ({
                                ...prevMap,
                                [link._id]: false,
                                }))
                            }
                            />
                        )}
                        {/* title */}
                        <p className="mb-6 h-[48px] line-clamp-2">{link.linkTitle}</p>
                        {/* image */}
                        <div>
                            <img className="rounded-[10px] max-h-[240px] min-w-[100%] mb-6" src={large} alt="" />
                        </div>
                        <div>
                            <button onClick={() => handleReadPost(link.linkUrl)} className="flex items-center justify-between gap-3 bg-[#3F64EC] rounded-[22px] px-[15px] py-[10px] hover:bg-transparent border border-solid border-blue-500">
                                Read post
                                <img src={read} alt="" />
                            </button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}