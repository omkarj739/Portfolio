import React from 'react'
import Work from './Work';
import "../Styles/project.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({ offset: 310});

function Project() {
    return (
        <div className="project" id="project" data-aos="fade-up">
           <h1 className="project_title">projects</h1>
           <div className="project_div"  data-aos="fade-up-right">
                <a href="https://covid19-tracker-21d5f.web.app/">  
                    <Work  
                        title="Covid-19-Tracker"
                        details="Get Latest updates About Corona Virus" 
                        subDetails="Using React JS + Material UI  " 
                    />
                </a>
                <a href="https://disney-9700a.web.app/">
                    <Work
                        title="Disney + " 
                        details="Using React JS + Redux + Styled Components  " 
                        subDetails="" 
                        />
                </a>
                <a href="https://omkarj739.github.io/one-web-website/">
                    <Work
                        title="Transport" 
                        details=" One page Website Using  HTML + CSS + JS + Fully Responsive Web Page" 
                        subDetails=" " 
                        />
                </a>
           </div>
        </div>
    )
};
export default Project;
