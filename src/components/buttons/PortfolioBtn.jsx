
const PortfolioBtn = () => {

    return (
        <button className="flex justify-between items-center h-12 w-55 bg-secondary rounded-full cursor-pointer p-0.5 pr-2">
            <div className="flex justify-center items-center h-full w-[78%] bg-primary rounded-full">
                <p className="text-sm text-white">
                    View My Portfolio
                </p>
            </div>
            <div className="flex justify-center items-center h-[80%] w-[17%] bg-white rounded-full">
                <img
                    src="src/assets/icons/triangle.png"
                    alt="triangle-icon"
                    className="h-4 w-4 rotate-90"
                />
            </div>
        </button>
    );
}

export default PortfolioBtn;
