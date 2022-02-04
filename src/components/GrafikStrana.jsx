
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
  const generisiTacke = () => {
    const tacke = [];
    for (let i = -1000; i < 1000; i++) {
      let val = i / 100
      tacke.push({
        x: val,
        y: podaci[0] * val * val + podaci[1] * val + podaci[2]
      })
    }
    return tacke;
  }
  return (
    <div>
      <Navbar />
      <div className='container mt-2'>
        <Formula podaci={podaci} onChange={onChange} />
        <div className='grafik'>
          <div className='xOsa'></div>
          <div className='yOsa'></div>
          {
            generisiTacke().filter(tacka => {
              const y = 50 + tacka.y * 5
              return y >= 0 && y < 100
            }).map(tacka => {
              return (
                <div className='tacka' style={{
                  left: `${50 + tacka.x * 5}%`,
                  bottom: `${50 + tacka.y * 5}%`
                }}>
                </div>
              )
            })
          }
        </div>

      </div>

    </div>
  );
}
