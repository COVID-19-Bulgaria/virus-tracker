import { NextSeo } from 'next-seo';
import {
  Container,
  Row,
  Col,
  Accordion,
  Button,
} from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import CollapsibleCard from '../components/CollapsibleCard';

const Privacy = () => (
  <BaseLayout>
    <NextSeo title="Политика за поверителност" />
    <Container fluid>
      <div className="d-sm-flex align-items-center justify-content-between mt-4">
        <h1 className="h3 mb-0 text-gray-800">Политика за поверителност</h1>
      </div>
      <Row className="mt-3">
        <Col>
          <Accordion bsPrefix="custom-accordion">
            <CollapsibleCard anchor="policy" title="Каква е политиката ни относно поверителността?">
              Ние приемаме поверителността на потребителите си изключително сериозно и не
              споделяме или продаваме личната Ви информация на трети лица или несвързани компании.
              Ангажираме се да спазваме правото Ви на лично пространство и конфиденциалност.
              Информация на трети страни може да бъде предоставена само и единствено ако тя
              е изискана от компетентни органи, по процедурите посочени в нормативната уредба
              на Република България.
            </CollapsibleCard>
            <CollapsibleCard anchor="data" title="Каква информация събираме от посетителите?">
              За всеки посетител събираме статистическа информация включваща тип на устройството,
              операционна система, версия и модел на използвания браузър, прекарано време в
              страниците, местоположение и др. За част от действията, извършени посредством
              функционалността на системата, се запазва и IP адресът на посетителя. Не се съхранява
              демогафска информация за посетителите от типа на пол, възраст, изповядвана религия,
              интереси, модели за поведение и др.
            </CollapsibleCard>
            <CollapsibleCard anchor="usage" title="За какви цели използваме информацията?">
              Събираната от нас информация се използва за подобряване на предоставените услуги,
              статистически отчети и обратна връзка.
            </CollapsibleCard>
            <CollapsibleCard anchor="cookies" title="Бисквитки">
              Използваме бисквитки (&quot;Cookies&quot;), за да анализираме потребителското
              поведение и да подобрим предлаганите функционалности. Бисквитките съдържат малко
              количество информация, записано в регистрите на Вашия уеб браузър, и по никакъв начин
              не могат да навредят на работата на системата Ви или да инсталират вреден софтуер.
              Бисквитките могат да бъдат изискани и достъпени само от уебсайта, от който са
              издадени.
            </CollapsibleCard>
            <CollapsibleCard anchor="partners" title="На кого споделяме вашите лични данни?">
              Не споделяме или продаваме личната Ви информация на трети лица или несвързани
              компании. Въпреки това уебсайтът функционира, използвайки определени услуги на
              други компании. Споделянето на личната Ви информация се осъществява когато Вие
              предоставите Вашето разрешение.
              <ul>
                <li>
                  Google Ireland Ltd. - Google Analytics, Google Tag Manager -
                  <a href="https://safety.google/privacy/" target="_blank" rel="noopener noreferrer">
                    https://safety.google/privacy/
                  </a>
                </li>
              </ul>
            </CollapsibleCard>
            <CollapsibleCard anchor="preferences" title="Управление на услуги">
              <div>
                Даваме възможност на потребителите да променят предпочитанията си за нашите услуги.
                <br />
                Кликнете на бутона, за да промените предпочитанията си:
              </div>
              <Button className="mt-2" onClick={() => window.tarteaucitron.userInterface.openPanel()}>
                Управление на услуги
              </Button>
            </CollapsibleCard>
            <CollapsibleCard anchor="changes" title="Промяна в политиката за поверителност">
              Запазваме си правото да извършваме промени по политиката за поверителност. Промените
              ще бъдат оповестявани на текущата страница. Потребителят следва проактивно да се
              информира за актуалната политика за поверителност.
            </CollapsibleCard>
          </Accordion>
          <div className="mb-3"><small>Дата на последна промяна: 13.03.2020г.</small></div>
        </Col>
      </Row>
    </Container>
  </BaseLayout>
);

export default Privacy;
