import React from 'react';
import githubIcon from '../SocialIcons/github.png';
import linkedinIcon from '../SocialIcons/linkedin.png';
import { Link, Routes, Route } from 'react-router-dom';
import Bio from '../ProfilePage/Devon';
import MemberPage from '../ProfilePage/Profile';

// const memberCard = ({id, name, photo, pronouns, linkedin, github, bio}) => {
  const memberCard = ({member}) => {
    // console.log('MemberCard member', member)

  return (
    <article className='member-card'>
      <Link to={`${member.name}`} state={member}>
        <img className='bio-photo' src={member.photo} alt={`Photo of ${member.name}`}/>
        <h3>{member.name}</h3>
      </Link>
      <div className='social-links'>
        <img className='social-icon' src={linkedinIcon} alt={`${member.name}'s Linked In Profile`}/>
        <img className='social-icon' src={githubIcon} alt={`${member.name}'s Github Profile`}/>
      </div>

      {/* <Routes>
        <Route path=':id' element={<MemberPage />}/>
      </Routes> */}
    </article>
  )
}

export default memberCard;

{/* <DonorCard key={donor.id} donor={donor}/> */}