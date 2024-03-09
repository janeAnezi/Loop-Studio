export default function Product() {
    return(
        <>
            <div className="mx-40 mb-40">
                <div className="flex justify-between mb-10">
                    <h4>OUR CREATIONS</h4>
                    <button className="border px-3 text-xs tracking-wide">SEE ALL</button>
                </div>
                <div class="grid grid-cols-4 gap-4">
                    <div className="relative">
                        <img src="./src/assets/images/desktop/image-deep-earth.jpg" alt="Earth image" />
                        <div className="absolute bottom-3 text-xl text-slate-400 w-24 pl-10">DEEP EARTH</div>
                    </div>
                    <div className="relative">
                        <img src="./src/assets/images/desktop/image-night-arcade.jpg" alt="Night arcade image" />
                        <div className="absolute bottom-3 text-xl text-slate-400 w-24 pl-10">NIGHT ARCADE</div>
                    </div>
                    <div className="relative">
                        <img src="./src/assets/images/desktop/image-soccer-team.jpg" alt="Night arcade image" />
                        <div className="absolute bottom-3 text-xl text-slate-400 w-24 pl-10">SOCCER TEAMVR</div>
                    </div>
                    <div className="relative">
                        <img src="./src/assets/images/desktop/image-grid.jpg" alt="Car image" />
                        <div className="absolute bottom-3 text-xl text-slate-400 w-24 pl-10">THE GRID</div>
                    </div>
                    <div className="relative">
                        <img src="./src/assets/images/desktop/image-from-above.jpg" alt="Night arcade image" />
                        <div className="absolute bottom-3 text-xl text-slate-400 w-24 pl-10">FROMUP ABOVE VR</div>
                    </div>
                    <div className="relative">
                        <img src="./src/assets/images/desktop/image-pocket-borealis.jpg" alt="Night arcade image" />
                        <div className="absolute bottom-3 text-xl text-slate-400 w-24 pl-10">POCKET BOREALIS</div>
                    </div>
                    <div className="relative">
                        <img src="./src/assets/images/desktop/image-curiosity.jpg" alt="Night arcade image" />
                        <div className="absolute bottom-3 text-xl text-slate-400 w-24 pl-10">THE CURIOSITY</div>
                    </div>
                    <div className="relative">
                        <img src="./src/assets/images/desktop/image-fisheye.jpg" alt="Night arcade image" />
                        <div className="absolute bottom-3 text-xl text-slate-500 w-24 pl-10">MAKEIT FISHEYE</div>
                    </div>
                
                </div>
            </div>
        </>
    )
}