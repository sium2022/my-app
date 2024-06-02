function AboutUs() {
    return <section className="flex flex-col lg:flex-row gap-36 items-center justify-items-center lg:mx-36 py-16 px-6">
        <div>
            <div>
                <img className="w-full" src="./about-us.jpg" alt="" />
            </div>
        </div>

        <div>
            <h1 className="text-[#191A15] font-bold text-6xl mb-14">ABOUT <br /> US</h1>

            <div className="flex gap-16">
                <p>Let's make your work more organize and easily <br /> using the Taskio Dashboard with many of the <br /> latest featuresin managing work every day. Let's <br /> make your work more organize and easily using <br /> the Taskio Dashboard with many of the latest <br /> featuresin managing work every day. Let's make <br /> your work more organize and easily using the <br /> Taskio Dashboard with many of the latest <br /> featuresin managing work every day.</p>

                <div className="gap-5 items-baseline">
                    <img src="./twitter.jpg" alt="" />
                    <img src="./linkedin.jpg" alt="" />
                    <img src="./facebook.jpg" alt="" />
                    <img src="./instagram.jpg" alt="" />
                </div>
            </div>

            <p className="mt-5">Let's make your work more organize and easily <br /> using the Taskio Dashboard with many of the <br /> latest featuresin managing work every day.</p>
        </div>
    </section>;
}

export default AboutUs;