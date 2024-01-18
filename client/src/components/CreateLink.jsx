import { useState } from "react";
import { HiArrowUpTray } from "react-icons/hi2";
// import { Link } from 'react-router-dom';
import axios from 'axios';





export function CreateLink({onDisappear}) {

    const [title, setTitle] = useState();
    const [link, setLink] = useState();
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          setLoading(true);
          const response = await axios.post("http://localhost:8000/shareLink", {
            linkTitle: title,
            linkUrl: link,
          });
          console.log(response.data);


          window.location.reload();

        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //       setLoading(true);
    //       const response = await axios.post("http://localhost:8000/shareLink", {
    //         linkTitle : title,
    //         linkUrl : link,
    //       });
    //       console.log(response.data); // Assuming the API sends back some data on success
    //     } catch (error) {
    //       console.error(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    // const Submit = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:3000/shareLink", {title, link})
    //     .then(result => console.log(result))
    //     .catch(err => console.log(err))
    // }

    return (
        <div className=" w-[600px] fixed left-[50%] translate-x-[-50%] z-10 top-[120px] text-white">
            <div className="p-[40px] rounded-[20px] bg-[#2A2F35]">
                <h1 className="mb-[20px] font-medium text-[30px]">Share Link</h1>
                <form onSubmit={handleSubmit} className="">
                    <label htmlFor="title" className="inline-block mb-[10px] text-[20px] font-medium">Title</label><br />
                    <input required onChange={(e) => setTitle(e.target.value)} type="text" id="title" className="w-full pl-5 mx-auto mb-[20px] h-[40px] rounded-[22px] bg-[#202429] inline-block border border-solid border-[#3F64EC] focus:outline-none" />
                    <label htmlFor="link" className="inline-block mb-[10px] text-[20px] font-medium">Link</label><br />
                    <input required onChange={(e) => setLink(e.target.value)} type="text" id="link" className="w-full pl-5 mx-auto mb-[20px] h-[40px] rounded-[22px] bg-[#202429] inline-block border border-solid border-[#3F64EC] focus:outline-none" />
                    
                    <button type="submit" disabled={loading} className="bg-[#3F64EC] rounded-[22px] w-[80px] h-[35px]">
                    {loading ? "Saving..." : "Save"}
                    </button>
                </form>


                <h1 className="mt-[20px] mb-[20px] font-semibold">Insert Image</h1>

                <div className=" flex justify-between items-center">
                    <button className="font-semibold flex gap-4 hover:bg-transparent hover:border border-solid  border-blue-500 items-center py-[10px] px-[15px] justify-center bg-[#3F64EC] rounded-[22px]"> 
                        Upload image
                        <HiArrowUpTray className="text-[20px]"/>
                    </button>
                    <div className="flex gap-6">
                        {/* <button className="bg-[#3F64EC] rounded-[22px] w-[80px] h-[35px]">Save</button> */}
                        <button onClick={onDisappear} className="bg-[#4C4B4B] rounded-[22px] w-[80px] h-[35px]" >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
