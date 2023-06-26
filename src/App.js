// layout
import NavBar from './layout/NavBar';
import DocList from './components/DoctorsList';


// pages
import LandingPage from './pages/Landing';
import ListPage from './pages/List';
import AboutPage from './pages/About';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import DoctorPage from './pages/Doctor';


import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [doctors, setDoctors] = useState([])
  const [currentDoctor, setCurrentDoctor] = useState([])
  const idRegex = /[0-200]/g
  const docPageUrl = `"/${idRegex}/info"`

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/List" element={<ListPage
          doctors={doctors}
          setDoctors={setDoctors}
        />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/:id/info" element={<DoctorPage
          doctors={doctors}
          currentDoctor={currentDoctor}
        />} />
      </Routes>
    </>

  );
}

export default App;
