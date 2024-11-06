import React, { useState } from 'react';
import './ContactInfoFooter.css';

const ContactInfoFooter = () => {
    const [message, setMessage] = useState('');

    const contactDetails = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff4506e50563f360ab12cfb90118c8c9dd943c68000399fc780b48965608b1b1?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "+966585673359", alt: "Phone icon" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43918da014f64be1f93870132a73479cf1ed1abe73119cac08d7f2578a47c121?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a", text: "support@chancely.com", alt: "Email icon" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Message submitted:', message);
        setMessage('');
    };

    return (
        <main className='contactSection'>
            <div className="contentWrapper">
                <section className='contactInfoSection'>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0217b733d431d736ebc051338f1003195d7b2544aacb64b7ad1ceb726f99273b?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="KFUPM campus" className='campusImage' />
                    <div className='infoContainer'>
                        <address className='address'>
                            KFUPM, Dhahran <br /> Saudi Arabia
                        </address>
                        {contactDetails.map((detail, index) => (
                            <div key={index} className='contactDetail'>
                                <img src={detail.icon} alt={detail.alt} className='contactIcon' />
                                <span className='contactText'>{detail.text}</span>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='messageFormSection'>
                    <h2 className='formTitle'>
                        Have anything to say? <br /> Leave us a message
                    </h2>
                    <form className='messageForm' onSubmit={handleSubmit}>
                        <label htmlFor="messageInput" className='visuallyHidden'></label>
                        <input
                            type="text"
                            id="messageInput"
                            className='messageInput'
                            placeholder="Write your thoughts..."
                            aria-label="Write your thoughts"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit" className='submitButton' aria-label="Send message">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbe486f1-3ac6-4122-9c56-a0be7b5d045c?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="" className='sendIcon' />
                        </button>
                    </form>
                    <div className='socialFollow'>
                        <p className='followText'>Follow Us on</p>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb5d36b01659ffd6b6137d2131361aa1e201f44736d1fc46fb5b9decf24639f?placeholderIfAbsent=true&apiKey=55c24d5bc077452fbbc72abbf22e994a" alt="Social media icons" className='socialIcons' />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ContactInfoFooter;