import DonorCard from '../DonorCard/DonorCard';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_DONORS } from '../../Graphql/Queries';
import NetworkError from '../NetworkError/NetworkError';

const NeedMilk = ({ hasError, errorCode }) => {
  const { error, loading, data } = useQuery(GET_ALL_DONORS)
  const [donors, setDonors] = useState([])

  const gqlError = error;
  console.log(gqlError)
  
  useEffect(() => {
    if(data) {
      setDonors(data.users)
    }
  }, [data])
  
  const checkForMessage = () => {
    if (loading) return  <section className='error-loading'>
      <ReactLoading type='spinningBubbles' color='#D95A4E' height={'20%'} width={'20%'} />
    </section>;
    
    if (error) {
      console.log(error.message)
      return <section className='donor-error'>Oops! We're having trouble loading donors right now. Please try again later.</section>
    }
  }

  if(hasError) {
    return <NetworkError hasError={hasError} errorCode={errorCode && gqlError.message}/>
  } else {
    return (
      <section className='main-container donors' data-testid='donors'>
        <h2>Milk Donors</h2>
        <p>Click on a profile below to contact a milk donor.</p>
          {checkForMessage()}
        <section className='contact-grid' data-testid='contact-grid'>
          { donors.map(donor => {
            return (<DonorCard key={ donor.id } donor={ donor }/>)
          }) }
        </section>
      </section>
    )
  }
};

export default NeedMilk;