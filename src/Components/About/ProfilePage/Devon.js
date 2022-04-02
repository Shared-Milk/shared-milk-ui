import './TeamPages.scss';
import github from '../SocialIcons/github.png';
import linkedin from '../SocialIcons/linkedin.png';
import { useState } from 'react';
// import { team } from '../../../TeamData/TeamMembers';
import { useLocation } from 'react-router-dom';

const Devon = () => {
  const location = useLocation();
  const name = location.state.name || 'user'

  return (
    <section className='main-container'>
      <h2>{name}</h2>
      <p></p>
      <section className='team-grid'>
        <article className='team-member'>
          <div className='col-1'>
            {/* <img className='bio-photo' src={devon_wigle} alt="Devon Wigle"/> */}
          </div>
          <div className='col-2'>
            <h3>About Me</h3>
              <p>I find that my curiosity for how things work, a love of problem solving, and creativity has led me to a career in technology. Up to my decision to pursue a career as a software engineer I spent most of the last decade entrenched in volunteer work with non-profit roller derby organizations looking to build a community of skaters and provide sporting entertainment. As a military spouse, I often led Soldier and Family Readiness Groups with the goal of distributing information, providing a social network, and building community in dynamic and generally stressful settings.</p>
            <h3>Connect with Me</h3>
            <div className='social-link'>
              <img className='social-icon' src={linkedin} alt="Devon Wigle LinkedIn"/>
              <p className='link'>linkedin.com/in/devonwigle/</p>
            </div>
            <div className='social-link'>
              <img className='social-icon' src={github} alt="Devon Wigle GitHub"/>
              <p className='link'>github.com/devonwigle</p>
            </div>
          </div>
        </article>
      </section>
    </section>
  )
};

export default Devon;