import './NavContinents.css';
import { Link } from 'react-router-dom';
import map from '../Images/map.png';

function NavContinents() {
  return (
    <div>
      <nav className="main-nav-container">
        <ul className="ul-cont">
          <li>
            <Link to="/" className="back">
              <i className="material-symbols-outlined">arrow_back_ios</i>
              <p className="control-font">2023</p>
            </Link>
          </li>
          <li className="title">COVID-19 CASES BY CONTINENTS</li>
          <div className="icons-container">
            <i className="material-symbols-outlined">mic</i>
            <i className="material-symbols-outlined">settings</i>
          </div>
        </ul>
      </nav>
      <div className="map">
        <img className="nav-logo" src={map} alt="logo" />
      </div>
    </div>
  );
}

export default NavContinents;
