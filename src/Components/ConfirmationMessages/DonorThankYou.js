import { useLocation } from 'react-router-dom';
import baby_logo from '../Header/shared_milk_logo.png';

const DonorThankYou = () => {
  const { state } = useLocation();

  return (
    <article className="main-container error-container">
       <img src={baby_logo} alt='No Use Cryin Over Shared Milk logo' className='baby-logo animate__animated animate__tada'/>
      <h2 className='error-message'>{ state }</h2>
      <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
    </article>
  ) 

};

export default DonorThankYou;
