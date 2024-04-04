import React, { useState, useEffect} from 'react';

function Health() {
  const [age, setAge] = useState(0);
  const [MaxHeatRate, setMaxHeatRate] = useState(0);
  const [zones, setZones] = useState(0)

  const Submit = (age) => {
  if (!isNaN(age)) { 
    const calMHR = 220 - age;
    setMaxHeatRate(calMHR);
    const zone1Min = (0.5 * calMHR).toFixed(2);
    const zone1Max = (0.6 * calMHR).toFixed(2);
    const zone2Min = (0.6 * calMHR).toFixed(2);
    const zone2Max = (0.7 * calMHR).toFixed(2);
    const zone3Min = (0.7 * calMHR).toFixed(2);
    const zone3Max = (0.8 * calMHR).toFixed(2);
    const zone4Min = (0.8 * calMHR).toFixed(2);
    const zone4Max = (0.9 * calMHR).toFixed(2);
    const zone5Min = (0.9 * calMHR).toFixed(2);
    const zone5Max = calMHR.toFixed(2);
    
    setZones({
        zone1Min,
        zone1Max,
        zone2Min,
        zone2Max,
        zone3Min,
        zone3Max,
        zone4Min,
        zone4Max,
        zone5Min,
        zone5Max
      });
  } else {
    alert("กรุณากรอกอายุของท่าน");
    return null; // หรือค่าที่เหมาะสมในกรณีที่ไม่สามารถคำนวณค่า zone ได้
  }
};

  return (
    <section className='health'>
        <div><h1>Heart rate zone</h1></div>
        <h2>กรอกอายุของท่าน (ปี)</h2>
        <div className='input'>
        <input type="text" onChange={(e)=> setAge(e.target.value)} placeholder=" "/>
        <button onClick={()=> Submit(age)}>คำนวณ</button>
        <div className='MHR'>Max Heart Rate: {MaxHeatRate} bpm</div>
        </div>

        <div className='heart-rate-zone'>
            <div className='heart-rate-zone-layout'>
                <div className="bpm" >
                    <p>{zones.zone1Min} - {zones.zone1Max} bpm</p>
                </div>
                <div className="zone">
                    <h3>Zone 1</h3>
                    <p> หัวใจเต้นในอัตรา 50 – 60% ของ maximum heart rate การออกกำลังกายแบบพื้นฐานเบาๆ เช่น วิ่ง เดินเร็ว
                        ปั่นจักรยาน หรือเดินลู่ในฟิตเนส แต่สำหรับผู้ที่ต้องการลดน้ำหนัก zone 1</p>
                </div>
            </div>

            <div className='heart-rate-zone-layout'>
                <div className="bpm" >
                <p>{zones.zone2Min} - {zones.zone2Max} bpm</p>
                </div>
                <div className="zone">
                    <h3>Zone 2</h3>
                    <p> หัวใจเต้นในอัตรา 60 – 70% ของ maximum heart rate ไต่บันไดความเหนื่อยขึ้นมาสู่ขั้น burn fat หรือเผาผลาญไขมันได้อย่างดี</p>
                </div>
            </div>

            <div className='heart-rate-zone-layout'>
                <div className="bpm" >
                <p>{zones.zone3Min} - {zones.zone3Max} bpm</p>
                </div>
                <div className="zone">
                    <h3>Zone 3</h3>
                    <p> หัวใจเต้นในอัตรา 70 – 80% ของ maximum heart rate ที่เหมาะสำหรับผู้ออกกำลังกายเพื่อการมีสุขภาพที่ดี</p>
                </div>
            </div>

            <div className='heart-rate-zone-layout'>
                <div className="bpm">
                <p>{zones.zone4Min} - {zones.zone4Max} bpm</p>
                </div>
                <div className="zone">
                    <h3>Zone 4</h3>
                    <p> หัวใจเต้นในอัตรา 80 – 90% ของ maximum heart rate การออกกำลังมากขึ้นจนสามารถพูดคุยได้เพียงเล็กน้อย เป็นช่วงที่ต้องใช้แรงของหัวใจและกล้ามเนื้อมากกว่าปกติ</p>
                </div>
            </div>

            <div className='heart-rate-zone-layout'>
                <div className="bpm" >
                <p>{zones.zone5Min} - {zones.zone5Max} bpm</p>
                </div>
                <div className="zone">
                    <h3>Zone 5</h3>
                    <p> หัวใจเต้นในอัตรา 90 – 100 % ของ maximum heart rate ส่วนใหญ่ใช้ในกลุ่มของนักกีฬาอาชีพที่ซ้อมให้อัตราเต้นของหัวใจสูงถึง zone 5</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Health;
