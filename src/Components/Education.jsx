import { useState ,useEffect  } from 'react';
import ORGateImage from '../assets/OR_Gate.png';
import ANDGateImage from '../assets/AND_Gate.png';
import NOTGateImage from '../assets/NOT_Gate.png';
import NORGateImage from '../assets/NOR_Gate.png';
import NANDGateImage from '../assets/NAND_Gate.png';
import XORGateImage from '../assets/XOR_Gate.png';
import XNORGateImage from '../assets/XNOR_Gate.png';
import LightOff from '../assets/light-off.png';
import LightOn from '../assets/light-on.png';


function Education() {
    const [btnOr1, setBtnOr1] = useState(true);
    const [btnOr2, setBtnOr2] = useState(true);
    
    const [btnAnd1, setBtnAnd1] = useState(true);
    const [btnAnd2, setBtnAnd2] = useState(true);

    const [btnNot1, setBtnNot1] = useState(false);
    
    const [btnNor1, setBtnNor1] = useState(true);
    const [btnNor2, setBtnNor2] = useState(true);

    const [btnNand1, setBtnNand1] = useState(true);
    const [btnNand2, setBtnNand2] = useState(true);

    const [btnXor1, setBtnXor1] = useState(true);
    const [btnXor2, setBtnXor2] = useState(true);

    const [btnXnor1, setBtnXnor1] = useState(true);
    const [btnXnor2, setBtnXnor2] = useState(true);

    const [lightOr, setLightOr] = useState(true);
    const [lightAnd, setLightAnd] = useState(true);
    const [lightNot, setLightNot] = useState(true);
    const [lightNor, setLightNor] = useState(true);
    const [lightNand, setLightNand] = useState(true);
    const [lightXor, setLightXor] = useState(true);
    const [lightXnor, setLightXnor] = useState(true);
    
    const OrButtonClick1 = () => {
        setBtnOr1(prevState => !prevState);
    }
    const OrButtonClick2 = () => {
        setBtnOr2(prevState => !prevState);
    }
    
    const AndButtonClick1 = () => {
        setBtnAnd1(prevState => !prevState);
    }
    const AndButtonClick2 = () => {
        setBtnAnd2(prevState => !prevState);
    }
    
    const NotButtonClick1 = () => {
        setBtnNot1(prevState => !prevState);
    }
    
    const NorButtonClick1 = () => {
        setBtnNor1(prevState => !prevState);
    }
    const NorButtonClick2 = () => {
        setBtnNor2(prevState => !prevState);
    }
        
    const NandButtonClick1 = () => {
        setBtnNand1(prevState => !prevState);
    }
    const NandButtonClick2 = () => {
        setBtnNand2(prevState => !prevState);
    }
    
    const XorButtonClick1 = () => {
        setBtnXor1(prevState => !prevState);
    }
    const XorButtonClick2 = () => {
        setBtnXor2(prevState => !prevState);
    }

    const XnorButtonClick1 = () => {
        setBtnXnor1(prevState => !prevState);
    }
    const XnorButtonClick2 = () => {
        setBtnXnor2(prevState => !prevState);
    }

    useEffect(() => {
        const lightningOr = () => {
            setLightOr(btnOr1 || btnOr2);
        }
        lightningOr();
    }, [btnOr1, btnOr2]); 


    useEffect(() => {
        const lightningAnd = () => {
            setLightAnd(btnAnd1 && btnAnd2);
        }
        
        lightningAnd();
    }, [btnAnd1, btnAnd2]); 

    useEffect(() => {
        const lightningNot = () => {
            setLightNot(!btnNot1);
        }
        
        lightningNot();
    }, [btnNot1]); 

    useEffect(() => {
        const lightningNor = () => {
            setLightNor( !(btnNor1 || btnNor2));
        }
        
        lightningNor();
    }, [btnNor1, btnNor2]); 

    useEffect(() => {
        const lightningNand = () => {
            setLightNand(!(btnNand1 && btnNand2));
        }
        
        lightningNand();
    }, [btnNand1, btnNand2]); 


    useEffect(() => {
        const lightningXor = () => {
            setLightXor((btnXor1 || btnXor2) && !(btnXor1 && btnXor2));
        }
        
        lightningXor();
    }, [btnXor1, btnXor2]); 

    useEffect(() => {
        const lightningXnor = () => {
            setLightXnor(!(btnXnor1 ^ btnXnor2 ));
        }
        
        lightningXnor();
    }, [btnXnor1, btnXnor2]); 

    console.log("btnNor1:", btnOr1);
    console.log("btnNor2:", btnOr2);
    console.log("lightNor:", lightOr);
    
    return (
        <section className='logic-gate'>
            <h1>Logic Gate Basics</h1>
            <div className='logic-gate-layout'>
                <div> {/*OR Gate*/}
                    <h2>OR Gate</h2>
                    <p>เป็นเกตที่ให้ค่า 1 เสมอถ้ามี input ใดๆเป็น 1 และให้ค่า 0 ถ้าไม่มีตัวใดเป็น 1 เลย</p>
                    <div className='content-logic'>
                        <div className='operation-gate'>
                            <div className='layout-img'>
                                <img className='logic-img' src={ORGateImage} alt="Logic Gate" />
                            </div>
                            <div className="layout-btn-1"><button className={`btn1 ${btnOr1 ? 'active' : '' }`}
                                    onClick={OrButtonClick1}></button></div>
                            <div className="layout-btn-2"><button className={`btn2 ${btnOr2 ? 'active' : '' }`}
                                    onClick={OrButtonClick2}></button></div>
                            <img className={`circle ${lightOr ? 'active' : '' }`} src={lightOr ? LightOn : LightOff}
                                alt="Logic Gate" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">INPUT</th>
                                    <th>OUTPUT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr className='logic-result'>
                                    <td>{btnOr1 ? 1 : 0}</td>
                                    <td>{btnOr2 ? 1 : 0}</td>
                                    <td>{lightOr ? 1 : 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div> {/*AND Gate*/}
                    <h2>AND Gate</h2>
                    <p>เป็นเกตที่ให้ค่า bit 0 ถ้ามีค่า input ใดๆเป็น 0 และให้ค่า 1 ถ้า input ทั้งหมดเป็น 1</p>
                    <div className='content-logic'>
                        <div className='operation-gate'>
                            <div className='layout-img'>
                                <img className='logic-img' src={ANDGateImage} alt="Logic Gate" />
                            </div>
                            <div className="layout-btn-1"><button className={`btn1 ${btnAnd1 ? 'active' : '' }`}
                                    onClick={AndButtonClick1}></button></div>
                            <div className="layout-btn-2"><button className={`btn2 ${btnAnd2 ? 'active' : '' }`}
                                    onClick={AndButtonClick2}></button></div>
                            <img className={`circle ${lightAnd ? 'active' : '' }`} src={lightAnd ? LightOn : LightOff}
                                alt="Logic Gate" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">INPUT</th>
                                    <th>OUTPUT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr className='logic-result'>
                                    <td>{btnAnd1 ? 1 : 0}</td>
                                    <td>{btnAnd2 ? 1 : 0}</td>
                                    <td>{lightAnd ? 1 : 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>{/*NOT Gate*/}
                    <h2>NOT Gate</h2>
                    <p>เป็นเกตที่ให้ค่า 1 เสมอถ้ามี input ใดๆเป็น 1 และให้ค่า 0 ถ้าไม่มีตัวใดเป็น 1 เลย</p>
                    <div className='content-logic'>
                        <div className='operation-gate'>
                            <div className='layout-img layout-img-not'>
                                <img className='logic-img' src={NOTGateImage} alt="Logic Gate"/>
                            </div>
                            <div className="layout-btn-1 layout-btn-1-not"><button className={`btn1 ${btnNot1 ? 'active' : '' }`}
                                    onClick={NotButtonClick1}></button></div>
                            <img className={`circle ${!lightNot ? 'active' : '' } circle-not`} src={lightNot ? LightOn : LightOff}
                                alt="Logic Gate" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>INPUT</th>
                                    <th>OUTPUT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr className='logic-result'>
                                    <td>{btnNot1 ? 1 : 0}</td>
                                    <td>{lightNot ? 1 : 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>{/*NOR Gate*/}
                    <h2>NOR Gate</h2>
                    <p>เป็นเกตที่ตรงกันข้ามกับ AND คือ ถ้ามี Input ใดๆเป็น 0 จะให้ค่า 1 และถ้า input เป็น 1 ทั้งหมดจะให้ค่า 0</p>
                    <div className='content-logic'>
                        <div className='operation-gate'>
                            <div className='layout-img'>
                                <img className='logic-img' src={NORGateImage} alt="Logic Gate" />
                            </div>
                            <div className="layout-btn-1"><button className={`btn1 ${btnNor1 ? 'active' : '' }`}
                                    onClick={NorButtonClick1}></button></div>
                            <div className="layout-btn-2"><button className={`btn2 ${btnNor2 ? 'active' : '' }`}
                                    onClick={NorButtonClick2}></button></div>
                            <img className={`circle ${lightNor ? 'active' : '' }`} src={lightNor ? LightOn : LightOff}
                                alt="Logic Gate" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">INPUT</th>
                                    <th>OUTPUT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr className='logic-result'>
                                    <td>{btnNor1 ? 1 : 0}</td>
                                    <td>{btnNor2 ? 1 : 0}</td>
                                    <td>{lightNor ? 1 : 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>{/*NAND Gate*/}
                    <h2>NAND Gate</h2>
                    <p>เป็นเกตที่ตรงกันข้ามกับ AND คือ ถ้ามี Input ใดๆเป็น 0 จะให้ค่า 1 และถ้า input เป็น 1 ทั้งหมดจะให้ค่า 0</p>
                    <div className='content-logic'>
                        <div className='operation-gate'>
                            <div className='layout-img'>
                                <img className='logic-img' src={NANDGateImage} alt="Logic Gate" />
                            </div>
                            <div className="layout-btn-1"><button className={`btn1 ${btnNand1 ? 'active' : '' }`}
                                    onClick={NandButtonClick1}></button></div>
                            <div className="layout-btn-2"><button className={`btn2 ${btnNand2 ? 'active' : '' }`}
                                    onClick={NandButtonClick2}></button></div>
                            <img className={`circle ${lightNand ? 'active' : '' }`} src={lightNand ? LightOn : LightOff}
                                alt="Logic Gate" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">INPUT</th>
                                    <th>OUTPUT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr className='logic-result'>
                                    <td>{btnNand1 ? 1 : 0}</td>
                                    <td>{btnNand2 ? 1 : 0}</td>
                                    <td>{lightNand ? 1 : 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>{/*XOR Gate*/}
                    <h2>XOR Gate</h2>
                    <p>หรือเรียกว่า Exclusive OR เป็นเกตที่ถ้า Input แตกต่างกันจะให้ค่า 1 และถ้า Input เหมือนกันจะให้ค่า 0</p>
                    <div className='content-logic'>
                        <div className='operation-gate'>
                            <div className='layout-img'>
                                <img className='logic-img' src={XORGateImage} alt="Logic Gate" />
                            </div>
                            <div className="layout-btn-1"><button className={`btn1 ${btnXor1 ? 'active' : '' }`}
                                    onClick={XorButtonClick1}></button></div>
                            <div className="layout-btn-2"><button className={`btn2 ${btnXor2 ? 'active' : '' }`}
                                    onClick={XorButtonClick2}></button></div>
                            <img className={`circle ${lightXor ? 'active' : '' }`} src={lightXor ? LightOn : LightOff}
                                alt="Logic Gate" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">INPUT</th>
                                    <th>OUTPUT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr className='logic-result'>
                                    <td>{btnXor1 ? 1 : 0}</td>
                                    <td>{btnXor2 ? 1 : 0}</td>
                                    <td>{lightXor ? 1 : 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>{/*XNOR Gate*/}
                    <h2>OR Gate</h2>
                    <p>เป็นเกตที่ให้ค่า 1 เสมอถ้ามี input ใดๆเป็น 1 และให้ค่า 0 ถ้าไม่มีตัวใดเป็น 1 เลย</p>
                    <div className='content-logic'>
                        <div className='operation-gate'>
                            <div className='layout-img'>
                                <img className='logic-img' src={XNORGateImage} alt="Logic Gate" />
                            </div>
                            <div className="layout-btn-1"><button className={`btn1 ${btnXnor1 ? 'active' : '' }`}
                                    onClick={XnorButtonClick1}></button></div>
                            <div className="layout-btn-2"><button className={`btn2 ${btnXnor2 ? 'active' : '' }`}
                                    onClick={XnorButtonClick2}></button></div>
                            <img className={`circle ${lightXnor ? 'active' : '' }`} src={lightXnor ? LightOn : LightOff}
                                alt="Logic Gate" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="2">INPUT</th>
                                    <th>OUTPUT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr className='logic-result'>
                                    <td>{btnXnor1 ? 1 : 0}</td>
                                    <td>{btnXnor2 ? 1 : 0}</td>
                                    <td>{lightXnor ? 1 : 0}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;
