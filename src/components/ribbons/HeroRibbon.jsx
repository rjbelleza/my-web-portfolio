const HeroRibbon = () => {
    
    return (
        <div className="relative w-full h-fit">
            <div className="absolute top-0 -left-2 -rotate-3 w-[105%] h-[85px] bg-primary"></div>
            <div className="absolute top-0 w-full h-[85px] bg-secondary">
                <ul className="flex items-center justify-center gap-50 w-full h-full font-bold text-[22px] text-primary">
                    <li>Client-side</li>
                    <li>Responsive</li>
                    <li>User Interface</li>
                    <li>User Experience</li>
                </ul>
            </div>
        </div>
    );
}

export default HeroRibbon;