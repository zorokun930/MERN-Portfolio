import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='hero' className='hero'>
            <img src={profile_img} alt="" />
            <h1>

                <span>I'm Saurav kumar,</span>
                frontend developer based in India
            </h1>
            <p>I am a frontend developer from prayagraj,India with 2 year of experience </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
                </div>
                <div className="hero-resume">My resume</div>
            </div>
        </div >
    )
}

export default Hero