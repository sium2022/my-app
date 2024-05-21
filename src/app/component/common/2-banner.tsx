function Banner () {
    return <section className="bg-white px-36 py-20 flex gap-x-24">
        <div>
            <h1 className="my-7 font-bold text-6xl">We’re here to <br /> Increase your <br /> Productivity</h1>

            <p className="my-14 text-lg font-normal text-gray-500">Let's make your work more organize and easily using <br /> the Taskio Dashboard with many of the latest <br /> featuresin managing work every day.</p>

            {/* <div>
                Here is a curved line
            </div> */}

            <p className="border-solid rounded-full bg-orange-600 text-white font-medium text-lg py-5 text-center">Contact Us</p>
        </div>

        <div>
            <img src="./Group 1.png" alt="" />
        </div>
    </section>;
}

export default Banner;