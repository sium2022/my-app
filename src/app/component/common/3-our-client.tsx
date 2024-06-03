import Image from 'next/image'

function OurClients() {
    return <section className="bg-[#F5F7FA] h-72 p-2">
        <h2 className="text-center pt-12 pb-2 font-semibold text-4xl text-[#191A15]">Our Clietns</h2>

        <p className="text-center text-base font-normal text-[#717171]">We have been working with some Fortune 500+ clients</p>

        <div className="flex justify-evenly pt-12">
            <Image
                src="/our-client-1.jpg"
                width={50}
                height={50}
                alt="Picture of the author"/>

            <Image
                src="/our-client-2.jpg"
                width={50}
                height={50}
                alt="Picture of the author"/>

            <Image
                src="/our-client-3.jpg"
                width={50}
                height={50}
                alt="Picture of the author"/>

            <Image
                src="/our-client-4.jpg"
                width={50}
                height={50}
                alt="Picture of the author"/>

            <Image
                src="/our-client-5.jpg"
                width={50}
                height={50}
                alt="Picture of the author"/>
                
            <Image
                src="/our-client-6.jpg"
                width={50}
                height={50}
                alt="Picture of the author"/>
        </div>

    </section>;
}

export default OurClients;