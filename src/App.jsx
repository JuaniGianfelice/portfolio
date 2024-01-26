import './app.scss'
import {
  Topbar,
  Menu,
  Home,
  Skills,
  Works,
  Contact,
  Not
} from './components';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from 'react';


function App() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>  
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/skills" element={<Skills />}/>
        <Route path ="/works" element={<Works />}/>
        <Route path ="/contact" element={<Contact />}/>
        <Route path ="/not" element={<Not />}/>
        <Route path ="*" element={<Home />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;