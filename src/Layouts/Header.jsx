import Navbar from "../components/Navbar.jsx";

const Header = () => {

    return (
        <div className="fixed justify-center top-0 flex items-center w-full h-[80px] px-10">
            <img
                src="/my-logo.svg"
                alt='My Logo'
                className="fixed left-10 h-[40px] w-[40px] cursor-pointer"
            />
            <Navbar />
        </div>
    );
}

export default Header;
