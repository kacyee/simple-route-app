import React from 'react';

import avatar from '../../assets/avatar.jpg';
import { MdAccountCircle } from "react-icons/md";
import { FaImages } from 'react-icons/fa';
import './styles.scss';
import { Link } from 'react-router-dom';
export const Header = () => {
return (
    <nav className="Header">
        <div className="background">
        </div>
        <div className="navigation-bar">
            <div className="avatar"><img src={avatar} className="avatar-image" alt="Avatar"/></div>
            <div className="buttons">
                <Link to="/"><MdAccountCircle size="40" className="icon" /></Link>
                <Link to="/gallery"><FaImages size="40" className="icon" /></Link>
            </div>
        </div>
    </nav>
);
}
export default Header;