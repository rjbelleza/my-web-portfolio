import DarkModeToggle from "./DarkModeToggle.jsx";
import { clsx } from "clsx";
import { NavBtnFocused } from "../lib/onFocus.js";
import { navs } from "../lib/definitions.js";

const Navbar = () => {

    return (
        <div className="flex gap-15 items-center px-5 py-2">
            {navs.map((nav, index) => (
                <a
                    href={nav.path}
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
