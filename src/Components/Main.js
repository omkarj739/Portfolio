import React from 'react'
import Header from "./Header"
import Landing from './Landing'
import Skills from './Skills'
import Proficiency from "./Proficiency"
import Education from './Education'
import Project from './Project'
import Contact from './contact'
import Footer from './Footer'


function Main() {
    return (
        <div className="main">
                <Header />
                <Landing/>
                <Skills />
                <Proficiency />
                <Education />
                <Project />
                <Contact/>
                <Footer/>
        </div>
    )
}

export default Main;
