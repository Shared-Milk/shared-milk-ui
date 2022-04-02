import React from 'react';
import { Link } from 'react-router-dom';

const memberCard = ({member}) => {
  const url = `${member.firstName}_${member.lastName}`;

  return (
    <article className='member-card'>
      <Link to={url} state={member}>
        <img className='bio-photo' src={member.photo} alt={`Photo of ${member.firstName}`}/>
        <h3>{member.firstName} {member.lastName}</h3>
      </Link>
      <div className='social-links'>
        <img className='social-icon' src={member.linkedinIcon} alt={`${member.firstName}'s Linked In Profile`}/>
        <img className='social-icon' src={member.githubIcon} alt={`${member.firstName}'s Github Profile`}/>
      </div>
    </article>
  )
}

export default memberCard;