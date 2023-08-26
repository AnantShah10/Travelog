import "./index.css";

import { useState } from 'react';

import { Link } from "react-router-dom";

import { MenuItems } from "../Menuitems";

export default function NavBar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLinkClick = () => {
        setClicked(false);
      };

    return (
        <div className="NavbarItems">
            <h1 className="navbar-logo">Travelog</h1>

            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className={item.cName} onClick={handleLinkClick}><i className={item.icon}></i>{item.title}</Link>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}