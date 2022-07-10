import './styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Academlo 2022</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="https://github.com/Ilaah" className="redes__links" target='_blank'>
          <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="https://www.linkedin.com/in/julio-enrique/" className="redes__links" target='_blank'>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;