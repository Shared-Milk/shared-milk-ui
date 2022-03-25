import './Header.scss';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <Link exact to='/'><h1 className='nav'>Don't Cry Over Shared Milk</h1>
        </Link>
      </section>
      <nav>
        <ul className='menu'>
          <li>
            <NavLink exact to='/' className='nav'>Home</NavLink>
          </li>
          <li>
            <NavLink exact to='/need-milk' className='nav'>Need Milk</NavLink>
          </li>
          <li>
            <NavLink exact to='/donate' className='nav'>Donate</NavLink>
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