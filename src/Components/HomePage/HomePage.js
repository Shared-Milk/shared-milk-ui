import './HomePage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className='main-container columns'>
      <aside className='mission'>
        <h2>Our Mission</h2>
          <p>To create a safe space for families who under-produce breast milk to connect with families that over-produce.</p>
          <p>We keep the money out of it as a donation only based program.</p>
          <p>Whether you are a parent in need, or are here to donate, we hope you are able to build a connection with another family and join us in our mission to help infants thrive by making donated milk accessible.</p>
        {/* <p>To build connections between parents of babies in need of milk and generous donors.</p>
        <p>Human milk is the natural food for babies and provides them with optimal nutrition that allows them to reach their health potential.
           We are here to help families who are not able to nurse their babies or produce enough milk by connecting them with mothers who produce more milk than their babies need. 
           Together, we will help infants thrive by making donated breastmilk accessible.</p>
        <p>The period of time after a baby is born is naturally a very stressful time. Emotions and pressure are high. We understand that breastfeeding issues can be a major contributor to a mother's stress level. */}
      </aside>
      <aside className='buttons'>
        <Link to='/need-milk' className='need'>Need<br></br>Milk</Link>
        <Link to='/donate' className='donate'>Donate<br></br>Milk</Link>
        <Link to='/support' className='support'>Need<br></br>Support</Link>
      </aside>
    </section>
  )
};

export default HomePage;