import Navbar from "../components/NavBar"
import DarkModeToggle from "../components/DarkModeToggle";

const Home = () => {

    return (
        <div className="flex justify-center bg-background bg-center bg-cover h-screen p-5">
            <Navbar />
            <DarkModeToggle />
        </div>
    );
}

export default Home;
