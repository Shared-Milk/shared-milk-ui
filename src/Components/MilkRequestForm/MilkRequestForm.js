import './MilkRequestForm.scss';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'

const MilkRequestForm = () => {
  const location = useLocation();
  const name = location.state.name || 'user'

  return (
    <section className='main-container'>
      <h2>Connect with {name}</h2>
      <form>
        <label htmlFor='First Name'>Your Name</label>
        <input type='text' placeholder='First & Last Name' />
        <label htmlFor='Email Address'>Email Address</label>
        <input type='email' placeholder='Email Address' />
        <label htmlFor='Phone Number'>Phone Number</label>
        <input type='tel' placeholder='Phone Number' />
        <label htmlFor='Message'>Message</label>
        <textarea type='text' placeholder='How much milk do you need? When do you need it? Tell your donor more about yourself.' />
        <Link to='/sent-confirmation' className='button'>Send Message</Link>
      </form>
    </section>
  )
};

export default MilkRequestForm;

MilkRequestForm.propTypes = {
  name: PropTypes.string
};