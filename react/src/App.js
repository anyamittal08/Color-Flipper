import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Simple from "./Simple";
import Hex from './Hex';
import Navigation from './Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation /> 
      <Routes>
        <Route path='/' element={<Simple />} />
        <Route path='/hex' element={<Hex />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
