
import './App.css' 
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fa1, fa2 ,fa3, fa4, fa5 } from '@fortawesome/free-solid-svg-icons'
import img1 from './assets/mike1280-720px.png'
import img2 from './assets/mike1280-720px2.png'
import img3 from './assets/mike1280-720px3.png'
import img4 from './assets/mike1280-720px4.png'
import img5 from './assets/mike1280-720px5.png'

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  function handleImgClick(index) {
    setActiveIndex(index);
  }
  
  return (
    <>
    <div className="img-container">
   
    <div className={`img-background img1 ${activeIndex === 0 ? 'img-active' : ''}`} onClick={() => handleImgClick(0)}>
        <div className="overlay"></div>
        <div className="info">
          <div className="title">Title</div>
          <div className="parapgraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Porro quod maiores, similique aperiam quis animi mollitia beatae quaerat excepturi facilis est dignissimos a pariatur rerum perspiciatis 
              cumque cum, architecto temporibus
          </div>
        </div>
        <div className="icon-background">
           <FontAwesomeIcon icon={fa1} />
        </div>
      
        <img src={img1} alt="" />
      </div>
      
      <div className={`img-background img1 ${activeIndex === 1 ? 'img-active' : ''}`} onClick={() => handleImgClick(1)}>
        <div className="overlay"></div>
        <div className="info">
          <div className="title">Title</div>
          <div className="parapgraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Porro quod maiores, similique aperiam quis animi mollitia beatae quaerat excepturi facilis est dignissimos a pariatur rerum perspiciatis 
              cumque cum, architecto temporibus
          </div>
        </div>
        <div className="icon-background">
            <FontAwesomeIcon icon={fa2} />
        </div>
        <img src={img2} alt="" />
      </div>
      
      <div className={`img-background img1 ${activeIndex === 2 ? 'img-active' : ''}`} onClick={() => handleImgClick(2)}>
        <div className="overlay"></div>
        <div className="info">
            <div className="title">Title</div>
            <div className="parapgraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus at assumenda eligendi eveniet excepturi laboriosam,
                aliquam nisi, non corrupti ea nam similique exercitationem tempora saepe quo molestias nulla perferendis facere!
            </div>
        </div>
        <div className="icon-background">
            <FontAwesomeIcon icon={fa3} />
        </div>
        <img src={img3} alt="" />
      </div>
      
      <div className={`img-background img1 ${activeIndex === 3 ? 'img-active' : ''}`} onClick={() => handleImgClick(3)}>
        <div className="overlay"></div>
        <div className="info">
          <div className="title">Title</div>
          <div className="parapgraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Porro quod maiores, similique aperiam quis animi mollitia beatae quaerat excepturi facilis est dignissimos a pariatur rerum perspiciatis 
              cumque cum, architecto temporibus
          </div>
        </div>
        <div className="icon-background">
            <FontAwesomeIcon icon={fa4} />
        </div>
        <img src={img4} alt="" />
      </div>

      <div className={`img-background img1 ${activeIndex === 4 ? 'img-active' : ''}`} onClick={() => handleImgClick(4)}>
        <div className="overlay"></div>
        <div className="info">
          <div className="title">Title</div>
          <div className="parapgraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Porro quod maiores, similique aperiam quis animi mollitia beatae quaerat excepturi facilis est dignissimos a pariatur rerum perspiciatis 
              cumque cum, architecto temporibus
          </div>
        </div>
        <div className="icon-background">
            <FontAwesomeIcon icon={fa5} />
        </div>
        <img src={img5} alt="" />
      </div>
     

    </div>
    


    </>
  )
}




export default App;
