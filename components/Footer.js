import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="sticky-footer bg-white">
    <Container className="my-auto">
      <div className="copyright text-center my-auto">
        <span>
          Този уебсайт не е официален източник на информация.
          Информацията публикувана тук е с изследователски харакер.
        </span>
      </div>
    </Container>
  </footer>
);

export default Footer;
