import './NeedMilk.scss';
import DonorCard from '../DonorCard/DonorCard';
import {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import { GET_ALL_DONORS } from '../../GraphQL/Queries';

const NeedMilk = () => {
  const {error, loading, data} = useQuery(GET_ALL_DONORS)
  const [donors, setDonors] = useState([])
  
  useEffect(() => {
    if(data) {
      setDonors(data.queryUsers)
    }
  }, [data])

  return (
    <section className='main-container'>
      <h2>Milk Donors</h2>
      <p>Click on a profile below to contact a milk donor.</p>
      {donors.map(donor => {
        return (<DonorCard key={donor.id} donor={donor}/>)
      })}
    </section>
  )
};

export default NeedMilk;