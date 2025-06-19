import { useDarkMode } from "../contexts/DarkModeContext";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <button 
            onClick={toggleDarkMode}
            className="cursor-pointer"
        >
            {!isDark ? (
                <Moon color="skyblue" />
            ) : (
                <Sun color="skyblue" />
            )}
        </button>
    );
}

export default DarkModeToggle;
