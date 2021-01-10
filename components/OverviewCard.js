import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Badge,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';

const OverviewCard = (props) => {
  const {
    title,
    value,
    today,
    diff,
    icon,
    variant,
    diffTranslationPrefix,
  } = props;

  const { t } = useTranslation();
  const diffType = diff > 0 && today >= 0 ? t('home:charts.higher') : t('home:charts.lower');

  return (
    <Card className={`border-left-${variant} shadow h-100 py-2`}>
      <Card.Body>
        <Row noGutters className="align-items-center">
          <Col className="mr-2">
            <div className={`text-xs font-weight-bold text-${variant} text-uppercase mb-1`}>
              {title}
            </div>
            <div className="h5 mb-0 font-weight-bold text-gray-800">
              {value}
              <OverlayTrigger overlay={(
                <Tooltip>
                  <small>
                    {today >= 0 && t(`home:charts.${diffTranslationPrefix ? `${diffTranslationPrefix}.` : ''}new_cases_today`, { count: today })}
                    &nbsp;
                    {t(`home:charts.${diffTranslationPrefix ? `${diffTranslationPrefix}.` : ''}diff_cases`, { count: Math.abs(today >= 0 ? diff : today), diffType })}
                  </small>
                </Tooltip>
              )}
              >
                <sup>
                  <Badge variant="light">
                    {
                      diff > 0 && today >= 0
                        ? <i className="fas fa-caret-up" />
                        : <i className="fas fa-caret-down" />
                    }
                    &nbsp;
                    {today}
                  </Badge>
                </sup>
              </OverlayTrigger>
            </div>
          </Col>
          <div className="col-auto">
            <FontAwesomeIcon icon={icon} size="2x" className="text-gray-300" />
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

OverviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  today: PropTypes.number.isRequired,
  diff: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired,
  variant: PropTypes.string.isRequired,
  diffTranslationPrefix: PropTypes.string,
};

OverviewCard.defaultProps = {
  diffTranslationPrefix: '',
};

export default OverviewCard;
