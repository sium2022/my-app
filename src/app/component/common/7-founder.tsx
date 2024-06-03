import Image from 'next/image'

function Founder() {
    return <section className="py-32 px-6 lg:px-36 bg-white gap-16 lg:gap-8 flex flex-col lg:flex-row items-center">
        <div>
            <h1 className="mb-4 font-semibold text-5xl">FOUNDER MASSAGE</h1>

            <hr className="w-72 h-2 bg-[#FF8B73]" />

            <p className="mt-10 mb-6 font-medium text-lg text-[#666666]">Let's make your work more organize and easily using the Taskio <br /> Dashboard with many of the latest featuresin managing work <br /> every day. Let's make your work more organize and easily using <br /> the Taskio Dashboard with many of the latest featuresin <br /> managing work every day. Let's make your work more organize <br /> and easily using the Taskio Dashboard with many of the latest <br /> featuresin managing work every day.</p>

            <p className="font-medium text-lg text-[#666666]">Let's make your work more organize and easily using the Taskio <br /> Dashboard with many of the latest featuresin managing work <br /> every day.</p>

            <div className="mt-7 flex items-center gap-5">
                <img className="rounded-full size-16" src="./review.png" alt="" />
                <div>
                    <p className="text-sm font-semibold text-[#191A15]">Frankie Sullivan</p>
                    <p className="text-sm font-semibold text-[#AFAFAF]">Head Manager, ATE</p>
                </div>
            </div>
        </div>

        <div>
            <img src="./founder.png" alt="" />
        </div>


    </section>;
}

export default Founder;