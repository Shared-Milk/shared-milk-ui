import './Header.scss';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <Link to='/'>
          <h1 data-testid='site-title' >No Use Cryin' Over Shared Milk</h1>
        </Link>
      </section>
      <nav data-testid='nav-bar'>
        <ul className='menu mobile-hidden'>
          <li>
            <NavLink to='/' data-testid='home-link' >Home</NavLink>
          </li>
          <li>
            <NavLink to='/need-milk' data-testid='need-milk-link' >Need Milk</NavLink>
          </li>
          <li>
            <NavLink to='/donate' data-testid='donate-milk-link' >Donate</NavLink>
          </li>
          <li>
            <NavLink to='/about' data-testid='about-link' >About</NavLink>
          </li>
          <li>
            <NavLink to='/support' data-testid='support-link' >Support</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;