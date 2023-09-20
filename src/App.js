import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './Component/Header';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/home" default element={<Home/>}/>
      <Route path="/header" element={<Header/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
