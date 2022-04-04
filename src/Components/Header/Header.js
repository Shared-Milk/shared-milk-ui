import './Header.scss';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header data-testid='header'>
      <section className='logo'>
        <Link to='/'>
          <h1>No Use Cryin' Over Shared Milk</h1>
        </Link>
      </section>
      <nav data-testid='nav-bar'>
        <ul className='menu mobile-hidden'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/need-milk'>Need Milk</NavLink>
          </li>
          <li>
            <NavLink to='/donate'>Donate</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;