import PropTypes from 'prop-types';
import { useEffect } from 'react';
import L from 'leaflet';
import useTranslation from 'next-translate/useTranslation';

const Legend = ({ map }) => {
  const { t } = useTranslation();

  const casesToColor = (cases) => {
    if (cases < 100) return 'green';
    if (cases < 200) return 'yellow';
    if (cases < 500) return 'red';
    if (cases < 1000) return 'darkred';

    return 'purple';
  };

  useEffect(() => {
    if (!map) return;

    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0, 100, 200, 500, 1000];
      const labels = [];
      let from;
      let to;

      for (let i = 0; i < grades.length; i += 1) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(`<i style="background-color: ${casesToColor(from + 1)};">&nbsp;&nbsp;&nbsp;&nbsp;</i> ${from} ${(to ? `&ndash; ${to}` : '+')}`);
      }

      div.innerHTML = `<strong>${t('map:legend')}</strong><br>${labels.join('<br>')}`;
      return div;
    };

    legend.addTo(map);
  }, [map]);

  return null;
};

Legend.propTypes = {
  map: PropTypes.object,
};

Legend.defaultProps = {
  map: null,
};

export default Legend;
