import './About.scss';
import { useState, useEffect } from 'react';
import { teamData, socialIcons } from '../../../TeamData/TeamData';
import TeamMembers from '../TeamMembers/TeamMembers';

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    if(team) {
      setTeam([...teamData])
    }
  }, [])

  return (
    <section className='main-container'>
      <h2>About Us</h2>
      <p>Our inspiration for this application is to connect families with newborns in need of breastmilk with mothers or families of mothers who over produce milk.</p>
      <p>This is a Turing Module 4 project built with React.js, Ruby, Rails, GraphQL, and .... </p>
      <p>Click on any of us below to get to know more about us.</p>
      <section className='team-container'>
        <TeamMembers team={team} />
      </section>
    </section>
  )
};

export default About;