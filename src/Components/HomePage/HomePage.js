import './HomePage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className='main-container columns'>
      <aside className='mission'>
        <h2>Our Mission</h2>
        <p>Our organization strives to build connections between parents of babies in need and generous donors.</p>
        <p>Human milk is the natural food for babies and provides them with optimal nutrition that allows them to reach their health potential.
           We are here to help families who are not able to nurse their babies or produce enough milk by connecting them with mothers who produce more milk than their babies need. 
           Together, we will help infants thrive by making donated breastmilk accessible.</p>
        <p>The period of time after a baby is born is naturally a very stressful time. Emotions and pressure are high. We understand that breastfeeding issues can be a major contributor to a mother's stress level.
           We are here for you and you are not alone. Please visit our <Link exact to='/support'>Support Page</Link> to view more resources.</p>
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