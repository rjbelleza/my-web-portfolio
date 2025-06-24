import { clsx } from "clsx";
import { NavBtnActive } from "../lib/activeState.js";
import { navs } from "../lib/definitions.jsx";

const Navbar = () => {

    return (
        <div className="flex relative gap-5 bg-primary md:gap-15 items-center md:px-30 py-3 rounded-full">
            <div className="md:h-[35px] md:w-[35px] absolute left-2 bg-primary-foreground  rounded-full">

            </div>
            {navs.map((nav, index) => (
                <div key={index}>
                    <a
                        href={nav.path}
                        className={clsx('text-[15px] text-primary-foreground hover:text-secondary font-medium hidden md:block transition-all ease-in-out',
                            {'border-b-2 border-secondary text-secondary': NavBtnActive(nav.path)}
                        )}
                    >
                        {nav.name}
                    </a>
                    <a
                        href={nav.path}
                        className="block md:hidden bg-white border-2 border-primary-foreground rounded-full p-2"
                    >
                        {nav.icon}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Navbar;
