export default function Navbar() {
    return(
        <>
            <nav className="flex justify-between p-10">
                <h4><a href="#">LOOPSTUDIOS</a></h4>
                <ul className="flex space-x-3">
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