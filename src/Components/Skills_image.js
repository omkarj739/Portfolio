import React from 'react'
import html from "../Images/html.png"
import css from "../Images/css.png"
import js from "../Images/js.png"
import react from "../Images/react.png"
import redux from "../Images/redux.png"
import "../Styles/skills.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ offset: 75});


function Skills_image() {
    return (
        <div className="content" data-aos="fade-down">
            <div className="skills_image">
                <div className="skills_image_li_1">
                    <img className="skills_images" src={html} alt="" />
                    <li className="skills_title_html">HTML 5</li>
                </div>
                <div className="skills_image_li_2">
                    <img className="skills_images" src={css} alt="" />
                    <li className="skills_title_css">CSS 3</li>
                </div>
                <div className="skills_image_li_3">
                    <img className="skills_images" src={js} alt="" />
                    <li className="skills_title_js">JS</li>
                </div>
                <div className="skills_image_li_4">
                    <img className="skills_images" src={react} alt="" />
                <li className="skills_title_react">React JS </li>
                </div>
                <div className="skills_image_li_5">
                    <img className="skills_images" src={redux} alt="" />
                    <li className="redux">Redux </li>
                </div>
        </div>
        </div>
    )
};

export default Skills_image;
