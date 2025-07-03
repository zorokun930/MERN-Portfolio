import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>
                    About Me
                </h1>
                <img src={theme_pattern} alt="" />

            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I specialize in building responsive, user-friendly websites using modern web technologies like HTML, CSS, JavaScript, and frameworks such as React.</p>
                        <p>From design to deployment, I focus on clean code, performance, and a seamless user experience.</p>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                            <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
                            <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                            <div className="about-skill"><p>Next JS</p><hr style={{ width: "50%" }} /></div>



                        </div>


                    </div>

                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>
                            2+
                        </h1>
                        <p>
                            Year Of Experience
                        </p>
                        <hr />

                    </div>
                    <div className="about-achievement">
                        <h1>
                            4+
                        </h1>
                        <p>
                            Project
                        </p>
                        <hr />

                    </div>


                </div>

            </div>

        </div>
    )
}

export default About