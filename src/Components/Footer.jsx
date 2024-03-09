export default function Footer() {
    return(
        <>
            <footer className=" p-10 bg-black text-white">
                <div className="flex justify-between mb-2">
                    <h4>LOOPSTUDIOS</h4>
                    <ul className="flex space-x-3">
                        <li>fb</li>
                        <li>twt</li>
                        <li>lkn</li>
                        <li>insta</li>
                    </ul>
                </div>
                <div className="flex justify-between text-xs">
                    <ul className="flex space-x-3">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                    <p className=" text-slate-400"> &copy; Loopstudios All rights reserved </p>
                </div>
                
            </footer>
        </>
    )
}