import './NeedMilk.scss';
import DonorCard from '../DonorCard/DonorCard';

const NeedMilk = () => {
  return (
    <section className='main-container'>
      <h2>Milk Donors</h2>
      <p>Click on a profile below to contact a milk donor.</p>
      <DonorCard />
    </section>
  )
};

export default NeedMilk;