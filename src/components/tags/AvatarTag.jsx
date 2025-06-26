
const AvatarTag = ({ theme, text, position }) => {

    const colorMap = {
        light: 'bg-secondary text-primary border-2 border-primary',
        dark: 'bg-primary text-secondary border-2 border-secondary'
    };

    return (
        <div className={`absolute ${position} h-fit w-fit ${colorMap[theme]} text-center text-sm font-medium rounded-full py-2 px-8`}>
            {text}
        </div>
    );
}

export default AvatarTag;
