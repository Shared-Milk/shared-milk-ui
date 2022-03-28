import './DonorCard.scss';
import { Link } from 'react-router-dom';

const DonorCard = ({donor}) => {
  return (
    <>
      <Link to="/contact" state={donor} className='contact-card'>
        {/* Will need to fill in cards below with dummy data */}
        <h3>{donor.name}</h3>
        <p>Location: {donor.location}</p>
        <h4>Bio</h4>
        <p>{donor.bio}</p>
      </Link>
    </>
  )
};

export default DonorCard;