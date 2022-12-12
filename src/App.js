
import './App.css';
import WelcomeBa from './HomeBake/WelcomeBa';
import ButtonApp from './HomeBake/NavBa';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Recipes from './HomeBake/Recipes';
import Shop from './HomeBake/Shop';
import ContactUs from './HomeBake/ContactUs';
import LoginBa from './HomeBake/LoginBa';

function App() {
  const isBackgroundRed = true;
   return (
    
    <div
      style={{
        backgroundColor: isBackgroundRed ? 'lightpink' : 'lightblue',
      }}
    >
    <WelcomeBa/>
    
        <ButtonApp/>
    <BrowserRouter>
      <Routes>
        
        <Route path="/Recipes" element={<Recipes/>}/>
        <Route path="/Shop now" element={<Shop/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Login" element={<LoginBa/>}/>
      </Routes>
    </BrowserRouter>
    </div>
   );
}
export default App;