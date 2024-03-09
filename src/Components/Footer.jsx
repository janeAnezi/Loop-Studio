import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineIe } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
    return(
        <>
            <footer className=" p-10 bg-black text-white">
                <div className="flex justify-between mb-2">
                    <h4>LOOPSTUDIOS</h4>
                    <ul className="flex space-x-3">
                        <AiOutlineFacebook size={20}/>
                        <AiOutlineTwitter size={20}/>
                        <AiOutlineIe size={20}/>
                        <AiOutlineInstagram size={20}/>
                        
                    </ul>
                </div>
                <div className="flex justify-between text-xs">
                    <ul className="flex space-x-3">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                    <p className=" text-slate-400"> &copy; Loopstudios All rights reserved </p>
                </div>
                
            </footer>
        </>
    )
}