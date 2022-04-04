import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

const MemberCard = ({member}) => {
  const firstName = member.firstName.toLowerCase();
  const lastName = member.lastName.toLowerCase();
  const url = `${firstName}_${lastName}`;

  return (
    <article data-testid='member-card' className='member-card'>
      <Link to={`${url}`} className='name-and-photo'>
        <h4 data-testid='dev-name'>{member.firstName} {member.lastName}</h4>
        <img data-testid='dev-image' className='bio-photo' src={member.photo} alt={`Photo of ${member.firstName}`}/>
      </Link>
      <div className='pronouns'>
        <h3 data-testid='dev-pronouns' >{member.pronouns}</h3>
      </div>
      <div data-testid='dev-social-links'className='social-links'>
        <a href={member.linkedin} data-testid='dev-linkedin-link' target='_blank'> 
          <img className='social-icon' data-testid='dev-linkedin-icon' src={member.linkedinIcon} alt={`${member.firstName}'s Linked In Profile`}/>
        </a>
        <a data-testid='dev-github-link' href={member.github} target='_blank'> 
          <img className='social-icon' data-testid='dev-github-icon' src={member.githubIcon} alt={`${member.firstName}'s Github Profile`}/>
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

