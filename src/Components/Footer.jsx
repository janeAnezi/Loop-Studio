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
                        <a href="https://web.facebook.com/?_rdc=1&_rdr"><AiOutlineFacebook size={20}/></a>
                        <a href="https://twitter.com/i/flow/login"><AiOutlineTwitter size={20}/></a>
                        <a href="https://google.com"><AiOutlineIe size={20}/></a>
                        <a href="https://www.instagram.com/"><AiOutlineInstagram size={20}/></a>
                        
                    </ul>
                </div>
                <div className="flex justify-between text-xs">
                    <ul className="flex space-x-3">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                    </ul>
                    <p className=" text-slate-400"> &copy; Loopstudios All rights reserved </p>
                </div>
                
            </footer>
        </>
    )
}