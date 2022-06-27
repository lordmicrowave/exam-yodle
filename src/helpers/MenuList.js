import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Lotus from "../assets/Lotus.jpg";
import Dandelion from "../assets/Dandelion.jpg";
import Snowdrop from "../assets/Snowdrop.jpg";
import Tulip from "../assets/Tulip.jpg";
import Orchid from "../assets/Orchid.jpg";
import Fuchsia from "../assets/Fuchsia.jpg"; 




export const MenuList = [
    {
        name: "Lotus - Net/Web Art",
        image: Lotus,
        price: 50,
        read: <Link to='/net' style={{ color: '#fff1d0' }}>Read More</Link>,
    },
    {
        name: "Dandelion - Design and Aesthetics",
        image: Dandelion,
        price: 50,
        read: <Link to='/design' style={{ color: '#fff1d0' }}>Read More</Link>,
    },
    {
        name: "Snowdrop - Internet, Society and Justice",
        image: Snowdrop,
        price: 50,
        read: <Link to='/justice' style={{ color: '#fff1d0' }}>Read More</Link>,
    },
    {
        name: "Tulip - Self-Reflection",
        image: Tulip,
        price: 75,
        read: <Link to='/reflection' style={{ color: '#fff1d0' }}>Read More</Link>,
    },
    {
        name: "Orchid",
        image: Orchid,
        price: 75,
        read: "Out of Stock"
    },
    {
        name: "Fuchsia",
        image: Fuchsia,
        price: 100,
        read: "Out of Stock"
    }
];
