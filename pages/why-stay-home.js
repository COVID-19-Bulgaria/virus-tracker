import dynamic from 'next/dynamic';
import { Container, Card, Alert } from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import SimulationCounters from '../components/SimulationCounters';
import ExternalLink from '../components/ExternalLink';

const TransmissionSketch = dynamic(
  () => import('../simulations/sketches/TransmissionSketch'),
  { ssr: false }
);

const ImmunitySketch = dynamic(
  () => import('../simulations/sketches/ImmunitySketch'),
  { ssr: false }
);

const NoRestrictionsSketch = dynamic(
  () => import('../simulations/sketches/NoRestrictionsSketch'),
  { ssr: false }
);

const StayHomeSketch = dynamic(
  () => import('../simulations/sketches/StayHomeSketch'),
  { ssr: false }
);

const WhyStayHome = () => (
  <BaseLayout>
    <Container fluid>
      <div className="d-sm-flex align-items-center justify-content-between my-4">
        <h1 className="h3 mb-0 text-gray-800">Защо да останем вкъщи?</h1>
      </div>
      <Card className="shadow">
        <Card.Body>
          <Alert variant="info">
            Симулациите в тази страница са вдъхновени от статията&nbsp;
            <ExternalLink href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/">
              Why outbreaks like coronavirus spread exponentially, and how to "flatten the curve"
            </ExternalLink>.
          </Alert>

          <Alert variant="info">
            Резултатите от симулациите са уникални при всяко стартиране.
          </Alert>

          <p>
            За да разберем, защо е важно да си останем вкъщи по време на извънредното положение
            ще разгледаме начина, по който се разпространява хипотетичен вирус и как действията
            или бездействията на обществото биха оказали влияние върху това разпространение.
          </p>

          <p>
            Да започваме! Хипотетично сме открили нов вирус, който се разпространява по
            въздушно-капков път. За целите на визуализацията ще приемем, че заразен човек заразява
            незаразен човек при евентуален контакт. Това е илюстрирано в следващата анимация:
          </p>
          <TransmissionSketch />

          <p>
            След известно време всеки заразен се възстановява. По този начин придобива имунитет
            към заразата и при следваща среща със заразен не може да бъде заразен:
          </p>
          <ImmunitySketch />

          <p>
            Правилата са прости, а сега да проверим как ще се разпространи нашата хипотетична
            зараза в една общност от 200 души, измежду които 1 е заразен и свободно се движи
            и контактува с други хора:
          </p>
          <NoRestrictionsSketch CountersComponent={SimulationCounters} />

          <p>
            Както е видно от хистограмата, забелязваме рязко нарастване на броя заразени за кратък
            период от време. Нека да приемем хипотетично, че 100 души от заболелите се нуждаят от
            хоспитализация, но максималният капацитет на болниците е 50 души. Това означава, че
            останалите 50 души не биха получили пълноценна медицинска помощ.
          </p>

          <p>
            Продължаваме нашата симулация в посока да намалим риска от колапс на здравната система.
            Решаваме да въведем умерени рестриктивни мерки, при които 50% от общността в
            симулацията остава вкъщи (неподвижни топчета). Да проверим как тези мерки се
            отразяват на разпространението на заразата:
          </p>
          <StayHomeSketch stayHomePercentage={0.5} CountersComponent={SimulationCounters} />

          <p>
            Изглежда мерките дават резултат и разпространението е забавено. Въпреки това отново
            здравните заведения функционират при максимален капацитет, затова въвеждаме още
            по-строги мерки в нашата симулация и принуждаваме хората да се дистанцират социално.
            Следващата симулация показва резултата от мерките при едва 20% контактуваща популация:
          </p>
          <StayHomeSketch stayHomePercentage={0.80} CountersComponent={SimulationCounters} />

          <p>
            Постигнахме целта си - здравните заведения в нашата симулация могат да поемат във всеки
            един момент всички заразени и да имат свободен капацитет за странични случаи, които не
            са свързани с хипотетичния вирус. Постигнхме го със социално дистанциране.
          </p>
        </Card.Body>
      </Card>
    </Container>
  </BaseLayout >
);

export default WhyStayHome;
