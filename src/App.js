// layout
import NavBar from './Layout/NavBar';


// pages
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/SignUp';


import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
    </>

  );
}

export default App;
