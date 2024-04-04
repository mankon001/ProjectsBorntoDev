import React, { useState } from 'react'
import "./ListBTDStyle.css"


function ListBTD({pageClick}) {
  return (
    <section className='ListBTD'>
        <h2 style={{paddingLeft:"10px"}}>Projects Bornto</h2> <h2 style={{color:"#fec000"}}>Dev</h2>
        <h3 style={{padding:"10px" ,margin:"0"}}>หมวดหมู่</h3>
        <div className='btn' onClick={()=> pageClick('health')}>
            <h4>หมวดหมู่สุขภาพ</h4>
            <p>โปรแกรมคำนวณ Heart rate zone</p>
        </div>
        {/* https://coolcal.co/cal/compare.html */}
        <div className='btn' onClick={()=> pageClick('routine')}>
            <h4>หมวดหมู่ชีวิตประจำวัน</h4> 
            <p>โปรแกรมเปรียบเทียบราคาสินค้า</p>
        </div>
        <div className='btn' onClick={()=> pageClick('science')}>
            <h4>หมวดหมู่วิทยาศาสตร์</h4>
            <p>โปรแกรมคำนวณการเคลื่อนที่ในแนวระดับ</p>
        </div>
        <div className='btn' onClick={()=> pageClick('education')}>
            <h4>หมวดหมู่การศึกษา</h4>
            <p>โปรแกรม Logic gates basics</p>
        </div>

    </section>
    
  )
}

export default ListBTD