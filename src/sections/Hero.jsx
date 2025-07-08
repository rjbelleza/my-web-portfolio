import Tagline from "../components/typography/Tagline.jsx";
import Avatar from "../components/avatar/Avatar.jsx";
import HeroRibbon from "../components/ribbons/HeroRibbon.jsx";

const Hero = () => {

    return (
        <div className="w-full">
            <div className="flex items-center px-25">
                <Tagline />
                <Avatar />
            </div>
            <HeroRibbon />
        </div>
    );
}

export default Hero;

