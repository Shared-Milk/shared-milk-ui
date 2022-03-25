import './HomePage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className='home'>
      <aside className='mission'>
        <h2>Our Mission</h2>
        <p>To build connections between parents of baby’s in need and generous donors.</p>
        <p>Additional messaging about our mission... </p>
        <p>Message about providing resources and support..... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </aside>
      <aside className='buttons'>
        <Link exact to='/need-milk' className='need'>Need<br></br>Milk</Link>
        <Link exact to='/donate' className='donate'>Donate<br></br>Milk</Link>
        <Link exact to='/donate' className='support'>Need<br></br>Support</Link>
      </aside>
    </main>
  )
};

export default HomePage;