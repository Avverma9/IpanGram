import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import Login from './components/Registration/Login';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';

import { useEffect, useState } from 'react';

import Intro from './components/Intro/Intro'
import Admin from './components/Employees/Employees';
import Department from './components/Department/Department';
import CreateDepartment from './components/Department/CreateDepartment';
import CreateEmployee from './components/Employees/CreateEmployee';

function App() {
  const [loggedin, setLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []); 

  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <CreateDepartment/>
        <CreateEmployee/>
        <Routes>
          <Route path='/:code' element={<Registration />} />
          <Route path='/' element={<Registration />} />
          <Route path='/home' element={<Intro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
         
          <Route path='/employees' element={<Admin/>} />
          <Route path='/department' element={<Department/>} />
        </Routes>
        <Footer />
       
      </Router>
    </div>
  );
}

export default App;
