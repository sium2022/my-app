function Header() {
    return <section className="lg:h-20 bg-[#F5F7FA] flex items-center justify-around lg:gap-x-60">
        {/* NOTE - justify is not working */}
        <div className="ml-36">
            <img src="./header-logo.png" alt="" />
        </div>

        <div className="text-base font-normal lg:flex lg:gap-x-8">
            <h5 className="text-orange-500 lg:border-b-4 lg:border-orange-500">Home</h5>
            <h5>About Us</h5>
            <h5>Sub Brand</h5>
            <h5>Blog</h5>
        </div>

        <div className="text-sm font-semibold border-solid rounded bg-orange-600 lg:mr-36">
            <h5 className="text-white lg:px-5 py-2.5">Contact Us</h5>
        </div>
    </section>;
}

export default Header;