import './DonorCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DonorCard = ({ donor }) => {
  return (
    <Link to="/contact" state={ donor } className='contact-card' data-testid='contact-card' >
      <h3 data-testid='donor-name'>{ donor.name }</h3>
      <p data-testid='donor-location'>Location: { donor.location }</p>
      <h4 data-testid='bio-title'>Bio</h4>
      <p data-testid='donor-bio'>{ donor.bio }</p>
    </Link>
  )
};

export default DonorCard;

DonorCard.propTypes = {
  donor: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    bio: PropTypes.string
  })
};