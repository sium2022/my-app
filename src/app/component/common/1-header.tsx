function Header() {
    return <section className="h-20 bg-slate-100 lg:flex items-center gap-x-60">
        <div className="ml-36">
            <img src="./logo1.png" alt="" />
        </div>

        <div className="text-base font-normal lg:flex lg:gap-x-8">
            <h5 className="text-orange-500 border-b-4 border-orange-500">Home</h5>
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