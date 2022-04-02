import './TeamPages.scss';
import github from '../SocialIcons/github.png';
import linkedin from '../SocialIcons/linkedin.png';
import { useState } from 'react';
// import { team } from '../../../TeamData/TeamMembers';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const profile = location.state;
  const linkedinText = profile.linkedin.replace('http://www.', '');
  const githubText = profile.github.replace('https://', '');

  return (
    <section className='main-container'>
      <h2>{profile.name}</h2>
      <p></p>
      <section className='team-grid'>
        <article className='team-member'>
          <div className='col-1'>
            <img className='bio-photo' src={profile.photo} alt={`Photo of ${profile.name}`}/>
          </div>
          <div className='col-2'>
            <h3>About Me</h3>
              <p>{profile.bio}</p> 
            <div className='social-link'>
              <img className='social-icon' src={linkedin} alt={`${profile.name}'s Linked In`}/>
              <p className='link'>{linkedinText}</p>
            </div>
            <div className='social-link'>
              <img className='social-icon' src={github} alt={`${profile.name}'s Github`}/>
              <p className='link'>{githubText}</p>
            </div>
          </div>
        </article>
      </section>
    </section>
  )
};

export default Profile;