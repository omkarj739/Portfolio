import React from 'react'
import git from "../Images/git.png"
import insta from "../Images/insta.png"
import facebook from "../Images/facebook.png" 
import RoomIcon from '@material-ui/icons/Room';
import  "../Styles/contact.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ offset: 290});

function contact() {
    return (
        <div className="contact" id="contact" data-aos="fade-up">
            <h1>Reach Out To Me</h1>
            <h3 className="contact_para">Let's Create Next Experience Together</h3>
            <h4 className="map" data-aos="fade-right"><span><RoomIcon/></span>Pune,Maharashtra</h4>
            <div className="icon" >
                <div className="git" >
                    <a href="www.github.com"><img src={git} alt=""/></a>
                    <p>Github</p>
                </div>
                <div className="facebook">
                    <a href="www.facebook.com"><img src={facebook} alt=""/></a>
                    <p>Facebook</p>
                </div>
                <div className="insta">
                    <a href="www.instagram.com"><img src={insta} alt=""/></a>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default contact;
