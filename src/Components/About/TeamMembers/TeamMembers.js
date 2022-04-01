import React from 'react';
// import './DonorCard.scss';
import MemberCard from '../MemberCards/MemberCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const TeamMembers = ({team}) => {
  console.log('team passed to TeamMembers', team)

  const memberDetails = team.map(teamMember => {
    return (
      <MemberCard 
        key={teamMember.id}
        id={teamMember.id}
        name={teamMember.name}
        photo={teamMember.photo}
        pronouns={teamMember.pronouns}
        linkedin={teamMember.linkedin}
        github={teamMember.github}
        bio={teamMember.bio}
      />
    )
  });

  return (
    <section className='team-grid'>
      {memberDetails}
    </section>
  )
};

export default TeamMembers;
