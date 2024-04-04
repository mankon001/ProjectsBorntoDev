import React, { useState } from 'react';
import ListBTD from "../Components/ListBTD";
import Health from "../Components/Health";
import Routine from "../Components/Routine";
import Science from "../Components/Science";
import Education from '../Components/Education';
import ProjectsBorntoDev from '../Components/ProjectsBorntoDev';


function BorntoDev() {
  const [pageButton, setPageButton] = useState('ProjectsBorntoDev');
  const pageClick = (pageName) => {
    setPageButton(pageName);
  };
  return (
    <section id="main-layout">
      {/* <div className='column1'><Sidebar /></div> */}
      <div className='column2'><ListBTD pageClick={pageClick}/></div>
      <div className='column3'>
      {pageButton === 'ProjectsBorntoDev' && <ProjectsBorntoDev />}
      {pageButton === 'health' && <Health />}
      {pageButton === 'routine' && <Routine/>}
      {pageButton === 'science' && <Science />}
      {pageButton === 'education' && <Education />}
      </div>
      
      </section>


  )
}

export default BorntoDev