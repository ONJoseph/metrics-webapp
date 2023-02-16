import {
  HashRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import CountriesList from './Components/CountriesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<DetailsPage />} />
        <Route path="/:continentName" element={<CountriesList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
