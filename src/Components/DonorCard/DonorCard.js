import './DonorCard.scss';
import { Link } from 'react-router-dom';

const DonorCard = () => {
  //let display = donors.map(donor => {
  // <DonorCard
  //  name={}
  //  age={}
  //  city={}
  //  bio={}
  ///>
  // })
  return (
    <section className='contact-grid'>
      {/* will need to update the below link to a specific contact id */}
      <Link to='/contact' className='contact-card'>
        {/* Will need to fill in cards below with dummy data */}
        <h3>Sarah Smith</h3>
        <p>Location: Denver, CO</p>
        <h4>Bio</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </Link>
    </section>
  )
};

export default DonorCard;