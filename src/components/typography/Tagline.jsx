import PortfolioBtn from "../buttons/PortfolioBtn.jsx";

const Tagline = () => {

    return (
        <div className="w-full text-primary space-y-5 px-5">
            <p className="text-2xl">
                Hello There!
            </p>

            <p className="text-4xl font-medium text-primary">
                I'm
                <span className="text-secondary italic font-normal m-2">
                    Rj Belleza,
                </span><br/>
                Aspiring Front-End Developer passionate about turning designs into real websites.
            </p>

            <p className="text-md">
                <span className="text-primary-foreground font-medium mr-2">
                    Fun fact:
                </span>
                I love building things from scratch and debugging weird bugs late at night.
            </p>

            <div className="flex justify-center w-full">
                <PortfolioBtn />
            </div>
        </div>
    );
}

export default Tagline;
