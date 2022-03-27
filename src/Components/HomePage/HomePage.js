import './HomePage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className='main-container columns'>
      <aside className='mission'>
        <h2>Our Mission</h2>
        <p>Our orgnanization strives to build connections between parents of babies in need and generous donors.</p>
        <p>Human milk is the natural food for babies and provides them with optimal nutrition that allows them to reach their health potential.
           We are here to help mothers who are not able to nurse their babies or produce enough milk by connecting them with mothers who produce more milk than their babies need. 
           Together, we will help infants thrive by making donated breastmilk safe and accessible.</p>
        <p>We understand that breastfeeding issues can lead to many different stressers and emotions. We are here for you and you are not alone. Please visit our Support page to view more resources.</p>
      </aside>
      <aside className='buttons'>
        <Link exact to='/need-milk' className='need'>Need<br></br>Milk</Link>
        <Link exact to='/donate' className='donate'>Donate<br></br>Milk</Link>
        <Link exact to='/support' className='support'>Need<br></br>Support</Link>
      </aside>
    </section>
  )
};

export default HomePage;