import React from 'react';
import { Link } from 'react-router-dom';

const memberCard = ({member}) => {
  const firstName = member.firstName.toLowerCase();
  const lastName = member.lastName.toLowerCase();
  const url = `${firstName}_${lastName}`;

  return (
    <article className='member-card'>
      <Link to={`/${url}`} className='name-and-photo'>
        <h4>{member.firstName} {member.lastName}</h4>
        <img className='bio-photo' src={member.photo} alt={`Photo of ${member.firstName}`}/>
      </Link>
      <div className='social-links'>
        <img className='social-icon' src={member.linkedinIcon} alt={`${member.firstName}'s Linked In Profile`}/>
        <img className='social-icon' src={member.githubIcon} alt={`${member.firstName}'s Github Profile`}/>
      </div>
    </article>
  )
}

export default memberCard;