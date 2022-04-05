import './About.scss';
import { useState, useEffect } from 'react';
import { teamData } from '../../../TeamData/TeamData';
import TeamMembers from '../TeamMembers';
import 'animate.css';

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    if(team) {
      setTeam([...teamData]);
    }
  }, [team]);

  return (
    <section className='main-container about-page' data-testid='about'>
      <h2>Our Inspiration</h2>
        <p>"No Use Cryin' Over Shared Milk" was inspired by our founder, Seth Perna's, personal family battle with producing breast milk for his son and the mental an financial struggle that followed. Seth's mission became our mission...</p>
        <div className='mission-container animate__animated animate__fadeIn'>
          <p className='mission'>"to create a safe space for families who under-produce breast milk to connect with families who over-produce."</p>
        </div>
        <hr className='dots'></hr>
      <section className='team-container' data-testid='team-container'>
        <TeamMembers team={team} />
      </section>
    </section>
  );
};

export default About;
