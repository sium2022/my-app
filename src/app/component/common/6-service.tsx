function Service (){
    return <section className="bg-[#F5F7FA] py-24 px-36 items-center justify-items-center">
        <div className="flex mb-12">
            <h2 className="font-semibold text-5xl">Our Services <br /> And Sub Brand</h2>
            <p className="ml-12 mr-24 text-[#A6A6A6] font-medium text-lg">We offer a variety of interesting features that you can <br /> help increase yor productivity at work and manage <br /> your projrct esaly</p>
            <p className="bg-[#E56044] text-[#FFFFFF] rounded-lg py-4 px-8 items-center">Contact Us</p>
        </div>

        <div className="flex gap-11">
            {/* 1st card */}
            <div>
                <img src="./service&sub-brand1.png" alt="" />
                <p className="mt-7 font-semibold text-3xl">Real State</p>
                <p className="my-6 text-[#A6A6A6] font-medium text-lg">Here you can handle projects together <br /> with team virtually</p>
                <div className="bg-[#E56044] rounded-full py-2 px-6">
                    <p className="text-[#FFFFFF] text-center">More Details</p>
                </div>
            </div>

            {/* 2nd card */}
            <div>
                <img src="./service&sub-brand2.png" alt="" />
                <p className="mt-7 font-semibold text-3xl">Testing Equipment’s</p>
                <p className="my-6 text-[#A6A6A6] font-medium text-lg">Here you can handle projects together <br /> with team virtually</p>
                <div className="bg-[#E56044] rounded-full py-2 px-6">
                    <p className="text-[#FFFFFF] text-center">More Details</p>
                </div>
            </div>

            {/* 3rd card */}
            <div>
                <img src="./service&sub-brand3.png" alt="" />
                <p className="mt-7 font-semibold text-3xl">Leather Product</p>
                <p className="my-6 text-[#A6A6A6] font-medium text-lg">Here you can handle projects together <br /> with team virtually</p>
                <div className="bg-[#E56044] rounded-full py-2 px-6">
                    <p className="text-[#FFFFFF] text-center">More Details</p>
                </div>
            </div>
        </div>
    </section>;
}

export default Service