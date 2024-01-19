import { HiArrowUpTray } from "react-icons/hi2";
import "../index.css";
import { useState, useEffect } from "react";
import axios from "axios";


export function UpdateLink({onUpdate, linkId}) {
    
    const [title, setTitle] = useState();
    const [link, setLink] = useState();

    useEffect(() => {
        axios
          .get(`http://localhost:8000/getLink/${id}`)
          .then((result) => {
            setTitle(result.data.linkTitle);
            setLink(result.data.linkUrl);
          })
          .catch((err) => console.log(err));
      }, [id]);
    
      const update = (e) => {
        e.preventDefault();
        axios
          .put(`http://localhost:8000/updateLink/${id}`, {
            linkTitle: title,
            linkUrl: link,
          })
          .then((result) => {
            console.log(result);
            // onUpdate();
            window.location.reload();
          })
          .catch((err) => console.log(err));
      };
  
        
      return (
        <>
            <div className="overlay" />
            <div className="w-[600px] fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] z-10">
                <div className="p-[40px] rounded-[20px] bg-[#2A2F35]">
                    <h1 className="mb-[20px] font-medium text-[30px]">Update Link</h1>
                    <form onSubmit={update} className="">
                        <label htmlFor="title" className="inline-block mb-[10px] text-[20px] font-medium">Title</label><br />
                        <input 
                            autoComplete="false"
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            type="text" id="title" 
                            className="w-full pl-5 pr-5 mx-auto mb-[20px] h-[40px] rounded-[10px] bg-[#202429] inline-block border border-solid border-[#3F64EC] focus:outline-none" 
                        />
                        <label htmlFor="link" className="inline-block mb-[10px] text-[20px] font-medium">Link</label><br />
                        <input 
                            autoComplete="false"
                            value={link} 
                            onChange={(e) => setLink(e.target.value)} 
                            type="text" 
                            id="link" 
                            className="w-full pr-5 pl-5 mx-auto mb-[30px] h-[40px] rounded-[10px] bg-[#202429] inline-block border border-solid border-[#3F64EC] focus:outline-none" 
                        />

                        <div className=" flex justify-between items-center">
                            <button className="bg-[#3F64EC] rounded-[22px] w-[80px] h-[35px]" type="submit">Update</button>
                            <button onClick={onUpdate} className="bg-[#4C4B4B] rounded-[22px] w-[80px] h-[35px]" >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
      }