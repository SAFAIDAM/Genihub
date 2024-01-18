import add from "../assets/add.png"
import { useState } from "react";
import { CreateLink } from "./CreateLink";
import "../index.css"




function Header() {


    const [createPop, setCreatePop] = useState(false);

    const openCreatePop = () => {
        setCreatePop(true);
        // document.querySelector('.popup').style.color = 'red';

    };
    
    const closeCreatePop = () => {
        setCreatePop(false);
        // document.body.style.opacity = '1';
    };



    return (
        <>
            <div className="w-[1100px] mx-auto my-[80px] flex justify-between items-center flex-wrap">
                <h1 className="text-white text-[50px] font-medium tracking-[1px]">Discover New Ideas</h1>
                {/* onClick={() => setCreatePop(true)} */}
                <button onClick={openCreatePop} className="flex justify-between items-center text-white px-[20px] py-[15px] text-[20px] rounded-[22px] bg-gradient-to-r from-blue-500 to-purple-500 w-[230px] font-normal">
                Insert New Post
                <img src={add} alt="" />
                </button>
            </div>
            {/* {createPop && <CreateLink onDisappear={closeCreatePop} />} */}
            {createPop && (
                <>
                <div className="overlay" />
                <CreateLink onDisappear={closeCreatePop} />
                </>
            )}
        </>
    )
}

export default Header;