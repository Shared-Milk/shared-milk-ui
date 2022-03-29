import './Header.scss';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <Link to='/'><h1 className='nav'>No Use Cryin' Over Shared Milk</h1>
        </Link>
      </section>
      <nav>
        <ul className='menu mobile-hidden'>
          <li>
            <NavLink to='/' className='nav'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/need-milk' className='nav'>Need Milk</NavLink>
          </li>
          <li>
            <NavLink to='/donate' className='nav'>Donate</NavLink>
          </li>
          <li>
            <NavLink to='/about' className='nav'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/support' className='nav'>Support</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;