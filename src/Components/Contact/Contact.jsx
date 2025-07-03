import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "86860c03-37df-46af-82ac-6b133643be14");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message)
            event.target.reset();
        }
    };



    return (
        <div id='contact' className='contact'>
            <div className="contact-title"><h1>
                Get in touch
            </h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take a new project , So i feel free.... </p>
                    <div className="contact-details">
                        <div className="contact-detail"><img src={mail_icon} /> <p>Sauravkumarjamui2003@gmail.com</p></div>
                        <div className="contact-detail"><img src={call_icon} /> <p>+91 9898989800</p></div>
                        <div className="contact-detail"><img src={location_icon} /><p>UP ,India</p> </div>


                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>

                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name ' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your Email ' name='email' />
                    <label htmlFor="">Write your mail here </label>
                    <textarea name="message" rows='8' placeholder='Enter the message' ></textarea>
                    <button type="submit" className='contact-submit'>Submit</button>
                </form>

            </div>


        </div>
    )
}

export default Contact