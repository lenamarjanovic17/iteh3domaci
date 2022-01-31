import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GrafikStrana from './components/GrafikStrana';
import KalkulatorStrana from './components/KalkulatorStrana';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GrafikStrana />} />
        <Route path='/kalkulator' element={<KalkulatorStrana />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
