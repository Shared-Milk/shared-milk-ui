import './Header.scss';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <Link to='/'><h1 data-testid='site-title' className='nav'>No Use Cryin' Over Shared Milk</h1>
        </Link>
      </section>
      <nav>
        <ul className='menu'>
          <li>
            <NavLink to='/' data-testid='home-link' className='nav'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/need-milk' data-testid='need-milk-link' className='nav'>Need Milk</NavLink>
          </li>
          <li>
            <NavLink to='/donate' data-testid='donate-milk-link' className='nav'>Donate</NavLink>
          </li>
          <li>
            <NavLink to='/about' data-testid='about-us-link' className='nav'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/support' data-testid='support-link' className='nav'>Support</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;