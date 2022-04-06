import './HomePage.scss';
import { Link } from 'react-router-dom';
import Levon_Home from '../About/KiddoPhotos/Levon_Home.png';
import Elora_Home from '../About/KiddoPhotos/Elora_Home.png';

const HomePage = () => {
   return (
    <section className='main-container home columns' data-testid='home'>
      <aside className='mission'>
        <h2>Our Mission</h2>
          <p>To create a safe space for families who under-produce breast milk to connect with families who over-produce.</p>
          <p>We keep the money out of it as a donation-only based program.</p>
          <p>Whether you are a parent in need, or are here to donate, we hope you are able to build a connection with another family and join us in our mission to help infants thrive by making donated milk accessible.</p>
          <p>
            <Link to='/about' className='more-link'>Read more</Link> about our mission, and meet the sweet faces that inspired us.
          </p>
        <Link to='/about'>
          <article className='photo-grid mobile-hidden'>
            <img className='baby-photo' src={Levon_Home} alt='Baby Levon tummy time'/>
            <img className='baby-photo' src={Elora_Home} alt='Baby Elora napping'/>
          </article>
        </Link>
      </aside>
      <aside className='buttons'>
        <Link to='/need-milk' className='need'>Need<br></br>Milk</Link>
        <Link to='/donate' className='donate'>Donate<br></br>Milk</Link>
        <Link to='/support' className='support'>Need<br></br>Support</Link>
      </aside>
    </section>
  );
};

export default HomePage;
