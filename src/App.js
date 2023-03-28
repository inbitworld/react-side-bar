import Navbar from './component/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Boq from './component/pages/Boq';
import AlBoq from './component/pages/AlBoq';
import CreateBoq from './component/pages/CreateBoq';
import Dashboard from './component/pages/Dashboard';
import Loginbar from './component/Loginbar';



function App() {
  return (
    
      <Router>
      <Navbar>
      <Routes>
        <Route path="/" Component={Dashboard}/>
        <Route path="/boq" Component={Boq}/>
        <Route path="/boq/create-boq" Component={CreateBoq}/>
        <Route path="/boq/boq-list" Component={AlBoq}/>
      </Routes>
      </Navbar>
      
      </Router>
    
  );
}

export default App;
