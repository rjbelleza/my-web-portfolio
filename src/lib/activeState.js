import { useLocation } from "react-router";

export function NavBtnActive(path) {
    const CurrentLocation = useLocation().pathname;

    if (path === CurrentLocation) {
        return true;
    }
}

