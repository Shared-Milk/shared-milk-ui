import React from 'react';
import './NotFound.scss';
import baby_logo from '../Header/shared_milk_logo.png';

const NotFound = () => {
  return (
    <section className='main-container error-container'>
       <img src={baby_logo} alt='No Use Cryin Over Shared Milk logo' className='baby-logo animate__animated animate__tada'/>
      <h2 className='error-message'>{`Waah! We can't find what you're looking for.`}</h2>
      <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
    </section>
  );
};

export default NotFound;
