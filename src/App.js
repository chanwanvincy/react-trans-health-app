// layout
import NavBar from './layout/NavBar';
import DocList from './components/DoctorsList';


// pages
import LandingPage from './pages/Landing';
import ListPage from './pages/List';
import AboutPage from './pages/About';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';


import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/List" element={<ListPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
    </>

  );
}

export default App;
