import DarkModeToggle from "./DarkModeToggle.jsx";

const Navbar = () => {
    const navs = [
        'Home',
        'About Me',
        'Projects',
        'Contact'
    ];

    return (
        <div className="flex gap-15 items-center h-full">
            {navs.map((nav, index) => (
                <a
                    href="#"
                    key={index}
                    className="text-[15px] font-medium"
                >
                    {nav}
                </a>
            ))}
        </div>
    );
}

export default Navbar;
