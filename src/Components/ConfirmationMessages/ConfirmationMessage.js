const ConfirmationMessage = () => {
  return (
    <article className='main-container message' data-testid='confirmation-message'>
      <h2>Message Sent!</h2>
      <p>Thank you for contacting a donor. Keep an eye on your email or phone for a response from them.</p>
      <p>Best wishes!</p>
    </article>
  )
};

export default ConfirmationMessage;