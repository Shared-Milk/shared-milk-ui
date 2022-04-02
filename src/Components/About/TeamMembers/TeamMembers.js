import React from 'react';
// import './DonorCard.scss';
import MemberCard from '../MemberCards/MemberCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const TeamMembers = ({team}) => {
  // const memberDetails = team.map(teamMember => {
  //   return (
  //     <MemberCard 
  //       key={teamMember.id}
  //       id={teamMember.id}
  //       name={teamMember.name}
  //       photo={teamMember.photo}
  //       pronouns={teamMember.pronouns}
  //       linkedin={teamMember.linkedin}
  //       github={teamMember.github}
  //       bio={teamMember.bio}
  //     />
  //   )
  // });

  return (
    <section className='team-grid'>
      {/* {memberDetails} */}
      {/* <MemberCard key={teamMember.id} member={teamMember}/> */}
      {team.map(teamMember => {
        return (
          <MemberCard 
            key={teamMember.id}
            member={teamMember}
            // id={teamMember.id}
            // name={teamMember.name}
            // photo={teamMember.photo}
            // pronouns={teamMember.pronouns}
            // linkedin={teamMember.linkedin}
            // github={teamMember.github}
            // bio={teamMember.bio}
          />
        )
      })}
    </section>
  )
};

export default TeamMembers;
