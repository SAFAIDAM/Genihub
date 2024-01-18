import { useState } from "react";
import { UpdateLink } from "./UpdateLink";


 function ThreeDots({ onClose, linkId }) {

    const [updatePop, setUpdatePop] = useState(false);

    return (
        <>
            {/* {updatePop && <UpdateLink onUpdate={() => setUpdatePop(false)} />} */}
            {updatePop && <UpdateLink onUpdate={() => setUpdatePop(false)} linkId={linkId} />}
            <div className=" absolute top-[70px] right-[24px] w-[198px] h-[180px] flex flex-col justify-center items-center gap-4 rounded-3xl bg-[#222] border border-solid border-[#4C4B4B]">
                <button onClick={() => setUpdatePop(true)} className="flex items-center w-[100px] gap-6">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5724 3.30128L15.1319 1.7417C15.9932 0.88037 17.3898 0.88037 18.2511 1.7417C19.1124 2.60303 19.1124 3.99953 18.2511 4.86086L16.6915 6.42044M13.5724 3.30128L4.41147 12.4622C3.24848 13.6252 2.66696 14.2066 2.27101 14.9152C1.87504 15.6239 1.47665 17.2971 1.0957 18.8971C2.6957 18.5161 4.36892 18.1177 5.07753 17.7217C5.78613 17.3258 6.36763 16.7443 7.53062 15.5814L16.6915 6.42044M13.5724 3.30128L16.6915 6.42044" stroke="#AAAAAA" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Update
                </button>
                <button className="flex items-center w-[100px] gap-6">
                <svg 

                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 22"
                    fill="none"
                    >
                    <path
                    d="M17.3636 4.27246L16.7552 14.2147C16.5997 16.7548 16.522 18.025 15.8917 18.9381C15.58 19.3896 15.1788 19.7706 14.7134 20.0569C13.7722 20.6361 12.5125 20.6361 9.99282 20.6361C7.46996 20.6361 6.2085 20.6361 5.26669 20.0558C4.80107 19.769 4.3997 19.3873 4.08815 18.9351C3.45802 18.0205 3.38199 16.7486 3.22997 14.2049L2.63635 4.27246"
                    stroke="#AAAAAA"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    />
                    <path
                    d="M1 4.27273H19M14.0557 4.27273L13.3731 2.9559C12.9196 2.08118 12.6928 1.64381 12.3017 1.37104C12.215 1.31054 12.1231 1.25671 12.027 1.21011C11.5939 1 11.0741 1 10.0345 1C8.9688 1 8.436 1 7.99568 1.21892C7.8981 1.26744 7.80498 1.32344 7.71729 1.38634C7.32164 1.67016 7.10063 2.12353 6.65861 3.03027L6.05292 4.27273"
                    stroke="#AAAAAA"
                    strokeWidth="0.6"
                    strokeLinecap="round"

                    />
                    </svg>
                    Delete
                </button>
                <hr className="border border-solid border-[#AAA] w-[120px]" />
                <button className="flex items-center w-[100px] gap-6" onClick={ onClose } >
                    <svg width="20" height="20" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5105 1.22363L0.936035 16.7981M0.936035 1.22363L16.5105 16.7981" stroke="#AAAAAA" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Cancel
                </button>
            </div>
        </>
    )
}

export default ThreeDots