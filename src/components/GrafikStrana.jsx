
import React, { useState } from 'react';
import Formula from './Formula';
import Navbar from './Navbar';

export default function GrafikStrana() {
  const [podaci, setPodaci] = useState([1, 0, 0]);
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
      </div>
      <div className='grafik'>

      </div>
    </div>
  );
}
