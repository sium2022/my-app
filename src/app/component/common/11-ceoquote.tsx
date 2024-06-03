import Image from 'next/image'

function CeoQuote() {
    return <section className="my-36 px-4 lg:mx-60 flex flex-col">
        <p className="text-2xl lg:text-5xl font-semibold text-center mb-16">The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.</p>

        <div className="text-center">

            <img className="items-center mx-auto rounded-full" src="./ceoquote.jpg" alt="" />

            <p className="mt-6 mb-2 font-semibold text-2xl">Darren Dunlap</p>
            <p className="text-[#666666] font-medium text-lg">CEO & Founder at Flex.co</p>
        </div>
    </section>;
}

export default CeoQuote;