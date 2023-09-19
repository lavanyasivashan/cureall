
import './App.css';
import WelcomeBa from './HomeBake/WelcomeBa';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import ContactUs from './HomeBake/ContactUs';
import Login from './HomeBake/Login';
import Groupcup from './HomeBake/Groupcup';
import CupApp from './HomeBake/CupApp';

function App() {
  const isBackgroundRed = true;
   return (
  
    <div
      style={{
        backgroundColor: isBackgroundRed ? 'lightpink' : 'lightblue',
      }}
    >
    <WelcomeBa/>
    
        
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<CupApp/>}/>
        <Route path="/Shop now" element={<Groupcup/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
   );
}
export default App;