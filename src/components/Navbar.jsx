
const Navbar = () => {
    const navs = [
        'Home',
        'About Me',
        'Works',
        'Contact'
    ];

    return (
        <div className="flex justify-around items-center h-[45px] w-[50%] dark:bg-foreground rounded-full dark:text-primary-foreground">
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
