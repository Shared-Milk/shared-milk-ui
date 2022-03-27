import './DonateMilkForm.scss';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const DonateMilkForm = () => {
  const [smoker, setSmoker] = useState()
  const handleSmoker = (event) => {
    setSmoker(event.target.value)
    console.log(smoker)
  }

  const navigate = useNavigate();

  const handleDonorSubmit = () => {
    if (smoker === 'yes') {
      return navigate('/sorry')
    } else if (smoker === 'no') {
      return navigate('/thank-you')
    }
  }
  
  return (
    <form className='donor-form'>
      <label htmlFor='Your Name'>Your Name</label>
      <input type='text' placeholder='First & Last Name' />
      <label htmlFor='Email Address'>Email Address</label>
      <input type='email' placeholder='Email Address' />
      <label htmlFor='Phone Number'>Phone Number</label>
      <input type='tel' placeholder='Phone Number' />
      <label htmlFor='City'>City</label>
      <input type='text' placeholder='City' />
      <label htmlFor='State'>State</label>
      <input type='text' placeholder='State' />
      <p className='form-question'>Have you used any tobacco products in the last 6 weeks?</p>
      <div className='form-group'>
        <label htmlFor='yes'>YES</label>
        <input type='radio' name='smoker' value='yes' onChange={(event) => {handleSmoker(event)}}/>
        <label htmlFor='no'>NO</label>
        <input type='radio' name='smoker' value='no' id='no' onChange={(event) => { handleSmoker(event)}}/>
      </div>
      <label htmlFor='message'>Message</label>
      <textarea placeholder='Tell us about yourself. Why are you donating? How much milk do you have available?' />
      <button className='button' onClick={() => handleDonorSubmit()}>Submit</button>
    </form>
  )
};

export default DonateMilkForm;