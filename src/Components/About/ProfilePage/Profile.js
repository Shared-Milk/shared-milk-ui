import './Profile.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { teamData } from '../../../TeamData/TeamData';

const Profile = () => {
  const location = useLocation();
  const lowerCasePath = location.pathname.toLowerCase();
  const splitPath = lowerCasePath.split('/');
  const urlName = splitPath[1].split('_');
  const profile = teamData.find(tm => tm.firstName.toLowerCase() === urlName[0]);
  const linkedinText = profile.linkedin.replace('https://www.', '');
  const githubText = profile.github.replace('https://', '');

  return (
    <section className='main-container'>
      <h2>{profile.firstName} {profile.lastName}</h2>
      <p></p>
      <section className='team-grid'>
        <article className='team-member'>
          <div className='col-1'>
            <img className='bio-photo' src={profile.photo} alt={`Photo of ${profile.firstName}`}/>
          </div>
          <div className='col-2'>
            <h3>About Me</h3>
              <p>{profile.bio}</p> 
            <h3>Connect with Me</h3>
            <div className='social-link'>
              <img className='social-icon' src={profile.linkedinIcon} alt={`${profile.firstName}'s Linked In`}/>
              <p className='link'>{linkedinText}</p>
            </div>
            <div className='social-link'>
              <img className='social-icon' src={profile.githubIcon} alt={`${profile.firstName}'s Github`}/>
              <p className='link'>{githubText}</p>
            </div>
          </div>
        </article>
      </section>
    </section>
  )
};

export default Profile;