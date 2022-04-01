import './MilkRequestForm.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MilkRequestForm = () => {
  const location = useLocation();
  const name = location.state.name || 'user';
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isEmpty = Object.keys(errors).length === 0;
  
  const onSubmit = () => {
    if (isEmpty) {
      navigate('/sent-confirmation')
    }
  };

  return (
    <section className='main-container'>
      <h2>Connect with { name }</h2>
      <form onSubmit={ handleSubmit(onSubmit) }>
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
        <textarea type='text' {...register('recipientMessage', { required: 'This field required' })} placeholder='How much milk do you need? When do you need it? Tell your donor more about yourself.' />
        <p>{ errors.recipientMessage?.message }</p>
        <button className='button' type='submit'>Submit</button>
      </form>
    </section>
  )
};

export default MilkRequestForm;