import './MilkRequestForm.scss';
import { Link } from 'react-router-dom';

const MilkRequestForm = () => {
  return (
    <section className='main-container'>
      <h2>Connect with Sarah</h2>
      <form>
        <label for='First Name'>Your Name</label>
        <input type='text' placeholder='First & Last Name' />
        <label for='Email Address'>Email Address</label>
        <input type='email' placeholder='Email Address' />
        <label for='Phone Number'>Phone Number</label>
        <input type='tel' placeholder='Phone Number' />
        <label for='Message'>Message</label>
        <textarea placeholder='How much milk do you need? When do you need it? Tell your donor more about yourself.' />
        <Link exact to='/sent-confirmation' className='button'>Send Message</Link>
      </form>
    </section>
  )
};

export default MilkRequestForm;