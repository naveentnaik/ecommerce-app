import './App.css';
import Pay from './Pay';
import Success from './Success';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    
      <Routes>
      <Route path='/pay' element={ <Pay/>} />
      <Route path='/success' element={ <Success/>} />
      </Routes>
      
    </>

  );
}

export default App;
