import './MilkRequestForm.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const MilkRequestForm = () => {
  const location = useLocation();
  const name = location.state.name || 'user';
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isEmpty = Object.keys(errors).length === 0;

  const onSubmit = () => {
    if (isEmpty) {
      navigate('/sent-confirmation');
    }
  };

  return (
    <section className='main-container' data-testid='request-container' >
      <h2>Connect with { name }</h2>
      <form data-testid='request-form' onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor='First & Last Name'>Your Name</label>
        <input type='text'
          {...register('recipientName', {
          required: `* Is the baby-brain that bad?`,
            pattern: {
              value: /^[A-Z a-z -]+$/,
              message: `* We are not defined by numbers, only letters`
            }
        })}
          placeholder='First & Last Name' />
        <p className='error'>{ errors.recipientName?.message }</p>
        <label htmlFor='Email Address'>Email Address</label>
        <input type='email'
          {...register('recipientEmail', {
            required: `* Oh, fer cryin' out loud. We don't do snail mail. Just enter your email`,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: `* Are you sure this is your email? It doesn't match an email format.`
              }
          })}
            placeholder='Email Address' />
        <p className='error'>{ errors.recipientEmail?.message }</p>
        <label htmlFor='Phone Number'>Phone Number</label>
        <input type='tel'
          {...register('recipientPhone', {
            required: `* Can I have yo number??`,
              pattern: {
                value: /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
                message: `* That's one smelly diaper! Enter a valid US phone number`
              }
          })}
            onKeyPress={ (e) => !/[0-9]/.test(e.key) && e.preventDefault() } placeholder='Phone Number' />
        <p className='error'>{ errors.recipientPhone?.message }</p>
        <label htmlFor='Message'>Message</label>
        <textarea type='text'
          {...register('recipientMessage', {
            required: `* Are you feeding your muscles or your baby?`
          })}
          placeholder='How much milk do you need? When do you need it? Tell your donor more about yourself.' />
        <p className='error'>{ errors.recipientMessage?.message }</p>
        <button className='button' data-testid='request-button' type='submit'>Submit</button>
      </form>
    </section>
  )
};

export default MilkRequestForm;

MilkRequestForm.propTypes = {
  name: PropTypes.string
};
