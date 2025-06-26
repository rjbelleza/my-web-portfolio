import { clsx } from "clsx";
import { NavBtnActive } from "../../lib/activeState.js";
import { navs } from "../../lib/definitions.jsx";

const Navbar = () => {

    return (
        <div className="flex relative gap-5 w-[200px] h-[45px] md:h-fit md:w-fit bg-primary md:gap-15 justify-center items-center md:px-30 py-3 rounded-full">
            <div className="md:h-[35px] md:w-[35px] absolute left-2 bg-primary-foreground rounded-full">

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

                    {/* Change to icons for smaller screens */}
                    <a
                        href={nav.path}
                        className={clsx('flex justify-center items-center md:hidden text-secondary h-[30px] w-[30px] rounded-full transition-all ease-in-out',
                            {'bg-secondary !text-primary': NavBtnActive(nav.path)}
                        )}
                    >
                        {nav.icon}
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Navbar;
