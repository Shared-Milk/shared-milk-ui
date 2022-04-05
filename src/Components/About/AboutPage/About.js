import './About.scss';
import { useState, useEffect } from 'react';
import { teamData } from '../../../TeamData/TeamData';
import TeamMembers from '../TeamMembers/TeamMembers';

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
        <div className='mission-container'>
          <p className='mission'>"to create a safe space for families who under-produce breast milk to connect with families who over-produce."</p>
        </div>
        <hr className='dots'></hr>
      <h3>Our Tech Stack</h3>
        <p>This is a <a data-testid='turing-link' href='https://turing.edu/' target='_blank' rel='noreferrer'>Turing School of Software & Design</a> Module 4 project built with React.js, JavaScript, HTML, SASS, Ruby, Rails, GraphQL, Cypress, Heroku, and CircleCI. </p>
      <section className='team-container' data-testid='team-container'>
        <h3>Meet the Team</h3>
          <p>Click on any photo below to get to know more about us.</p>
        <TeamMembers team={team} />
      </section>
    </section>
  );
};

export default About;
