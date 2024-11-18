import React, { useRef } from 'react'
import './opinions.css'
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import Data from './OpinionData'






export const Opinions = ({ image, title, dept, desc }) => {
  
    const slider = useRef()
    let tx = 0;
  

  const handleNext = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`
  }

  const handlePrev = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`
  }


  return (
    <div className="o-container">

      <img className='prev' src={a1} alt="" onClick={handlePrev} />
      <img className='next' src={a2} alt="" onClick={handleNext} />



      <div className="slider" name='reviews'>
        <ul ref={slider} >
          {Data.map((val, index) => (
            <li key={index}>
              <div className="slide">
                <div className="info">
                  <img src={val.image} alt="" />
                  <div>
                    <h3>{val.title}</h3>
                    <span>{val.dept}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            </li>

          ))}

        </ul>

      </div>
    </div>
  )

}
