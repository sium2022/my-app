function SteveJobs() {
    return <div className="flex items-center gap-20">
        <div>
            <img src="./steve-kaku.jpg" alt="" />
        </div>

        <div>
            <h1 className="mb-4 font-semibold text-5xl">Designing user <br /> interface aesthetics <br /> that sync  with the
             <br /> natural environment</h1>

            <hr className="w-72 h-2 bg-[#FF8B73]" />

            <p className="mt-10 mb-6 font-medium text-lg text-[#666666]">Let's make your work more organize and easily using the Taskio <br /> Dashboard with many of the latest featuresin managing work <br /> every day.</p>

            <div className="mt-7 flex items-center gap-5">
                <img className="rounded-full size-16" src="./review.png" alt="" />
                <div>
                    <p className="text-sm font-semibold text-[#191A15]">Frankie Sullivan</p>
                    <p className="text-sm font-semibold text-[#AFAFAF]">Head Manager, ATE</p>
                </div>
            </div>
        </div>
    </div>;
}

export default SteveJobs;