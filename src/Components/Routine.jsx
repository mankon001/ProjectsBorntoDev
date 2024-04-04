import { useState } from "react"
function Routine() {
    const [product1, setproduct1] = useState(0);
    const [product2, setproduct2] = useState(0);
    const [volume1, setvolume1] = useState(0);
    const [volume2, setvolume2] = useState(0);
    const [Result, setResult] = useState('');
    const [compare1, setCompare1] = useState(0);
    const [compare2, setCompare2] = useState(0);


    const Submit = () => {
        if (product1 !== 0 && product2 !== 0 && volume1 !== 0 && volume2 !== 0) {
            // คำนวณส่วนสูงของไตรยางค์สำหรับสินค้า 1
            const compare1 =  (product1 / volume1).toFixed(2);
            // คำนวณส่วนสูงของไตรยางค์สำหรับสินค้า 2
            const compare2 = (product2 / volume2).toFixed(2);
            setCompare1(compare1)
            setCompare2(compare2)
            // เปรียบเทียบราคาสินค้าและแสดงผล
            if (compare1 > compare2) {
                setResult('สินค้าชิ้นที่ 2 ถูกกว่าชิ้นที่ 1');
            } else if (compare1 < compare2) {
                setResult('สินค้าชิ้นที่ 1 ถูกกว่าชิ้นที่ 2');
            } else {
                setResult('สินค้าชิ้นที่ 1 และ 2 มีราคาเท่ากัน');
            }
        } else {
            alert('โปรดใส่ข้อมูลทั้งหมดเพื่อทำการคำนวณ');
        }
    }

  return (
    <section className="routine">
            <h1>เปรียบเทียบราคาสินค้า</h1>
            <h2>สินค้าชิ้นที่ 1</h2>
        <div className="routine-layout">
            <div style={{flex:2}}></div>
            <div style={{flex: "3", backgroundColor: "#2c3640", borderRadius: "5px 0px 0px 5px"}}>
                <h3>ราคาสินค้าชิ้นที่ 1 (บาท)</h3>
                <input type="text" onChange={(e)=> setproduct1(e.target.value)} placeholder=" "/>
            </div>
            <div style={{flex: "3", backgroundColor: "#2c3640", borderRadius: "0px 5px 5px 0px"}}>
                <h3>ปริมาณ (หน่วย,น้ำหนัก)</h3>
                <input type="text" onChange={(e)=> setvolume1(e.target.value)} placeholder=" "/>
            </div>
            <div style={{flex:2}}></div>
        </div>
            <h2>สินค้าชิ้นที่ 2</h2>
        <div className="routine-layout">
            <div style={{flex:2}}></div>
            <div style={{flex: "3", backgroundColor: "#2c3640", borderRadius: "5px 0px 0px 5px"}}>
                <h3>ราคาสินค้าชิ้นที่ 2 (บาท)</h3>
                <input type="text" onChange={(e)=> setproduct2(e.target.value)} placeholder=" "/>
            </div>
            <div style={{flex: "3", backgroundColor: "#2c3640", borderRadius: "0px 5px 5px 0px"}}>
                <h3>ปริมาณ (หน่วย,น้ำหนัก)</h3>
                <input type="text" onChange={(e)=> setvolume2(e.target.value)} placeholder=" "/>
            </div>
            <div style={{flex:2}}></div>
        </div>

        <p className="btn-routine" onClick={Submit}><b>👆🏽 เปรียบเทียบราคา</b></p>

        <div className="compare-layout">
            <div style={{flex:2}}></div>
            <div className="compare-layout-item1" style={{flex: "3", backgroundColor: "#2c3640", borderRadius: "5px 0px 0px 5px"}}>
            <p><b>สินค้าชิ้นที่ 1</b></p>
            <p><b>สินค้าชิ้นที่ 2</b></p>
            <p><b>ผลที่ได้</b></p>
            
            </div>
            <div style={{flex: "3", backgroundColor: "#2c3640", borderRadius: "0px 5px 5px 0px"}}>
            <p>{compare1} บาท/หน่วย</p>
            <p>{compare2} บาท/หน่วย</p>
            <p>{Result}</p>
            
            </div>
            
            <div style={{flex:2}}></div>
        </div>
    </section>
  )
}

export default Routine