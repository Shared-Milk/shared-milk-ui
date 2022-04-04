import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

const MemberCard = ({member}) => {
  const firstName = member.firstName.toLowerCase();
  const lastName = member.lastName.toLowerCase();
  const url = `${firstName}_${lastName}`;

  return (
    <article className='member-card' data-testid='member-card'>
      <Link to={`${url}`} className='name-and-photo'>
        <h4>{member.firstName} {member.lastName}</h4>
        <img className='bio-photo' src={member.photo} alt={`Photo of ${member.firstName}`}/>
      </Link>
      <div className='pronouns'>
        <h3>{member.pronouns}</h3>
      </div>
      <div className='social-links'>
        <a href={member.linkedin} target='_blank'> 
          <img className='social-icon' src={member.linkedinIcon} alt={`${member.firstName}'s Linked In Profile`}/>
        </a>
        <a href={member.github} target='_blank'> 
          <img className='social-icon' src={member.githubIcon} alt={`${member.firstName}'s Github Profile`}/>
        </a>
      </div>
    </article>
  )
}

export default MemberCard;

MemberCard.propTypes = {
  member: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.string,
    linkedinIcon: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    githubIcon: PropTypes.string
  })
}

