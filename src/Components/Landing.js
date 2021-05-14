import React ,{useEffect,useRef} from 'react'
import lottie from "lottie-web"
import "../Styles/landing.css";


function Landing() {
    const container = useRef(null);
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            rendrer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('../json/laptop.json')
        })
    },[])
    return (
        <div className="Landing">
            <div className="landing_left">
                <h1 className="landing_title"> Hi  all , I'm Omkar
              
                    <p className="landing_para">A passionate About Full Stack Software Developer
                    of building Web-Apps and Mobile applications with JavaScript / React JS / Redux .</p>
                    <div className="button">
                        CONTACT ME
                    </div>
                </h1>
            </div>
            <div className="landing_right">
            <div className="land_animation" ref={container}></div>
            </div>
        </div>
    )
}

export default Landing;
