import { useLocation } from "react-router";

export function NavBtnFocused(path) {
    const CurrentLocation = useLocation().pathname;

    if (path === CurrentLocation) {
        return true;
    }
}

