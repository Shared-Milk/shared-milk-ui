import DonorCard from '../DonorCard/DonorCard';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_DONORS } from '../../Graphql/Queries';

const NeedMilk = () => {
  const { error, loading, data } = useQuery(GET_ALL_DONORS)
  const [donors, setDonors] = useState([])

  
  useEffect(() => {
    if(data) {
      setDonors(data.users)
    }
  }, [data])
  
  const checkForMessage = () => {
    if (loading) return <ReactLoading type='spinningBubbles' color='#D95A4E' height={'20%'} width={'20%'} />;
    //may update below return to just console.log({error.message})
    if (error) return <span className='bold'>Error: {error.message}</span>
  }

  return (
    <section className='main-container donors'>
      <h2>Milk Donors</h2>
      <p>Click on a profile below to contact a milk donor.</p>
      <section className='error-loading'>
        {checkForMessage()}
      </section>
      <section className='contact-grid'>
        { donors.map(donor => {
          return (<DonorCard key={ donor.id } donor={ donor }/>)
        }) }
      </section>
    </section>
  )
};

export default NeedMilk;