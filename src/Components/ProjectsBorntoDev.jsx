import "./ListBTDStyle.css"
import icon from '../../public/lcon-borntodev.png';
function ProjectsBorntoDev() {
  return (
    <section className="ProjectsBorntoDev">
        <img src={icon} alt="icon" />
        <h2 style={{paddingLeft:"50px"}}>Projects Bornto</h2> <h2 style={{color:"#fec000"}}>Dev</h2>
    </section>
  )
}

export default ProjectsBorntoDev