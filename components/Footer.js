import { Container } from 'react-bootstrap';
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t, lang } = useTranslation();
  const noLang = lang === 'bg';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky-footer bg-white mt-3">
      <Container className="my-auto">
        <div className="copyright text-center my-auto">
          <div className="mb-2">
            &copy; Coronavirus-Bulgaria.org
            <br />
            {currentYear > 2020 ? `2020 - ${currentYear}` : '2020'}
          </div>
          <span>{t('common:footer.disclaimer')}</span>

          <div className="mt-2">
            <Link href="/privacy" as={t('common:footer.privacy.as')} noLang={noLang} prefetch={false}><a title={t('common:footer.privacy.title')}>{t('common:footer.privacy.title')}</a></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
