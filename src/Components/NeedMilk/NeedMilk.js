import DonorCard from '../DonorCard/DonorCard';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useQuery } from '@apollo/client';
import { GET_ALL_DONORS } from '../../Graphql/Queries';
import 'animate.css';

const NeedMilk = () => {
  const { error, loading, data } = useQuery(GET_ALL_DONORS);
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    if(data) {
      setDonors(data.users);
    }
  }, [data]);

  const checkForMessage = () => {
    if (loading) return  <section className='error-loading'>
      <ReactLoading type='spinningBubbles' color='#D95A4E' height={'20%'} width={'20%'} />
    </section>;

    if (error) {
      return <section className='donor-error'>Oops! We're having trouble loading donors right now. Please try again later.</section>
    }
  }

  return (
    <section className='main-container donors' data-testid='donors'>
      <h2>Milk Donors</h2>
      <p>Click on a profile below to contact a milk donor.</p>
        {checkForMessage()}
      <section className='contact-grid animate__animated animate__fadeInUp' data-testid='contact-grid'>
        { donors.map(donor => {
          return (<DonorCard key={ donor.id } donor={ donor }/>)
        }) }
      </section>
    </section>
  );
};

export default NeedMilk;
