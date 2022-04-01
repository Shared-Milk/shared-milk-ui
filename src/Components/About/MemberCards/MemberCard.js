import React from 'react';
// import './MemberCard.scss';
import githubIcon from '../SocialIcons/github.png';
import linkedinIcon from '../SocialIcons/linkedin.png';

const memberCard = ({id, name, photo, pronouns, linkedin, github, bio}) => {
  return (
    <article className='member-card'>
      <img className='bio-photo' src={photo} alt={`Photo of ${name}`}/>
      <h3>{name}</h3>
      <div className='social-links'>
        <img className='social-icon' src={linkedinIcon} alt={`${name}'s Linked In Profile`}/>
        <img className='social-icon' src={githubIcon} alt={`${name}'s Github Profile`}/>
      </div>
    </article>
  )
}

export default memberCard;
