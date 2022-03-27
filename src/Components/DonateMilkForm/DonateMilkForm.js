import './DonateMilkForm.scss';
import { Link } from 'react-router-dom';

const DonateMilkForm = () => {
  function handleDonorSubmit() {
    if (document.getElementById('yes').checked) {
      return <Link exact to='/sorry'></Link>
    } else {
      <Link exact to='/thank-you'>Submit</Link>
    }
  }
  return (
    <form className='donor-form'>
      <label for='Your Name'>Your Name</label>
      <input type='text' placeholder='First & Last Name' />
      <label for='Email Address'>Email Address</label>
      <input type='email' placeholder='Email Address' />
      <label for='Phone Number'>Phone Number</label>
      <input type='tel' placeholder='Phone Number' />
      <label for='City'>City</label>
      <input type='text' placeholder='City' />
      <label for='State'>State</label>
      <input type='text' placeholder='State' />
      <p className='form-question'>Have you used any tabacco products in the last 6 weeks?</p>
      <div className='form-group'>
        <label for='yes'>YES</label>
        <input type='radio' name='smoker' value='yes' id='yes'/>
        <label for='no'>NO</label>
        <input type='radio' name='smoker' value='no' id='no'/>
      </div>
      <label for='message'>Message</label>
      <textarea placeholder='Tell us about yourself. Why are you donating? How much milk do you have available?' />
      {/* 
      
      link below needs a conditional that depends on the 'yes' or 'no' radio buttons above 

      - link to '/sorry' if YES
      - linke to '/thank-you' if NO
      
      */}
      <button className='button' onSubmit={>Submit</button>
    </form>
  )
};

export default DonateMilkForm;