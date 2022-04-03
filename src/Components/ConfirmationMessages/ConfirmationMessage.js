const ConfirmationMessage = () => {
  return (
    <article className='main-container message'>
      <h2 data-testid='confirmation'>Message Sent!</h2>
      <p data-testid='confirmation-msg'>Thank you for contacting a donor. Keep an eye on your email or phone for a response from them.</p>
      <p data-testid='confirmation-wishes'>Best wishes!</p>
    </article>
  )
};

export default ConfirmationMessage;