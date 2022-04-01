import './DonorCard.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const DonorCard = ({ donor }) => {
  return (
    <Link to='/contact' state={ donor } className='contact-card'>
      <h3>{ donor.name }</h3>
      <p>Location: { donor.location }</p>
      <h4>Bio</h4>
      <p>{ donor.bio }</p>
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
}