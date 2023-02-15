import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Continent.css';

const Continent = (props) => {
  const {
    continentName,
    cases,
  } = props;

  return (
    <li className="continent-li">
      <div>
        <i className="circle-arrow material-symbols-outlined">arrow_circle_right</i>
      </div>
      <Link to={`/${continentName}`} className="continent-card">
        <h2 className="continent-section-title">{continentName}</h2>
        <p className="cases-country">{cases}</p>
      </Link>
    </li>
  );
};

Continent.propTypes = {
  continentName: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
};

export default Continent;
