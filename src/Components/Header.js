import React from 'react'
import Headroom from "react-headroom";
import "../Styles/header.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ offset: 0});


function Header() {
    return (
        <Headroom>
            <header className="header" data-aos="fade-up">
                <span className="header_title">Omkar </span>
                <ul className="List_items" >
                    <li> <a href="#skills">Skills</a></li>
                    <li><a href="#proficiency"> Proficiency</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </header>
        </Headroom>
    )
}

export default Header;
