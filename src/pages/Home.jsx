import Header from "../layouts/Header.jsx";
import Hero from "../sections/Hero.jsx";

const Home = () => {

    return (
        <div className="flex flex-col justify-center bg-background bg-center bg-cover h-screen py-3 px-5">
            <Header />
            <Hero />
        </div>
    );
}

export default Home;
