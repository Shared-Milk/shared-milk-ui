import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <h1 tabIndex='0' className='nav'>Don't Cry Over Shared Milk</h1>
      </section>
      <nav>
        <ul className='menu'>
          <li>
            <NavLink exact to='/' className='nav'>Home</NavLink>
          </li>
          <li>
            <NavLink exact to='/about-us' className='nav'>About Us</NavLink>
          </li>
          <li>
            <NavLink exact to='/support' className='nav'>Support</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;