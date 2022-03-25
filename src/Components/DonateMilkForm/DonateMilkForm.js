import './DonateMilkForm.scss';

const DonateMilkForm = () => {
  return (
    <form className='donor-form'>
      <label for='First Name'>First Name</label>
      <input type='text' placeholder='First Name' />
      <label for='Last Name'>Last Name</label>
      <input type='text' placeholder='Last Name' />
      <label for='Email Address'>Email Address</label>
      <input type='email' placeholder='Email Address' />
      <label for='Phone Number'>Phone Number</label>
      <input type='tel' placeholder='Phone Number' />
      <label for='City'>City</label>
      <input type='text' placeholder='City' />
      <label for='State'>State</label>
      <input type='text' placeholder='State' />
      <label for='yes'>YES</label>
      <input type='radio' />
      <label for='no'>NO</label>
      <input type='radio' />
      <label for='message'>Message</label>
      <textarea placeholder='Tell us about yourself. Why are you donating? How much milk do you have available?' />
      <button type='submit'>Submit</button>
    </form>
  )
};

export default DonateMilkForm;