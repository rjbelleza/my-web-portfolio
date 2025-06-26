import AvatarTag from "../tags/AvatarTag.jsx";

const Avatar = () => {

    return (
        <div className="relative flex justify-center w-full px-5">
            <img
                src="src/assets/blob/blob.svg"
                alt="blob"
                className="h-150 w-150 animate-pulse"
            />
            <AvatarTag
                theme="dark"
                text="UI/UX Design"
                position="bottom-30 left-20"
            />
            <AvatarTag
                theme="light"
                text="Dynamic Websites"
                position="right-5 bottom-50"
            />
        </div>
    );
}

export default Avatar;
