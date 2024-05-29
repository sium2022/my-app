function Team (){
    return <section className="py-16 px-52">
        <p className="text-center font-semibold text-5xl text-[#191A15]">Our Team</p>
        <p className="text-center font-medium text-lg text-[#666666] mt-2 mb-14">Let's make your work more organize and easily using</p>

        <div className="flex gap-28">

                    {/* team-1 */}
            <div className="">
                <img src="./team-1.jpg" alt="" />
                <p className="font-semibold text-center text-2xl text-[#FF8B73] mt-8">Jon's Adwar</p>
                <p className="font-medium text-center text-lg my-3">Let's make your work more</p>

                <div className="flex gap-3 justify-center">
                    <img src="./facebook.jpg" alt="" />
                    <img src="./twitter.jpg" alt="" />
                    <img src="./instagram.jpg" alt="" />
                    <img src="./linkedin.jpg" alt="" />
                </div>
            </div>
                    {/* team-2 */}
            <div className="justify-items-center">
                <img src="./team-2.png" alt="" />
                <p className="font-semibold text-center text-2xl text-[#FF8B73] mt-8">Jon's Adwar</p>
                <p className="font-medium text-center text-lg my-3">Let's make your work more</p>

                <div className="flex gap-3 justify-center">
                    <img src="./facebook.jpg" alt="" />
                    <img src="./twitter.jpg" alt="" />
                    <img src="./instagram.jpg" alt="" />
                    <img src="./linkedin.jpg" alt="" />
                </div>
            </div>
                    {/* team-3 */}
            <div className="items-center">
                <img src="./team-3.jpg" alt="" />
                <p className="font-semibold text-2xl text-[#FF8B73] mt-8 text-center">Jon's Adwar</p>
                <p className="font-medium text-center text-lg my-3">Let's make your work more</p>

                <div className="flex gap-3 justify-center">
                    <img src="./facebook.jpg" alt="" />
                    <img src="./twitter.jpg" alt="" />
                    <img src="./instagram.jpg" alt="" />
                    <img src="./linkedin.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>;
}

export default Team;