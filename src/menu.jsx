import './menu.css'
import { useState, useRef } from 'react'
import img1 from './assets/Menu-assets/topgraphy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faX } from '@fortawesome/free-solid-svg-icons'



function Menu() {
    const [beforeClicked] = useState(1);
    const menuRef = useRef(null);
    const before = useRef(null);
    const after = useRef(null);
    const menuOn = () => {
        menuRef.current.classList.toggle('menu-active');
        before.current.classList.toggle('active-btn');
        after.current.classList.toggle('active-btn');
    };
  

    return (
        <>
                <div className="menu-button">
                    <FontAwesomeIcon icon={faBars} className={`before active-btn ${beforeClicked}  `} ref={before} onClick={menuOn} />
                    <FontAwesomeIcon icon={faX}  className={`after ${beforeClicked}`}  ref={after} onClick={menuOn}/>
                </div>
                <menu className="menu" ref={menuRef}>
                    <div className="menu-right">
                        <div className="menu-nav">
                            <a href="#">Services</a>
                            <a href="#">Portfolio</a>
                            <a href="#">Contact</a>
                            <a href="#">About</a>
                        </div>
                    </div>
                    <div className="menu-left">
                        <h1>Unleash Marketing <br/>Wizardry with Us. </h1>
                        <p>
                            <br/>   +1 609 333 1456
                            <br/>  
                            <br/>   john@orangeflowmarketing-agency.com
                            <br/>   
                            <br/>   11 Brunel Ct, Toronto, ON M5V 3Y3
                        </p>
                        <div className="menu-overlay"></div>
                        <div className="menu-links">
                            <a href="#">Instagram | </a>
                            <a href="#">Twitter | </a>
                            <a href="#">Linkdin</a>
                        </div>
                        <img src={img1} alt="" className="menu-topgrapghy" />
                    </div>
                </menu>        
          
        </>
    )
}

export default Menu;