import React from 'react';
import PhotoCard from './PhotoCard';
import PropTypes from 'prop-types';

const Babies = ({ photos }) => {
  return (
    <section data-testid='team-grid' className='team-grid animate__animated animate__fadeInUpBig'>
      {photos.map(baby => {
        return (
          <PhotoCard
            key={baby.id}
            baby={baby}
          />
        )
      })}
    </section>
  );
};

export default Babies;

Babies.propTypes = {
  baby: PropTypes.object,
};
