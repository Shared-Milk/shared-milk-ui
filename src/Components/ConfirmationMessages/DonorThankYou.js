import { useLocation } from 'react-router-dom';
import baby_logo from '../Header/shared_milk_logo.png';

const DonorThankYou = () => {
  const { state } = useLocation();
 
  if (state === 'Thank you for offering to donate milk. An eager parent will be in contact with you soon!') {
    return (
      <article className="main-container error-container">
        <h2 className='error-message'>{ state }</h2>
        <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
      </article>
    )
  } else if (state === 'Thank you for your interest in donating. At this time you’re not eligible to donate milk.') {
    return (
      <article className="main-container error-container">
        <img src={baby_logo} alt='No Use Cryin Over Shared Milk logo' className='baby-logo animate__animated animate__tada'/>
        <h2 className='error-message'>{ state }</h2>
        <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
      </article>
    ) 
  } else {
    return (
      <article className="main-container error-container">
          <img src={baby_logo} alt='No Use Cryin Over Shared Milk logo' className='baby-logo animate__animated animate__tada'/>
          <h2 className='error-message'>Oops! We had trouble with your submission. Please try again later.</h2>
          <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
      </article>
    )
  }


};

export default DonorThankYou;
