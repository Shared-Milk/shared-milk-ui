import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className='main-container error-container'>
      <h2 className='error-message'>{`Oops! We can't find what you're looking for.`}</h2>
      <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
    </section>
  )
}

export default NotFound;