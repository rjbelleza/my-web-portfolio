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
                <Moon className="text-muted-foreground" />
            ) : (
                <Sun className="text-muted-foreground" />
            )}
        </button>
    );
}

export default DarkModeToggle;
