import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GrafikStrana from './components/GrafikStrana';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GrafikStrana />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
