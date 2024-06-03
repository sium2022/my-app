import Image from 'next/image'

function Footer2 (){
    return <section className="pt-24 pb-20 px-4 lg:px-36 bg-[#F5F7FA] flex flex-col lg:flex-row gap-24">
    <div>
        <img src="./header-logo.png" alt="" />

        <p className="font-semibold	text-lg mt-5">Launch your own Software As <br /> A Service Application with <br /> Flex Solution
        </p>
    </div>

    <div className="gap-5 flex flex-col font-medium">
        <p className="mb-2 text-[#FF8166]"><a href="">Products</a></p>
        <p><a href="">Features</a></p>
        <p><a href="">Solutions</a></p>
        <p><a href="">Pricing</a></p>
        <p><a href="">Tutorials</a></p>
        <p><a href="">Updates</a></p>
    </div>

    <div className="gap-5 flex flex-col font-medium">
        <p className="mb-2 text-[#FF8166]"><a href="">Remaining</a></p>
        <p><a href="">Blog</a></p>
        <p><a href="">Newsletter</a></p>
        <p><a href="">Help Center</a></p>
        <p><a href="">Careers</a></p>
        <p><a href="">Support</a></p>
    </div>

    <div>
        <p className="font-medium text-[#FF8166] mb-6"><a href="">Newsletter</a></p>

        <div className="gap-2">
            <form className="flex flex-col lg:flex-row gap-4 items-center" action="">
                <input className="h-10 border-none px-2" type="email" placeholder="Your email" />
                <p className="rounded-full border-none bg-[#FF8B73] text-white px-4 py-3 font-medium"><a href="">Subscribe</a></p>
            </form>
        </div>
    </div>
</section>;
}

export default Footer2;