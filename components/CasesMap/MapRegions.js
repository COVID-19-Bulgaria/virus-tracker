import PropTypes from 'prop-types';
import { GeoJSON } from 'react-leaflet';
import useTranslation from 'next-translate/useTranslation';

const MapRegions = (props) => {
  const {
    geoJson,
    regionsNameMapping,
    regionsDataset,
  } = props;

  const { t } = useTranslation();

  const casesToColor = (cases) => {
    if (cases < 100) return 'green';
    if (cases < 200) return 'yellow';
    if (cases < 500) return 'red';
    if (cases < 1000) return 'darkred';

    return 'purple';
  };

  const regionStyle = (feature) => {
    const {
      properties: { nuts3 },
    } = feature;

    const regionName = regionsNameMapping[nuts3];
    const regionDataset = regionsDataset[regionName];

    return {
      fillColor: casesToColor(regionDataset.infected_14d_100k),
      weight: 1.5,
      opacity: 0.5,
      color: 'white',
      fillOpacity: 0.5,
    };
  };

  const tooltipText = (region, regionDataset) => `
      <strong>${region}</strong>
      <br />
      ${t('map:region_tooltip.infected')}: ${regionDataset.infected}
      <br />
      ${t('map:region_tooltip.newly_infected')}: ${regionDataset.newly_infected}
      <br />
      ${t('map:region_tooltip.infected_14d_100k')}: ${regionDataset.infected_14d_100k}
      <br />
      ${t('map:region_tooltip.doses')}: ${regionDataset.doses}
      <br />
      ${t('map:region_tooltip.new_doses')}: ${regionDataset.new_doses}
      <br />
      ${t('map:region_tooltip.fully_vaccinated')}: ${regionDataset.fully_vaccinated}
      <br />
      ${t('map:region_tooltip.booster')}: ${regionDataset.booster}
      <br />
      ${t('map:region_tooltip.new_booster')}: ${regionDataset.new_booster}
      <br />
  `;

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        const regionName = regionsNameMapping[e.target.feature.properties.nuts3];
        const regionDataset = regionsDataset[regionName];

        layer.bindTooltip(tooltipText(regionName, regionDataset));
        layer.openTooltip();
      },
      mouseout: () => {
        layer.unbindTooltip();
        layer.closeTooltip();
      },
    });
  };

  return (
    <GeoJSON
      data={geoJson}
      style={regionStyle}
      onEachFeature={onEachFeature}
    />
  );
};

MapRegions.propTypes = {
  geoJson: PropTypes.object.isRequired,
  regionsNameMapping: PropTypes.object.isRequired,
  regionsDataset: PropTypes.object.isRequired,
};

export default MapRegions;
