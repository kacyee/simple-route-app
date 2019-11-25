import React from 'react';

import avatar from '../../assets/avatar.jpg';
import { MdAccountCircle } from "react-icons/md";
import { FaImages } from 'react-icons/fa';
import './styles.scss';
export const Header = () => {
return (
    <nav className="Header">
        <div className="background">
        </div>
        <div className="navigation-bar">
            <div className="avatar"><img src={avatar} className="avatar-image" alt="Avatar"/></div>
            <div className="buttons">
                <MdAccountCircle size="40" className="icon" />
                <FaImages size="40" className="icon" />
            </div>
        </div>
    </nav>
);
}
export default Header;