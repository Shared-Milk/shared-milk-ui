import { useQuery, gql } from '@apollo/client';
import { GET_ALL_DONORS } from '../../Graphql/Queries';
import { useEffect, useState } from 'react';

const DonorThankYou = () => {
  const { error, loading, data } = useQuery(GET_ALL_DONORS)
  console.log('donor error', error)
  const [errorStatus, setError] = useState(false)

  useEffect(() => {
    if(!data) {
      setError(true)
    }
  }, errorStatus)

  if (errorStatus) {
    return (
      <article className="main-container error-container">
        <h2 className='error-message'>Oops! We had trouble with your submission. Please try again later.</h2>
        <button className='error-button' onClick={() => {window.location.href='/'}}>Go Back Home</button>
      </article>
    )
  } else {
    return (
      <article className='main-container message'>
        <h2 data-testid='thank-donor-title'>Thank You!</h2>
        <p>Thank you for offering to donate milk. An eager parent will be in contact with you soon!</p>
      </article>
    )
  }
};

export default DonorThankYou;