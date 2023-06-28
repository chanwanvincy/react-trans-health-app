// layout
import NavBar from './layout/NavBar';
import DocList from './components/DoctorsList';


// pages
import LandingPage from './pages/Landing';
import ListPage from './pages/ListPage';
import AboutPage from './pages/About';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import DoctorPage from './pages/DoctorPage';
import AddPage from './pages/Add';
import EditPage from './pages/EditPage';


import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [doctors, setDoctors] = useState([])
  const getDoctors = () => {
    fetch('/api/doctors')
      .then(res => res.json())
      .then(doctors => setDoctors(doctors))
  }

  useEffect(getDoctors, [])
  // console.log('app level')
  // console.log(doctors)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage
          doctors={doctors}
        />} />
        <Route path="/list" element={<ListPage
          doctors={doctors}
        />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/info/:id" element={<DoctorPage
          doctors={doctors}
        />} />
        <Route path="/edit/:id" element={<EditPage
          doctors={doctors}
        />} />
        <Route path="add" element={<AddPage
          setDoctors={setDoctors}
        />} />
        {/* <Route path="/api/doctors" element={getDoctors} /> */}
      </Routes>
    </>

  );
}

export default App;
