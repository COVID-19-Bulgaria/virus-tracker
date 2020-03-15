import { Container } from 'react-bootstrap';
import Link from './Link';

const Footer = () => (
  <footer className="sticky-footer bg-white mt-3">
    <Container className="my-auto">
      <div className="copyright text-center my-auto">
        <span>
          Този уебсайт не е официален източник на информация.
          Информацията публикувана тук е с изследователски харакер.
        </span>

        <div className="mt-2">
          <Link href="/privacy"><a>Поверителност</a></Link>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
