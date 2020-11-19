import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from 'react-icons/io';

export const MenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reporst',
        path: '/reports',
        icon: <IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoMdHelpCircle />,
        cName: 'nav-text'
    },
]
