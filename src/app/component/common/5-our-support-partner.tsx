function OurSupportPartner (){
    return <section className="flex my-20 mx-36 gap-40 items-center">
        <div>
            <h1 className="mb-4 font-semibold text-5xl">How we support our <br /> pratner over the <br /> world</h1>
            <p className="mb-7 font-medium text-base text-[#A6A6A6]">SaaS become a common delivery model for many business application, <br /> including office software, messaging software, payroll processing <br /> software, DBMS software, management software</p>

            <div className="flex items-center">
                <div className="mr-16">
                    <img src="./star4.9.jpg" alt="" />
                    <h5 className="my-2 text-[#191A15]"><span className="font-bold text-lg">4.9</span> <span className="text-lg font-normal">/</span> <span className="text-lg font-medium">5 rating</span></h5>
                    <p className="text-[#A6A6A6] text-lg font-bold">databricks</p>
                </div>
                <div>
                    <img src="./star4.8.jpg" alt="" />
                    <h5 className="my-2 text-[#191A15]"><span className="font-bold text-lg">4.8</span> <span className="text-lg font-normal">/</span> <span className="text-lg font-medium">5 rating</span></h5>
                    <p className="text-[#A6A6A6] text-lg font-bold">Chainalysis</p>
                </div>
            </div>
        </div>

        <div>
            {/* 1st */}
            <div className="mb-8 gap-5">
                <img src="./activity 1.png" alt="" />
                <div>
                    <h3 className="text-3xl font-bold mb-3">Publishing</h3>
                    <p className="text-[#A6A6A6]">Plan, collaborate, and publishing your contetn <br /> that drivees meaningful engagement and growth <br /> for your barnd</p>
                </div>
            </div>

            {/* 2nd */}
            <div className="mb-8 gap-5">
                <img src="./pie-chart 1.svg" alt="" />
                <div>
                    <h3 className="text-3xl font-bold mb-3">Publishing</h3>
                    <p className="text-[#A6A6A6]">Analyze your performance and create goegeous <br /> report</p>
                </div>
            </div>

            {/* 3rd */}
            <div className="mb-8 gap-5">
                <img src="./Vector.svg" alt="" />
                <div>
                    <h3 className="text-3xl font-bold mb-3">Engagement</h3>
                    <p className="text-[#A6A6A6]">Quiuckly navigate you anda engage with your <br /> adience</p>
                </div>
            </div>
        </div>

    </section>;
}

export default OurSupportPartner;