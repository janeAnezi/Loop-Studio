import React from "react"
export default function Careers() {
    return(
        <>
            <div className=" relative flex ml-40 my-32">
                <div>
                    <img src="./src/assets/images/desktop/image-interactive.jpg" width={500} alt="person with wearing VR machine" />
                </div>
                <div className="inline-block w-[500px] p-10 absolute right-52 bg-white top-32 ">
                    <div className="w-80">
                        <h2 className="pb-2 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">THE HEADER IN INTERACTIVE VR</h2>
                        <p className="text-sm">Creates highly immersive environments that surround users, 
                            making them feel as though they are physically present within
                            the digital space. This immersive experience is achieved through
                            the use of VR headsets.
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}