import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

const PhotoCard = ({ baby }) => {
  return (
    <article data-testid='member-card' className='member-card'>
      <div className='baby-photo'>
        <img data-testid='dev-image' className='bio-photo baby-photo' src={baby.photo} alt={`${baby.altText}`}/>
      </div>
    </article>
  );
};

export default PhotoCard;

PhotoCard.propTypes = {
  baby: PropTypes.shape({
    photo: PropTypes.string,
    altText: PropTypes.string
  })
};
