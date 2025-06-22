import DarkModeToggle from "./DarkModeToggle.jsx";
import { clsx } from "clsx";
import {NavBtnFocused} from "../lib/OnFocus.js";

const Navbar = () => {
    const navs = [
        {name: 'Home', path: '/'},
        {name: 'About Me', path: '/about'},
        {name: 'Projects', path: '/projects'},
        {name: 'Contact', path: '/contact'}
    ];

    return (
        <div className="flex gap-15 items-center px-5 py-2">
            {navs.map((nav, index) => (
                <a
                    href="#"
                    key={index}
                    className={clsx('text-[15px] font-medium',
                        {'border-b-2': NavBtnFocused(nav.path)}
                    )}
                >
                    {nav.name}
                </a>
            ))}
        </div>
    );
}

export default Navbar;
