import './MilkRequestForm.scss';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MilkRequestForm = () => {
  const location = useLocation();
  const name = location.state.name || 'user';
  const [recipientName, setRecipientName] = useState();
  const [recipientEmail, setRecipientEmail] = useState();
  const [recipientPhone, setRecipientPhone] = useState();
  const [recipientMessage, setRecipientMessage] = useState();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  const handleChange = (event) => {
    if (event.target.name === 'recipientName') {
      setRecipientName(event.target.value)
      return recipientName
    }
    if (event.target.name === 'recipientEmail') {
      setRecipientEmail(event.target.value)
      return recipientEmail
    }
    if (event.target.name === 'recipientPhone') {
      setRecipientPhone(event.target.value)
      return recipientPhone
    }
    if (event.target.name === 'recipientMessage') {
      setRecipientMessage(event.target.value)
      return recipientMessage
    }
  }

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('sent-confirmation')
  }


  return (
    <section className='main-container'>
      <h2>Connect with { name }</h2>
      <form>
        <label htmlFor='First Name'>Your Name</label>
        <input type='text' name='recipientName' onChange={ (event) => handleChange(event) } placeholder='First & Last Name' />
        <label htmlFor='Email Address'>Email Address</label>
        <input type='email' placeholder='Email Address' onChange={ (event) => { handleChange(event) } } />
        <label htmlFor='Phone Number'>Phone Number</label>
        <input type='tel' name='recipientPhone' onChange={ (event) => handleChange(event) } placeholder='Phone Number' />
        <label htmlFor='Message'>Message</label>
        <textarea name='recipientMessage' onChange={ (event) => handleChange(event) } placeholder='How much milk do you need? When do you need it? Tell your donor more about yourself.' />
        {/* <Link to='/sent-confirmation' className='button'>Send Message</Link> */}
        <button className='button' onClick={ () => handleSubmit() }>Submit</button>
      </form>
    </section>
  )
};

export default MilkRequestForm;