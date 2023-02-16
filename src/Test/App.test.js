import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from '../App';
import { reducerContinent, reducerContinents } from '../Redux/continents/continents';
import countriesReducer from '../Redux/countries/countries';
import HomePage from '../Pages/HomePage';

const setupStore = () => {
  const preloadedState = {
    continents: [
      {
        continentName: 'South America',
        cases: 59063198,
        countries: [
          'Argentina',
          'Bolivia',
          'Brazil',
          'Chile',
          'Colombia',
          'Ecuador',
          'Falkland Islands (Malvinas)',
          'French Guiana',
          'Guyana',
          'Paraguay',
          'Peru',
          'Suriname',
          'Uruguay',
          'Venezuela',
        ],
      },
    ],

    continent: [
      {
        active: 447884,
        activePerOneMillion: 1023.28,
        cases: 67874134,
        casesPerOneMillion: 155071.96,
        continent: 'South America',
        continentInfo: { lat: -15.6551563, long: -100.7484231 },
        countries: [
          'Argentina',
          'Bolivia',
          'Brazil', 'Chile',
          'Colombia',
          'Ecuador',
          'Falkland Islands (Malvinas)',
          'French Guiana',
          'Guyana',
          'Paraguay',
          'Peru',
          'Suriname',
          'Uruguay',
          'Venezuela'],
        critical: 10215,
        criticalPerOneMillion: 23.34,
        deaths: 1348886,
        deathsPerOneMillion: 3081.8,
        population: 437694443,
        recovered: 66077364,
        recoveredPerOneMillion: 150966.88,
        tests: 242148185,
        testsPerOneMillion: 553235.69,
        todayCases: 300,
        todayDeaths: 24,
        todayRecovered: 1149,
        updated: 1676474053538,
      },
    ],

    countries: [
      {
        countryName: 'Argentina',
        cases: 9341492,
        countryInfo: {
          flag: 'https://disease.sh/assets/img/flags/ar.png',
          _id: 32,
          iso2: 'AR',
          iso3: 'ARG',
          lat: -34,
          long: -64,
        },
        continent: 'South America',
      },
    ],
  };

  return configureStore({
    preloadedState,
    reducer: {
      continents: reducerContinents,
      continent: reducerContinent,
      countries: countriesReducer,
    },
  });
};

describe('Test the App components', () => {
  it('renders the App correctly', () => {
    const store = setupStore();
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('renders the Home page correctly', () => {
    const store = setupStore();
    const page = render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>,
    );
    expect(page).toMatchSnapshot();
  });

  it('Shows corresponding page when clicking the continents links', () => {
    const store = setupStore();
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('South America'));
    expect(container.getElementsByClassName('container-countries')).toHaveLength(1);
  });

  it('Shows Home page when clicking the back link', () => {
    const store = setupStore();
    const { container } = render(
      <Provider store={store}>
        <App url="/" />
      </Provider>,
    );
    fireEvent.click(screen.getByText('Back'));
    expect(container.getElementsByClassName('container')).toHaveLength(1);
  });
});
