import React, { useState } from 'react';
import Formula from './Formula';
import Navbar from './Navbar';

export default function Kalkulator() {
  const [podaci, setPodaci] = useState([1, 0, 0]);
  const [promenljiva, setPromenljiva] = useState(0);
  const onChange = index => value => {
    setPodaci(prev => {
      const novoStanje = [...prev];
      novoStanje[index] = value;
      return novoStanje;
    })
  }
  return (
    <div>
      <Navbar />
      <div className='container mt-2'>
        <Formula podaci={podaci} onChange={onChange} />
        <h1 className='text-center mt-3'>Izracunaj vrednost funkcije</h1>
        <div className='row mt-3'>
          <div className='col-6 d-flex align-items-center justify-content-center'>
            <label className='mr-5'>X</label>
            <input type="number" value={promenljiva} onChange={e => {
              const value = e.target.value;
              setPromenljiva(Number(value));
            }} />
          </div>
          <div className='col-6 d-flex align-items-center justify-content-center'>
            <label className='mr-5'>Y</label>
            <input type="number" value={podaci[0] * promenljiva * promenljiva + podaci[1] * promenljiva + podaci[2]} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}
