import './HomePage.scss';

const HomePage = () => {
  return (
    <main className='home'>
      <aside className='mission'>
        <h2>Our Mission</h2>
        <p>To build connections between parents of baby’s in need and generous donors.</p>
        <p>Additional messaging about our mission... </p>
        <p>Message about providing resources and support..... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </aside>
      <aside className='buttons'>
        {/* will need "Link" the buttons below */}
        <button className='need'>
          Need Milk
        </button>
        <button className='donate'>
          Donate Milk
        </button>
        <button className='support'>
          Need Support
        </button>
      </aside>
    </main>
  )
};

export default HomePage;