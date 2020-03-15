import { NextSeo } from 'next-seo';
import { Container, Card } from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import ExternalLink from '../components/ExternalLink';

const About = () => (
  <BaseLayout>
    <NextSeo title="За проекта" />
    <Container fluid>
      <div className="d-sm-flex align-items-center justify-content-between my-4">
        <h1 className="h3 mb-0 text-gray-800">За проекта</h1>
      </div>
      <Card className="shadow">
        <Card.Body>
          <p>
            Към днешна дата официалният източник на статистическа информация относно
            разпространението на коронавируса в България е редовният брифинг на Националния
            оперативен щаб във ВМА. Тази информация се публикува и в сайта на&nbsp;
            <ExternalLink
              href="https://www.mh.government.bg/bg/informaciya-za-grazhdani/potvrdeni-sluchai-na-koronavirus-na-teritoriyata-na-r-blgariya/"
            >
              Министерство на Здравеопазването
            </ExternalLink>
            .
          </p>
          <p>
            Медиите отразяват непрекъснато информацията от редовния брифинг и обикновено я
            обобщават в края на деня. Така ако не следите често новините ще имате достъп до
            обобщена, а не пълна хронологична информация.
          </p>
          <p>
            Този уебсайт има за цел да проследи разпространението на заразата в България и да
            представи хронологично информацията в систематизиран и визуален вид. В бъдеще ще
            разширим функционалностите със симулации и обобщена научна информация за заразата.
          </p>
          <p>
            Уебсайтът е с нестопанска цел, с отворен код и се разпространява съгласно&nbsp;
            <ExternalLink
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
            </ExternalLink>
            . Изходният код може да намерите в&nbsp;
            <ExternalLink
              href="https://github.com/COVID-19-Bulgaria/virus-tracker"
            >
              GitHub
            </ExternalLink>
            .
          </p>
        </Card.Body>
      </Card>
    </Container>
  </BaseLayout>
);

export default About;
