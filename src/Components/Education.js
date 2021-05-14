import React from 'react'
import edu_logo from "../Images/edu_logo.webp"
import "../Styles/education.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ offset: 300});

function Education() {
    return (
        <div className="education" id="education" data-aos="fade-up">
            <h1>Education</h1>
            <div className="education_container" data-aos="fade-up">
                <img className="education_img" src={edu_logo} alt="images" />
                <div className="education_info" >
                    <h3>H.V.Desai College , Pune </h3>
                    <h4>Bachelor of Science in Computer Science</h4>
                    <h5>July 2016 - December 2019</h5>
                </div>
            </div>
        </div>
    )
}

export default Education;
