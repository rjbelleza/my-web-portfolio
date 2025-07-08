import Header from "../layouts/Header.jsx";
import Hero from "../sections/Hero.jsx";

const Home = () => {

    return (
        <div className="flex flex-col justify-center bg-background bg-center bg-cover h-fit overflow-y-auto overflow-x-hidden">
            <Header />
            <Hero />
        </div>
    );
}

export default Home;
