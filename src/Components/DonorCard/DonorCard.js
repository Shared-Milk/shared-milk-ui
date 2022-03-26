import './DonorCard.scss';
import { Link } from 'react-router-dom';

const DonorCard = ({donor}) => {
  return (
    <section className='contact-grid'>
      {/* will need to update the below link to a specific contact id */}
      <Link to='/contact' className='contact-card'>
        {/* Will need to fill in cards below with dummy data */}
        <h3>{donor.name}</h3>
        <p>Location: {donor.location}</p>
        <h4>Bio</h4>
        <p>{donor.bio}</p>
      </Link>
    </section>
  )
};

export default DonorCard;