import './NeedMilk.scss';
import '../DonorCard/DonorCard';

const NeedMilk = () => {
  //let display = donors.map(donor => {
  // <DonorCard
  //  name={}
  //  age={}
  //  city={}
  //  bio={}
  ///>
  // })
  <section>
    <h2>Milk Donors</h2>
    <p>Filter donors by your zip code or city and state.</p>
    <form>
      <label for='Zip Code'>Zip Code</label>
      <input type='text' placeholder='Zip Code' />
      <p>or</p>
      <label for='City'>City</label>
      <input type='text' placeholder='City' />
      <label for='State'>State</label>
      <input type='text' placeholder='State' />
    </form>
    <p>Click on a profile below to contact a milk donor.</p>
    {/* {display} */}
  </section>
};

export default NeedMilk;