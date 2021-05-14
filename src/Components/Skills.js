import React ,{useEffect,useRef} from 'react'
import lottie from "lottie-web"
import Skills_image from './Skills_image'
import "../Styles/skills.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ offset: 75});

function Skills() {

    const container = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            rendrer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../json/development_1.json')
        })
    },[])

    return (
        <div className="skills" id="skills" data-aos="fade-up">
            <div className="skills_right"  data-aos="fade-right">
                <h1 className="skills_title">What I do
            <br />
                    <span className="skills_para">CRAZY  WEB  DEVELOPER</span>
                </h1>
                <br />
                <Skills_image />
            </div>
            <div className="skills_left" data-aos="fade-left">
                <div className="container" ref={container}></div>
            </div>
        </div>
    )
}

export default Skills;
