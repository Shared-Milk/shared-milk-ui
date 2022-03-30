import './MilkRequestForm.scss';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MilkRequestForm = () => {
  const location = useLocation();
  const name = location.state.name || 'user';
  // const [recipientName, setRecipientName] = useState();
  // const [recipientEmail, setRecipientEmail] = useState();
  // const [recipientPhone, setRecipientPhone] = useState();
  // const [recipientMessage, setRecipientMessage] = useState();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data)};
  console.log(errors)
  // console.log(onValid)

  // const handleChange = (event) => {
  //   if (event.target.name === 'recipientName') {
  //     setRecipientName(event.target.value)
  //     return recipientName
  //   }
  //   if (event.target.name === 'recipientEmail') {
  //     setRecipientEmail(event.target.value)
  //     return recipientEmail
  //   }
  //   if (event.target.name === 'recipientPhone') {
  //     setRecipientPhone(event.target.value)
  //     return recipientPhone
  //   }
  //   if (event.target.name === 'recipientMessage') {
  //     setRecipientMessage(event.target.value)
  //     return recipientMessage
  //   }
  // }

  const navigate = useNavigate();

  // const handleNavigation = () => {
  //   // onSubmit()
  //   navigate('sent-confirmation')
  // }


  return (
    <section className='main-container'>
      <h2>Connect with { name }</h2>
      <form onSubmit={ handleSubmit(!errors && navigate('sent-confirmation')) }>
        <label htmlFor='First & Last Name'>Your Name</label>
        <input {...register('recipientName', { required: 'This field required' })} type='text' placeholder='First & Last Name' />
        <p>{ errors.recipientName?.message }</p>
        <label htmlFor='Email Address'>Email Address</label>
        <input {...register('recipientEmail', {required: 'This field required'})} type='email' placeholder='Email Address' />
        <p>{ errors.recipientEmail?.message }</p>
        <label htmlFor='Phone Number'>Phone Number</label>
        <input {...register('recipientPhone', { required: 'This field required' })} type='tel' placeholder='Phone Number' />
        <p>{ errors.recipientPhone?.message }</p>
        <label htmlFor='Message'>Message</label>
        <textarea {...register('recipientMessage', { required: 'This field required' })} placeholder='How much milk do you need? When do you need it? Tell your donor more about yourself.' />
        <p>{ errors.recipientMessage?.message }</p>
        {/* <Link to='/sent-confirmation' className='button'>Send Message</Link> */}
        <button className='button' onSubmit={onSubmit} type='submit'>Submit</button>
      </form>
    </section>
  )
};

export default MilkRequestForm;