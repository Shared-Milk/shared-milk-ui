import DonateMilkForm from '../DonateMilkForm/DonateMilkForm';

const DonateMilk = () => {
  return (
    <section className='main-container donate'>
      <h2>Donate Milk</h2>
      <p><span className='bold'>Why Donate?</span> Virgie Townsend said it best in her Washington Post article, <a href='https://www.washingtonpost.com/news/parenting/wp/2017/07/25/i-donate-my-breast-milk-heres-how-and-why/' target='_blank'>"I donate my breast milk, and this is why."</a></p><br/>
      <p>There’s a high demand for breastmilk, and we’re working quickly to distribute to as many infants as we can. Your donations are greatly appreciated and needed and help us achieve our goal of providing this service to babies in need.</p><br/>

      <p><span className='bold'>Ready to Donate?</span> Thank you for considering donating. Please complete the application below to be added to our donor page.</p>
      <hr className='dots'/>
      <DonateMilkForm />
    </section>
  )
};

export default DonateMilk;