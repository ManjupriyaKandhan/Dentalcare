import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Home from './Components/Home';
import About from './Components/About';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import Services from './Components/Services';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path= '/services' element={<Services/>}/>
        <Route path= '/contact' element={<Contact/>}/>
        
      
   
      
      
      
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
