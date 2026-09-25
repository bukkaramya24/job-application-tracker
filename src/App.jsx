import {HashRouter,Routes,Route} from 'react-router'

import Navbar from './components/Navbar'

import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications'
import AddApplication from './pages/AddApplication'
import Profile from './pages/Profile'

import './App.css'

function App(){
  return (
    <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/add" element={<AddApplication />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </HashRouter>
    
    


   
  );
}

export default App