import './App.css';
import Login from './components/Login'
import Offers from './components/Offers'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}/>
        <Route path='/offers' element={<Offers />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
