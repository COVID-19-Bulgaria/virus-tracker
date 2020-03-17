import { NextSeo } from 'next-seo';
import {
  Container,
  Accordion,
  Row,
  Col,
} from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import CollapsibleCard from '../components/CollapsibleCard';
import ExternalLink from '../components/ExternalLink';

const WhatWeKnow = () => (
  <BaseLayout>
    <NextSeo
      title="Какво знаем за коронавируса?"
      description="Симптоми, предаване, лечение и превенция на коронавируса"
      openGraph={{
        images: [
          {
            url: `https://coronavirus-bulgaria.org/static/images/open_graph_faq.png?v=${process.env.BUILD_ID}`,
            width: 1200,
            height: 630,
            alt: 'Какво знаем за коронавируса?',
          },
        ],
      }}
    />

    <Container fluid>
      <div className="d-sm-flex align-items-center justify-content-between my-4">
        <h1 className="h3 mb-0 text-gray-800">Какво знаем за коронавируса?</h1>
      </div>

      <Row>
        <Col>
          <Accordion bsPrefix="custom-accordion">
            <CollapsibleCard anchor="covid19" title="Какво е COVID-19?">
              <strong>COVID-19</strong>
              &nbsp;(Коронавирусна болест 2019) е името на болестта, която се причинява от&nbsp;
              <strong>SARS-CoV-2</strong>
              &nbsp;(тежък остър респираторен синдром коронавирус 2).
            </CollapsibleCard>
            <CollapsibleCard anchor="source" title="Кога и от къде се е появил?">
              <p>
                В края на месец Декември 2019г. китайските власти обявиха пред Световната Здравна
                Организация, че са изправени пред нов неизвестен до момента вирус, който причинява
                масова пневмония на хората от гр. Ухан.
              </p>
              <p className="mb-0">
                Предполага се, че вирусът е пренесен от прилеп върху човек около Ноември 2019г.
              </p>
            </CollapsibleCard>
            <CollapsibleCard anchor="symptoms" title="Какви са симптомите на болестта?">
              <p>
                Симптомите на COVID-19 не са строго специфични. Най-често проявената симптоматика
                включва:
              </p>
              <ul>
                <li>затруднено дишане</li>
                <li>задух</li>
                <li>висока температура</li>
                <li>суха кашлица</li>
              </ul>
              <p>
                Докладвани са и симптоми като отпадналост и мускулни болки. По-сериозните случаи
                развиват тежка пневмония, остър респираторен дистрес синдром, сепсис и септичен
                шок, които могат да доведат до смърт. Хората със съществуващи хронични заболявания
                изглежда са по-предразположени към тежко протичане на заболяването.
              </p>
              <p className="mb-0">
                Ако наблюдавате някой от гореизброените симптоми и имате проблем с дишането,
                незабавно потърсете медицинска помощ.
              </p>
            </CollapsibleCard>
            <CollapsibleCard anchor="incubation-period" title="Какъв е инкубационният период?">
              Инкубационният период (времето от заразяването на организма до появата на първите
              симптоми) понастоящем се наблюдава между 2-12 дни. Някои хора могат да предават
              вируса без да са налице някакви симптоми или преди симптомите да се появят.
            </CollapsibleCard>
            <CollapsibleCard anchor="transmission" title="Как се разпространява вирусът?">
              Въпреки че първоизточник на инфекцията са животни, вирусът се предава от човек на
              човек. Към момента няма достатъчно епидемиологична информация, която да потвърди
              колко лесно и устойчиво вирусът се предава между хората. Изглежда вирусът се предава
              главно чрез въздушни капчици, когато хората кихат, кашлят или издишат.
            </CollapsibleCard>
            <CollapsibleCard anchor="treatment" title="Как се лекува болестта и съществува ли превенция?">
              Понастоящем няма специфично лечение на пациенти, заразени с коронавирус. За тях се
              полагат поддържащи грижи. Няма ваксина срещу коронавируси, включително щам COVID-19.
              Ето защо е много важно да се предпазим от инфекция или да задържим по-нататъшно
              разпространение на заразата.
            </CollapsibleCard>
            <CollapsibleCard anchor="sources" title="Източници и допълнително информация">
              <ul>
                <li>
                  <ExternalLink href="http://www.mh.government.bg/bg/novini/aktualno/informaciya-ot-evropejskiya-centr-za-prevenciya-i-/">
                    Информация от Европейския център за превенция и контрол на заболяванията
                    относно новия коронавирус – 2019-nCov
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://bg.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BD%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F_%D0%BE%D1%82_%D0%BA%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%81_(2019-2020)">
                    Пандемия от коронавирус (2019-2020)
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
                    Coronavirus disease (COVID-19) outbreak
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html">
                    Coronavirus Disease 2019 (COVID-19)
                  </ExternalLink>
                </li>
              </ul>
            </CollapsibleCard>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </BaseLayout>
);

export default WhatWeKnow;
