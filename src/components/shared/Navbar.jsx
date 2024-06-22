const Navbar = () => {
    const links = (
        <>
            <li className="hover:text-[#0FA4AF] duration-300"><a href="#about">About</a></li>
            <li className="hover:text-[#0FA4AF] duration-300"><a href="#education">Education</a></li>
            <li className="hover:text-[#0FA4AF] duration-300"><a href="#skills">Skill</a></li>
            <li className="hover:text-[#0FA4AF] duration-300"><a href="#projects">Project</a></li>
            <li className="hover:text-[#0FA4AF] duration-300"><a href="#contact">Contact</a></li>
        </>
    );

    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar bg-transparent px-6 fixed">
                <div className="navbar-start flex items-center">
                    <div className="md:text-2xl font-bold text-white flex">
                        <h3 className="text-[#0FA4AF]">Ashikur Rahman</h3>
                        <span className="hidden sm:inline-block">| Web Developer</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
