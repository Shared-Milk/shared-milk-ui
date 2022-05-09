import './About.scss';
import { useState, useEffect } from 'react';
import { babyData } from '../KiddoPhotos/BabyData';
import Babies from '../Babies';
import 'animate.css';

const About = () => {
  const [babies, setBabies] = useState([]);

  useEffect(() => {
    setBabies([...babyData]);
  }, []);

  return (
    <section className='main-container about-page' data-testid='about'>
      <h2>Our Inspiration</h2>
        <p>"No Use Cryin' Over Shared Milk" was inspired by our founder, Seth Perna's, personal family battle with producing breast milk for his son and the mental and financial struggle that followed. Seth's mission became our mission...</p>
        <div className='mission-container animate__animated animate__zoomIn'>
          <p className='mission'>"to create a safe space for families who underproduce breast milk to connect with families who overproduce."</p>
        </div>
        <hr className='dots'></hr>
      <section className='team-container' data-testid='team-container'>
        <Babies photos={ babies } />
      </section>
    </section>
  );
};

export default About;
