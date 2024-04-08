import React from 'react';

const About = () => {
  // Component logic
  return (
    <div>
        <div className='jo1'>
        <h1 style={{ fontFamily: 'Oswald'}}>HealthNi</h1>
        </div>

        <p style={{marginLeft:'20px', padding:'10px 5px'}}>Welcome to HealthNi, your ultimate destination for healthy eating choices throughout the day. At HealthNi, we believe that making healthy food choices should be easy and accessible for everyone, no matter how busy life gets. Our mission is to provide you with delicious and nutritious meal options for breakfast, lunch, and dinner, helping you stay on track with your health goals without compromising on taste.</p>
        <h2 className='jo1'>Our Objective</h2>
        <p style={{marginLeft:'20px', padding:'10px 5px'}}>At HealthNi, our objective is simple: to empower individuals to make healthier food choices every day. We understand the challenges of maintaining a balanced diet in today's fast-paced world, and that's why we've curated a selection of wholesome meal options tailored to fit your busy lifestyle. </p>
        <h2 className='jo1'>Contact Us</h2>

        <div style={{marginLeft:'20px', padding:'10px 5px', marginBottom:'30px'}}  >
        <strong>Location:</strong> 123 Moneyline Street, Monroe, Pa <br />
        <strong>Phone:</strong> <a href="tel:123-456-7890">123-456-7890</a> <br />
        <strong>Email:</strong> <a href="mailto:info@healthni.com">info@healthni.com</a>
        </div>
    </div>
    
  );
};

export default About;
