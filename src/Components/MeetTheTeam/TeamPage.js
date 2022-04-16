import { useState, useEffect } from 'react';
import { teamData } from '../../TeamData/TeamData';
import TeamMembers from './TeamMembers';
import 'animate.css';

const OurTeam = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    setTeam([...teamData]);
  }, []);

  return (
    <section className='main-container about-page' data-testid='about'>
      <h3>Our Tech Stack</h3>
        <p>This is a <a data-testid='turing-link' href='https://turing.edu/' target='_blank' rel='noreferrer'>Turing School of Software & Design</a> Module 4 project built with React.js, JavaScript, HTML, SASS, Ruby, Rails, GraphQL, Cypress, Heroku, and CircleCI. </p>
      <section className='team-container' data-testid='team-container'>
        <h3>Meet the Team</h3>
          <p>Click on any photo below to get to know more about us.</p>
        <TeamMembers team={ team } />
      </section>
    </section>
  )
};

export default OurTeam;
