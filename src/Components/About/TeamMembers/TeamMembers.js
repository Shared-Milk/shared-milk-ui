import React from 'react';
// import './DonorCard.scss';
import MemberCard from '../MemberCard/MemberCard';
import PropTypes from 'prop-types'

const TeamMembers = ({team}) => {
  return (
    <section className='team-grid'>
      {team.map(teamMember => {
        return (
          <MemberCard 
            key={teamMember.id}
            member={teamMember}
          />
        )
      })}
    </section>
  )
};

export default TeamMembers;

TeamMembers.propTypes = {
  teamMember: PropTypes.object
};
