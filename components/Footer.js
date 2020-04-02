import { Container } from 'react-bootstrap';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t, lang } = useTranslation();
  const noLang = lang === 'bg';

  return (
    <footer className="sticky-footer bg-white mt-3">
      <Container className="my-auto">
        <div className="copyright text-center my-auto">
          <div className="mb-2">
            &copy; Coronavirus Bulgaria - 2020
          </div>
          <span>{t('common:footer.disclaimer')}</span>

          <div className="mt-2">
            <Link href="/privacy" noLang={noLang}><a>{t('common:footer.privacy')}</a></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
