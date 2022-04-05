import { useQuery } from '@apollo/client';
import { GET_ALL_DONORS } from '../../Graphql/Queries';
import { useEffect, useState } from 'react';
import baby_logo from '../Header/shared_milk_logo.png';

const DonorThankYou = () => {
  const { loading, data } = useQuery(GET_ALL_DONORS);
  const [errorStatus, setError] = useState(false);

  useEffect(() => {
    if(!data && loading) {
      setError(true);
    }
  }, [data, loading]);

  if (errorStatus) {
    return (
      <article className="main-container error-container">
        <img src={baby_logo} alt='No Use Cryin Over Shared Milk logo' className='baby-logo animate__animated animate__tada'/>
        <h2 className='error-message'>Waah! We had trouble with your submission.<br/>Please try again later.</h2>
        <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
      </article>
    );
  } else {
    return (
      <article className='main-container message'>
        <h2 data-testid='thank-donor-title'>Thank You!</h2>
        <p>Thank you for offering to donate milk. An eager parent will be in contact with you soon!</p>
      </article>
    );
  }
};

export default DonorThankYou;
