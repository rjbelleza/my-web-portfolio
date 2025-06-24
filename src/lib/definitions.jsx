import { HouseIcon, BookUserIcon, ClipboardList, Phone } from "lucide-react";

const iconStyles = "";

export const navs = [
    {
        name: 'Home',
        path: '/',
        icon: <HouseIcon
                size={20}
                className={iconStyles}
              />
    },
    {
        name: 'About Me',
        path: '/about',
        icon: <BookUserIcon
                size={20}
                className={iconStyles}
              />
    },
    {
        name: 'Projects',
        path: '/projects',
        icon: <ClipboardList
                size={20}
                className={iconStyles}
              />
    },
    {
        name: 'Contact',
        path: '/contact',
        icon: <Phone
                size={20}
                className={iconStyles}
              />
    }
];
