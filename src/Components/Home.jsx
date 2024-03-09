import React from "react"
import Navbar from "./Navbar"
export default function Home() {
    return(
        <>
            <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center h-96 text-white ">
                <Navbar />
                <h1 className="text-5xl font-light inline-block w-96 m-10 border border-white p-5">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
            
        </>
    )
}