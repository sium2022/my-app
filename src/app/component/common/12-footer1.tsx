function Footer1() {
    return <section className="flex">
        <div className="lg:w-2/5 bg-[#F5F7FA] pb-10 pt-20 pr-18 pl-24">
            <p className="text-[#666666] text-left">Say something to start a live chat!</p>

            <div className="py-24">
                {/* call */}
                <div className="flex flex-row gap-7 ">
                    <img src="./call.jpg" alt="" />
                    <p className="font-normal text-base">+88 017 9100 5974, +88 016 7001 7437</p>
                </div>

                {/* email */}
                <div className="flex flex-row gap-7 my-10">
                    <img src="./email.jpg" alt="" />
                    <p className="font-normal text-base">Baha.Trueengineers@gmail.com</p>
                </div>

                {/* adress */}
                <div className="my-10 flex gap-7">
                    <img className="items-start" src="./map.jpg" alt="" />
                    <div>
                        <p className="font-normal text-base">
                            <span className="font-bold text-[#FF8166]">Head Office:</span> 68/3/C, Zigatola Post <br /> Office Road, Dhaka - 1209
                        </p>

                        <p className="font-normal text-base my-4">
                            <span className="font-bold text-[#FF8166]">Ware House:</span> 3 No Gate, Tannery Industry <br /> Area Hemayetpur, Savar, Dhaka - 1340
                        </p>

                        <p className="font-normal text-base">
                            <span className="font-bold text-[#FF8166]">Lab:</span> YS-12-B, Tannery Industry Area <br /> Hemayetpur, Savar, Dhaka - 1340
                        </p>
                    </div>
                </div>


            </div>

            <div className="gap-5 flex">
                <img src="./twitter.jpg" alt="" />
                <img src="./linkedin.jpg" alt="" />
                <img src="./facebook.jpg" alt="" />
                <img src="./instagram.jpg" alt="" />
            </div>
        </div>

        <div className="pl-20 pr-32 py-10 bg-[#FFF]">
            <form className="my-10" action="">
                <div className="flex">
                    <div className="mr-10 border-b-2">
                        <p>First Name</p>
                        <input type="text" name="name" placeholder="" id="" />
                    </div>

                    <div className="border-b-2">
                        <p>Last Name</p>
                        <input type="text" name="name" placeholder="" id="" />
                    </div>
                </div>

                <div className="flex my-10">
                    <div className="mr-10 border-b-2">
                        <p>Email Address</p>
                        <input type="email" name="email" placeholder="" id="" />
                    </div>

                    <div className="border-b-2">
                        <p>Mobile Number</p>
                        <input type="number" name="number" placeholder="" id="" />
                    </div>
                </div>
            </form>

            <div>
            <fieldset>
                <legend className="font-bold">Select Subject?</legend>

                <input id="draft" className="peer/draft" type="radio" name="status" checked />
                <label htmlFor="draft" className="peer-checked/draft:text-sky-500">Draft</label>

                <input id="published" className="peer/published" type="radio" name="status" />
                <label htmlFor="published" className="peer-checked/published:text-sky-500">Published</label>
            </fieldset>
        </div>
    </div>
    </section >;
}

export default Footer1;