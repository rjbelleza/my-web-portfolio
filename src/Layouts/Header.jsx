import Navbar from "../components/Navbar.jsx";
import logo from "../../public/logo.png";
import DarkModeToggle from "../components/DarkModeToggle.jsx";

const Header = () => {

    return (
        <div className="flex justify-between items-center w-full h-[60px] px-10">
            <img
                src={logo}
                alt="logo"
                className="w-[50px] h-[50px] rounded-full"
            />
            <Navbar />
        </div>
    );
}

export default Header;
