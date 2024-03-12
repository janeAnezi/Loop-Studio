import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
    return(
        <>
            <nav className="flex justify-between p-10 w-full">
                <h4><a href="#">LOOPSTUDIOS</a></h4>
                <div>
                   <div id="toggle">
                        <FaBars size={32}/> 
                        <FaTimes size={32} className="hidden"/>
                    </div>
                    <ul className="flex space-x-3 max-[600px]:hidden ">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                
            </nav>
        </>
    )
}