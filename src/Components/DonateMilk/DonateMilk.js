import DonateMilkForm from '../DonateMilkForm/DonateMilkForm';

const DonateMilk = () => {
  return (
    <section className='main-container'>
      <h2>Donate Milk</h2>
      <p>There’s a high demand for breastmilk, and we’re working quickly to distribute to as many infants as we can. Your donations are greatly appreciated and needed and help us achieve our goal of providing this service to babies in need.</p>
      <p>Thank you for considering donating. Please complete the application below to be added to our donor page.</p>
      <hr />
      <DonateMilkForm />
    </section>
  )
};

export default DonateMilk;