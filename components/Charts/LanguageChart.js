import PropTypes from 'prop-types';
import BaseChart from './BaseChart';

const CHARTS_SRC = {
  active_cases: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/ActiveCases.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/ActiveCases.svg',
  },
  historical_cases: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/HistoricalCases.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/HistoricalCases.svg',
  },
  date_tests_positivity: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/DateTestsPositivity.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/DateTestsPositivity.svg',
  },
  date_cases_age: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/DateCasesAge.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/DateCasesAge.svg',
  },
  date_vaccination_timeline: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/DateVaccinationTimeline.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/DateVaccinationTimeline.svg',
  },
  weekly_vaccination_timeline: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyVaccinationTimeline.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyVaccinationTimeline.svg',
  },
  week_cases_age: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeekCasesAge.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeekCasesAge.svg',
  },
  weekly_14_days_forecast: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/Weekly14DaysForecast.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/Weekly14DaysForecast.svg',
  },
  weekly_antigen_tests_positivity: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyAntigenTestsPositivity.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyAntigenTestsPositivity.svg',
  },
  weekly_pcr_tests_positivity: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyPCRTestsPositivity.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyPCRTestsPositivity.svg',
  },
  weekly_tests_positivity: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyTestsPositivity.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyTestsPositivity.svg',
  },
  weekly_hospitalized_intensive_fatal_cases: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyHospitalizedIntensiveCareFatal.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyHospitalizedIntensiveCareFatal.svg',
  },
  weekly_infected_cured_cases: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyInfectedCured.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyInfectedCured.svg',
  },
  weekly_places_cases: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/WeeklyPlacesCases.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/WeeklyPlacesCases.svg',
  },
  rolling_biweekly_places_cases: {
    bg: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/bg/RollingBiWeeklyPlacesCases.svg',
    en: 'https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-stats/stats/en/RollingBiWeeklyPlacesCases.svg',
  },
};

const LanguageChart = (props) => {
  const { id, lang } = props;
  const src = CHARTS_SRC[id][lang];

  return <BaseChart src={src} />;
};

LanguageChart.propTypes = {
  id: PropTypes.oneOf([
    'active_cases',
    'historical_cases',
    'date_tests_positivity',
    'date_cases_age',
    'date_vaccination_timeline',
    'weekly_vaccination_timeline',
    'week_cases_age',
    'weekly_14_days_forecast',
    'weekly_antigen_tests_positivity',
    'weekly_pcr_tests_positivity',
    'weekly_tests_positivity',
    'weekly_hospitalized_intensive_fatal_cases',
    'weekly_infected_cured_cases',
    'weekly_places_cases',
    'rolling_biweekly_places_cases',
  ]).isRequired,
  lang: PropTypes.oneOf(['bg', 'en']).isRequired,
};

export default LanguageChart;
