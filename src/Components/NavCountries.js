import { Link } from 'react-router-dom';
import './NavCountries.css';
import { useSelector } from 'react-redux';

function NavCountries() {
  const { continent, cases } = useSelector((state) => state.continent);

  return (
    <div>
      <nav className="container-countries">
        <ul className="ul-container">
          <li>
            <Link to="/" className="back">
              <i className="material-symbols-outlined">arrow_back_ios</i>
              <p>Back</p>
            </Link>
          </li>
          <li className="title">CASES BY COUNTRIES</li>
          <div className="icons">
            <i className="material-symbols-outlined">mic</i>
            <i className="material-symbols-outlined">settings</i>
          </div>
        </ul>
      </nav>
      <div className="continent-name">
        <h2 className="upper-country">{continent}</h2>
        <p>{cases}</p>
      </div>
    </div>
  );
}

export default NavCountries;
