import React, { useState } from 'react';

function Science() {
    const [u, setU] = useState('');
    const [v, setV] = useState('');
    const [a, setA] = useState('');
    const [t, setT] = useState('');
    const [s, setS] = useState('');
    const [selectedButton, setSelectedButton] = useState(null);

    const resetInputs = () => {
      setU('');
      setV('');
      setA('');
      setT('');
      setS('');
    };
  
    const handleButtonClick = (buttonName) => {
      setSelectedButton(buttonName);
    };


    const calculatedU = () => {
      if (s !== '' && v !== '' && t !== '') {
        setU((parseFloat(s) - parseFloat(v) * parseFloat(t)) / parseFloat(t));
      } else if (a !== '' && v !== '' && t !== '') {
        setU(parseFloat(v) - parseFloat(a) * parseFloat(t));
      } else if (s !== '' && a !== '' && t !== '') {
        setU((parseFloat(s) - parseFloat(a) * parseFloat(t) ** 2 / 2) / parseFloat(t));
      } else {
        setU('หาค่าไม่ได้');
      }
    };
    
    const calculatedV = () => {
      if (u !== '' && a !== '' && t !== '') {
        setV(parseFloat(u) + parseFloat(a) * parseFloat(t));
      } else if (s !== '' && u !== '' && t !== '') {
        setV((parseFloat(s) - parseFloat(u) * parseFloat(t)) / parseFloat(t));
      } else {
        setV('หาค่าไม่ได้');
      }
    };
    
    const calculatedA = () => {
      if (v !== '' && u !== '' && t !== '') {
        setA((parseFloat(v) - parseFloat(u)) / parseFloat(t));
      } else if (s !== '' && u !== '' && t !== '') {
        setA((2 * (parseFloat(s) - parseFloat(u) * parseFloat(t))) / parseFloat(t) ** 2);
      } else if (s !== '' && v !== '' && u !== '') {
        setA((parseFloat(v) ** 2 - parseFloat(u) ** 2) / (2 * parseFloat(s)));
      } else {
        setA('หาค่าไม่ได้');
      }
    };
    
    const calculatedT = () => {
      if (s !== '' && u !== '' && v !== '') {
        setT((2 * parseFloat(s)) / (parseFloat(u) + parseFloat(v)));
      } else if (s !== '' && v !== '') {
        setT(parseFloat(s) / parseFloat(v));
      } else if (u !== '' && v !== '') {
        setT((2 * parseFloat(s)) / (parseFloat(u) + parseFloat(v)));
      } else {
        setT('หาค่าไม่ได้');
      }
    };
    
    const calculatedS = () => {
      if (v !== '' && u !== '' && t !== '') {
        setS(((parseFloat(v) + parseFloat(u)) * parseFloat(t)) / 2);
      } else if (u !== '' && t !== '') {
        setS(parseFloat(u) * parseFloat(t));
      } else {
        setS('หาค่าไม่ได้');
      }
    };
      
    return (
      <section className='science'>
        <h1>การเคลื่อนที่ในแนวระดับ</h1>
        <div className='science-layout'>

          <button onClick={()=> handleButtonClick('u')}>หาความเร็วต้น (u)</button>
          <button onClick={()=> handleButtonClick('v')}>หาความเร็วปลาย (v)</button>
          <button onClick={()=> handleButtonClick('a')}>หาความเร่ง (a)</button>
          <button onClick={()=> handleButtonClick('t')}>หาเวลา (t)</button>
          <button onClick={()=> handleButtonClick('s')}>หาการกระจัด (s)</button>
          <div className="reset">
            <button onClick={resetInputs}>รีเซ็ตค่า</button>
          </div>

          {selectedButton === 'u' &&
          <div>
            <h2>หาความเร็วต้น</h2>
            <p>***<b>หมายเหตุ: </b>ต้องใส่ค่าตัวแปร 3 ตัวแปรขึ้นไป</p>
            <div className="science-value-layout">
              <div className='science-value'>
                <h4>v = ความเร็วปลาย (m/s)</h4>
                <input type="text" value={v} onChange={(e)=> setV(e.target.value)} />
              </div>
              <div className='science-value'>
                <h4>a = ความเร่ง (m/ss)</h4>
                <input type="text" value={a} onChange={(e)=> setA(e.target.value)} />
              </div>
              <div className='science-value'>
                <h4>t = เวลา (s)</h4>
                <input type="text" value={t} onChange={(e)=> setT(e.target.value)} />
              </div>
              <div className='science-value'>
                <h4>s = การกระจัด (m)</h4>
                <input type="text" value={s} onChange={(e)=> setS(e.target.value)} />
              </div>
            </div>
            <div className="science-value-layout">
              <button onClick={calculatedU}>คำนวณ</button>
              <div className='calculated'>
                <p>ความเร็วต้น(u) คือ {u} (m/s)</p>
              </div>
            </div>
          </div>
          }

          {selectedButton === 'v' &&
            <div>
              <h2>หาความเร็วปลาย</h2>
            <p>***<b>หมายเหตุ: </b>ต้องใส่ค่าตัวแปร 3 ตัวแปรขึ้นไป</p>
          <div className="science-value-layout">

            <div className='science-value'>
              <h4>u = ความเร็วต้น (m/s)</h4>
              <input type="text" value={u} onChange={(e)=> setU(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>a = ความเร่ง (m/ss)</h4>
              <input type="text" value={a} onChange={(e)=> setA(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>t = เวลา (s)</h4>
              <input type="text" value={t} onChange={(e)=> setT(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>s = การกระจัด (m)</h4>
              <input type="text" value={s} onChange={(e)=> setS(e.target.value)} />
            </div>
          </div>
            <div className='science-value-layout'>
              <button onClick={calculatedV}>คำนวณ</button>
              <div className='calculated'>
                <p>ความเร็วปลาย(v) คือ {v} (m/s)</p>
              </div>
            </div>
            </div>
          }

          {selectedButton === 'a' &&
            <div>
              <h2>หาความเร่ง</h2>
            <p>***<b>หมายเหตุ: </b>ต้องใส่ค่าตัวแปร 3 ตัวแปรขึ้นไป</p>
          <div className="science-value-layout">

            <div className='science-value'>
              <h4>u = ความเร็วต้น (m/s)</h4>
              <input type="text" value={u} onChange={(e)=> setU(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>v = ความเร็วปลาย (m/s)</h4>
              <input type="text" value={v} onChange={(e)=> setV(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>t = เวลา (s)</h4>
              <input type="text" value={t} onChange={(e)=> setT(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>s = การกระจัด (m)</h4>
              <input type="text" value={s} onChange={(e)=> setS(e.target.value)} />
            </div>
          </div>
            <div className='science-value-layout'>
              <button onClick={calculatedA}>คำนวณ</button>
              <div className='calculated'>
                <p>ความเร่ง(a) คือ {a} (m/ss)</p>
              </div>
            </div>
            </div>
          }
          {selectedButton === 't' &&
            <div>
              <h2>หาเวลา</h2>
            <p>***<b>หมายเหตุ: </b>ต้องใส่ค่าตัวแปร 3 ตัวแปรขึ้นไป</p>
          <div className="science-value-layout">

            <div className='science-value'>
              <h4>u = ความเร็วต้น (m/s)</h4>
              <input type="text" value={u} onChange={(e)=> setU(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>v = ความเร็วปลาย (m/s)</h4>
              <input type="text" value={v} onChange={(e)=> setV(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>a = ความเร่ง (m/ss)</h4>
              <input type="text" value={a} onChange={(e)=> setA(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>s = การกระจัด (m)</h4>
              <input type="text" value={s} onChange={(e)=> setS(e.target.value)} />
            </div>
          </div>
            <div className='science-value-layout'>
              <button onClick={calculatedT}>คำนวณ</button>
              <div className='calculated'>
                <p>เวลา(t) คือ {t} (s)</p>
              </div>
            </div>
            </div>
          }
          {selectedButton === 's' &&
            <div>
              <h2>หาการกระจัด</h2>
            <p>***<b>หมายเหตุ: </b>ต้องใส่ค่าตัวแปร 3 ตัวแปรขึ้นไป</p>
          <div className="science-value-layout">

            <div className='science-value'>
              <h4>u = ความเร็วต้น (m/s)</h4>
              <input type="text" value={u} onChange={(e)=> setU(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>v = ความเร็วปลาย (m/s)</h4>
              <input type="text" value={v} onChange={(e)=> setV(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>a = ความเร่ง (m/ss)</h4>
              <input type="text" value={a} onChange={(e)=> setA(e.target.value)} />
            </div>
            <div className='science-value'>
              <h4>t = เวลา (s)</h4>
              <input type="text" value={t} onChange={(e)=> setT(e.target.value)} />
            </div>
          </div>
            <div className='science-value-layout'>
              <button onClick={calculatedS}>คำนวณ</button>
              <div className='calculated'>
                <p>การกระจัด(s) คือ {s} (m)</p>
              </div>
            </div>
            </div>
          }

        </div>
      </section>
      );
  }

export default Science;