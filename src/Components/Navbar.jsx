import { FaAlignJustify } from "react-icons/fa";

export default function Navbar() {
    return(
        <>
            <nav className="flex justify-between p-10 w-full">
                <h4><a href="#">LOOPSTUDIOS</a></h4>
                <FaAlignJustify size={32}/>
                <ul className="flex space-x-3 max-[900px]:hidden">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
        </>
    )
}