import './HomePage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className='main-container columns'>
      <aside className='mission'>
        <h2>Our Mission</h2>
          <p>To create a safe space for families who under-produce breast milk to connect with families who over-produce.</p>
          <p>We keep the money out of it as a donation only based program.</p>
          <p>Whether you are a parent in need, or are here to donate, we hope you are able to build a connection with another family and join us in our mission to help infants thrive by making donated milk accessible.</p>
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