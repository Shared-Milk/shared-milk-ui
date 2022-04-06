import './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import baby_logo from './shared_milk_logo.png';
import baby_bottle from './feeding-bottle.png';
import 'animate.css';

const Header = () => {
  return (
    <header data-testid='header'>
      <section className='logo'>
        <Link to='/' className='logo-link'>
          <img src={baby_logo} alt='No Use Cryin Over Shared Milk logo' className='baby-logo animate__animated animate__tada animate__repeat-2'/>
          <div className='logo-text'>
            <h1>No Use Cryin' Over<br></br>
            <span className='logo-indent'> Shared Milk
            <img src={baby_bottle} alt='baby bottle icon' className='baby-bottle'/></span>
            </h1>
          </div>
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
            <NavLink to='/our-team'>Our Team</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
