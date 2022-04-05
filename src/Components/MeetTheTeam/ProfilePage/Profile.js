import './Profile.scss';
import { useLocation } from 'react-router-dom';
import { teamData } from '../../../TeamData/TeamData';

const Profile = () => {
  const location = useLocation();
  const lowerCasePath = location.pathname.toLowerCase();
  const splitPath = lowerCasePath.split('/');
  const urlName = splitPath[2].split('_');
  const profile = teamData.find(tm => tm.firstName.toLowerCase() === urlName[0]);
  const linkedinText = profile.linkedin.replace('https://www.', '');
  const githubText = profile.github.replace('https://', '');

  return (
    <section className='main-container'>
      <h2 data-testid='dev-page-title'>{profile.firstName} {profile.lastName}</h2>
      <p></p>
      <section className='team-grid'>
        <article className='team-member'>
          <div className='col-1'>
            <img data-testid='dev-page-photo' className='bio-photo' src={profile.photo} alt={`${profile.firstName}`}/>
          </div>
          <div className='col-2'>
            <h3 data-testid='dev-page-pronouns'>Pronouns</h3>
              <p>{profile.pronouns}</p>
            <h3 data-testid='dev-page-about-title'>About Me</h3>
            <p data-testid='dev-page-bio'>{profile.bio}</p>
            <h3>Connect with Me</h3>
            <div className='social-link'>
              <a href={profile.linkedin} target='_blank' rel='noreferrer' data-testid='dev-page-linkedin-link'>
                <img className='social-icon' src={profile.linkedinIcon} alt={`${profile.firstName}'s Linked In`}/>
                <p className='link'>{linkedinText}</p>
              </a>
            </div>
            <div className='social-link'>
              <a href={profile.github} target='_blank' rel='noreferrer' data-testid='dev-page-github-link'>
                <img className='social-icon' src={profile.githubIcon} alt={`${profile.firstName}'s Github`}/>
                <p className='link'>{githubText}</p>
              </a>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Profile;
