import React, { useState } from 'react';
import {NavLink} from "react-router-dom";

function Navbar(){
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };
    return <header>
    <h3>FindOnNet</h3>
    <ul className="navmenu" style={{ display: showDropdown ? 'none' : 'flex' }}>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/upcomingProducts">upcoming products</NavLink></li>
    </ul>
    <div className="nav-icon">
        <NavLink to="/orderHistory"><i class='bx bx-user' ></i></NavLink>
        <NavLink to="/addToCart"><i class='bx bx-cart' ></i></NavLink>
        <NavLink to="/categorySelection"><i class='bx bx-search'></i></NavLink>
        <div className="dropdown">
            <div className="bx bx-menu" id="menu-icon" onClick={toggleDropdown}>
                <div className="dropdown-content" style={{ display: showDropdown ? 'block' : 'none' }}>
                <li><NavLink to="/">home</NavLink></li>
                <li><NavLink to="/upcomingProducts">upcoming products</NavLink></li>
                </div>
            </div>
        </div>
    </div>
</header>;
}
export default Navbar;