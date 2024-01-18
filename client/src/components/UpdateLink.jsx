import { HiArrowUpTray } from "react-icons/hi2";
import "../index.css";
import { useState, useEffect } from "react";
import axios from "axios";


export function UpdateLink({onUpdate, linkId}) {
    
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        if (linkId) {
          // Fetch the link data when the component mounts
          axios.get(`http:localhost:8000/getLink/${linkId}`)
            .then(response => {
              const { linkTitle, linkUrl } = response.data;
              setTitle(linkTitle);
              setLink(linkUrl);
            })
            .catch(error => {
              console.error('Error fetching link data:', error);
            });
        }
      }, [linkId]);



      // Inside your UpdateLink component
const handleUpdate = () => {
    // Make a PUT request to update the link
    if (linkId) {
      axios.put(`http:localhost:8000/updateLink/${linkId}`, { linkTitle: title, linkUrl: link })
        .then(response => {
          console.log('Link updated successfully:', response.data);
          onUpdate(); // Close the popup or perform any other action on update
        })
        .catch(error => {
          console.error('Error updating link:', error);
          console.error('Error details:', error.response); // Log the response details
        });
    } else {
      console.error('No link ID provided for update');
    }
  };
  
        
    return (
        <>
            <div className="overlay" />
            <div className="w-[600px] fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] z-10">
                <div className="p-[40px] rounded-[20px] bg-[#2A2F35]">
                    <h1 className="mb-[20px] font-medium text-[30px]">Update Link</h1>
                    <form onSubmit={handleUpdate} className="">
                        <label htmlFor="title" className="inline-block mb-[10px] text-[20px] font-medium">Title</label><br />
                        <input 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            type="text" id="title" 
                            className="w-full pl-5 mx-auto mb-[20px] h-[40px] rounded-[10px] bg-[#202429] inline-block border border-solid border-[#3F64EC] focus:outline-none" 
                        />
                        <label htmlFor="link" className="inline-block mb-[10px] text-[20px] font-medium">Link</label><br />
                        <input 
                            value={link} 
                            onChange={(e) => setLink(e.target.value)} 
                            type="text" 
                            id="link" 
                            className="w-full pl-5 mx-auto mb-[20px] h-[40px] rounded-[10px] bg-[#202429] inline-block border border-solid border-[#3F64EC] focus:outline-none" 
                        />

                        <button type="submit">Update Link</button>
                    </form>
                    <h1 className="mt-[20px] mb-[20px] font-semibold">Insert Image</h1>
                    <div className=" flex justify-between items-center">
                        <button className="font-semibold flex gap-4 hover:bg-transparent hover:border border-solid  border-blue-500 items-center py-[10px] px-[15px] justify-center bg-[#3F64EC] rounded-[22px]">
                            Upload image
                            <HiArrowUpTray className="text-[20px]"/>
                        </button>
                        <div className="flex gap-6">
                            {/* <button className="bg-[#3F64EC] rounded-[22px] w-[80px] h-[35px]">Save</button> */}
                            <button onClick={onUpdate} className="bg-[#4C4B4B] rounded-[22px] w-[80px] h-[35px]" >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}