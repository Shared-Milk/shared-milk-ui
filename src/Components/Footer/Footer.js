import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearBuilt = 2022;

  const selectYear = () => {
    return yearBuilt === currentYear ? currentYear : `${yearBuilt} - ${currentYear}`;
  }
  
  return (
    <footer>
      <p>Copyright © {selectYear()} No Use Cryin' Over Shared Milk</p>
    </footer>
  )
};

export default Footer;