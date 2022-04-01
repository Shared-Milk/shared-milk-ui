import './About.scss';
import { useState, useEffect } from 'react';
import { teamData } from '../../TeamData/TeamData';
import TeamMembers from './TeamMembers/TeamMembers';

const About = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    if(team) {
      setTeam([...teamData])
    }
  }, [])

  console.log('team', team)
  return (
    <section className='main-container'>
      <h2>About</h2>
      <p>This is a Turing Module 4 project built with React.js, Ruby, Rails, GraphQL, and .... Our inspiration was to connect families with newborns in need of breastmilk with mothers or families of mothers who over produce milk.</p>
      <section className='team-container'>
        <TeamMembers team={team}/>
      </section>
    </section>
  )
};

export default About;