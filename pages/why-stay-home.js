import dynamic from 'next/dynamic';
import {
  Container,
  Card,
  Badge,
  Figure,
} from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import BaseLayout from '../components/BaseLayout';
import AlertWithIcon from '../components/AlertWithIcon';
import SimulationCounters from '../components/SimulationCounters';
import ExternalLink from '../components/ExternalLink';

const TransmissionSketch = dynamic(
  () => import('../simulations/sketches/TransmissionSketch'),
  { ssr: false },
);

const ImmunitySketch = dynamic(
  () => import('../simulations/sketches/ImmunitySketch'),
  { ssr: false },
);

const NoRestrictionsSketch = dynamic(
  () => import('../simulations/sketches/NoRestrictionsSketch'),
  { ssr: false },
);

const StayHomeSketch = dynamic(
  () => import('../simulations/sketches/StayHomeSketch'),
  { ssr: false },
);

const WhyStayHome = () => (
  <BaseLayout>
    <NextSeo
      title="Защо да останем вкъщи?"
      description="Няколко симулации, които показват защо е важно да останем вкъщи"
      openGraph={{
        images: [
          {
            url: `https://coronavirus-bulgaria.org/static/images/open_graph_social_distancing.png?v=${process.env.BUILD_ID}`,
            width: 1200,
            height: 630,
            alt: 'Защо да останем вкъщи?',
          },
        ],
      }}
    />
    <Container fluid>
      <div className="d-sm-flex align-items-center justify-content-between my-4">
        <h1 className="h3 mb-0 text-gray-800">Защо да останем вкъщи?</h1>
      </div>
      <Card className="shadow">
        <Card.Body>
          <AlertWithIcon variant="info" iconClass="fa fa-info fa-lg">
            Симулациите на тази страница са вдъхновени от статията:
            <br />
            <ExternalLink href="https://www.washingtonpost.com/graphics/2020/world/corona-simulator/">
              Why outbreaks like coronavirus spread exponentially, and how to &quot;flatten the
              curve&quot;
            </ExternalLink>.
          </AlertWithIcon>

          <p>
            За да разберем, защо е важно да си останем вкъщи по време на извънредното положение
            ще разгледаме начина, по който се разпространява хипотетичен вирус и как действията
            или бездействията на обществото биха оказали влияние върху това разпространение. Да
            започваме!
          </p>

          <strong>Легенда:</strong>
          <ul>
            <li>
              <Badge pill variant="secondary">
                <i className="fas fa-smile" />
                &nbsp;
                Незасегнат
              </Badge>
            </li>
            <li>
              <Badge pill variant="warning">
                <i className="fas fa-radiation" />
                &nbsp;
                Заразен
              </Badge>
            </li>
            <li>
              <Badge pill variant="success">
                <i className="fas fa-notes-medical" />
                &nbsp;
                Излекуван
              </Badge>
            </li>
          </ul>

          <p>
            Хипотетично сме открили нов вирус, който се разпространява по въздушно-капков път.
            За целите на визуализацията ще приемем, че заразен човек винаги заразява незаразен
            човек при евентуален контакт. Това е илюстрирано в следващата анимация:
          </p>
          <TransmissionSketch className="mx-auto" replayProps={{ replayText: 'Виж отново' }} />

          <p>
            След известно време всеки заразен се възстановява. По този начин придобива имунитет
            към болестта и при евентуална следваща среща със заразен не може да бъде заразен:
          </p>
          <ImmunitySketch className="mx-auto" replayProps={{ replayText: 'Виж отново' }} />

          <p>
            Правилата са прости, а сега да проверим как ще се разпространи нашата хипотетична
            зараза в една общност от 200 души, измежду които 1 е заразен и свободно се движи
            и контактува с други хора:
          </p>
          <NoRestrictionsSketch className="mx-auto" CountersComponent={SimulationCounters} />

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
          <StayHomeSketch className="mx-auto" stayHomePercentage={0.5} CountersComponent={SimulationCounters} />

          <p>
            Изглежда мерките дават резултат и разпространението е забавено. Въпреки това отново
            здравните заведения функционират при максимален капацитет, затова въвеждаме още
            по-строги мерки в нашата симулация и принуждаваме хората да се дистанцират социално.
            Следващата симулация показва резултата от мерките при едва 20% контактуваща популация:
          </p>
          <StayHomeSketch className="mx-auto" stayHomePercentage={0.80} CountersComponent={SimulationCounters} />

          <p>
            Постигнахме целта си - здравните заведения в нашата симулация могат да поемат всички
            заразени във всеки един момент и да имат свободен капацитет за странични случаи, които
            не са свързани с хипотетичния вирус.
          </p>

          <AlertWithIcon variant="info" iconClass="fa fa-lightbulb fa-lg">
            <strong>Извод:</strong>
            &nbsp;Социалното дистанциране удължава времето, за което заразата се разпространява сред
            популацията. По този начин капацитетът на здравната система не е надхвърлен.
          </AlertWithIcon>

          <Figure>
            <Figure.Image
              fluid
              src="/static/images/social_distancing.svg"
            />
          </Figure>

          <AlertWithIcon variant="warning" iconClass="fa fa-exclamation fa-lg">
            <strong>Важно:</strong>
            &nbsp;Предходните симулации представляват много опростен модел на социалните процеси,
            които се случват в реални условия. Съществуват много странични фактори, които влияят на
            начина на разпространение на истинска болест като COVID-19.
          </AlertWithIcon>

          <p>
            Бъдете здрави, съобразявайте се с наложените от държавата мерки и си останете вкъщи!
          </p>
        </Card.Body>
      </Card>
    </Container>
  </BaseLayout >
);

export default WhyStayHome;
