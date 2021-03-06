import React from 'react';
import MemberCard from './MemberCard';
import PropTypes from 'prop-types';

const TeamMembers = ({ team }) => {
  return (
    <section data-testid='team-grid' className='team-grid animate__animated animate__fadeInUp'>
      {team.map(teamMember => {
        return (
          <MemberCard
            key={teamMember.id}
            member={teamMember}
          />
        )
      })}
    </section>
  );
};

export default TeamMembers;

TeamMembers.propTypes = {
  teamMember: PropTypes.object,
};
