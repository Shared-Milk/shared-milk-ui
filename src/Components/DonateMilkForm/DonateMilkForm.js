import './DonateMilkForm.scss';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const DonateMilkForm = () => {
  const [smoker, setSmoker] = useState();
  const [donorName, setDonorName] = useState();
  const [donorEmail, setDonorEmail] = useState();
  const [donorPhone, setDonorPhone] = useState();
  const [donorCity, setDonorCity] = useState();
  const [donorState, setDonorState] = useState();
  const [donorBio, setDonorBio] = useState();

  const handleSmoker = (event) => {
    setSmoker(event.target.value)
  }

  const handleDonorName = (event) => {
    setDonorName(event.target.value)
  }

  const handleDonorEmail = (event) => {
    setDonorEmail(event.target.value)
  }

  const handleDonorPhone = (event) => {
    setDonorPhone(event.target.value)
  }

  const handleDonorCity = (event) => {
    setDonorCity(event.target.value)
  }

  const handleDonorState = (event) => {
    setDonorState(event.target.value)
  }

  const handleDonorBio = (event) => {
    setDonorBio(event.target.value)
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
      <input type='text' placeholder='First & Last Name' onChange={(event) => { handleDonorName(event) }}/>
      <label htmlFor='Email Address'>Email Address</label>
      <input type='email' placeholder='Email Address' onChange={(event) => { handleDonorEmail(event) }} />
      <label htmlFor='Phone Number'>Phone Number</label>
      <input type='tel' placeholder='Phone Number' onChange={(event) => { handleDonorPhone(event) }} />
      <label htmlFor='City'>City</label>
      <input type='text' placeholder='City' onChange={(event) => { handleDonorCity(event) }}/>
      <label htmlFor='State'>State</label>
      <input type='text' placeholder='State' onChange={(event) => { handleDonorState(event) }}/>
      <p className='form-question'>Have you used any tobacco products in the last 6 weeks?</p>
      <div className='form-group'>
        <label htmlFor='yes'>YES</label>
        <input type='radio' name='smoker' value='yes' onChange={(event) => {handleSmoker(event)}}/>
        <label htmlFor='no'>NO</label>
        <input type='radio' name='smoker' value='no' id='no' onChange={(event) => { handleSmoker(event)}}/>
      </div>
      <label htmlFor='message'>Message</label>
      <textarea placeholder='Tell us about yourself. Why are you donating? How much milk do you have available?' onChange={(event) => { handleDonorBio(event) }}/>
      <button className='button' onClick={() => handleDonorSubmit()}>Submit</button>
    </form>
  )
};

export default DonateMilkForm;