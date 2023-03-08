import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Offers from './components/Offers'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      
      <Navbar />
      <Login />
      <Footer />
    </>
    
  );
}

export default App;
