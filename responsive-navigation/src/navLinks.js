import { AiFillHome } from 'react-icons/ai';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { GoMegaphone } from 'react-icons/go';
import { IoMdBonfire } from 'react-icons/io';
import { MdBusinessCenter } from 'react-icons/md';

export const navLinks = [
    {
        text: 'Home',
        path: '/',
        icon: <AiFillHome className="icon" />
    },
    {
        text: 'Contact',
        path: '/contact',
        icon: <GoMegaphone className="icon" />
    },
    {
        text: 'Blog',
        path: '/blog',
        icon: <IoMdBonfire className="icon" />
    },
    {
        text: 'About',
        path: '/about',
        icon: <MdBusinessCenter className="icon" />
    },
    {
        text: 'Portfolio',
        path: '/portfolio',
        icon: <BsFillBriefcaseFill className="icon" />
    },
];