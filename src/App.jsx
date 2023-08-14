import './app.scss'
import {
  Topbar,
  Menu,
  Intro,
  About,
  Skills,
  Works,
  Contact
} from './components';
import { useState } from 'react';





function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;