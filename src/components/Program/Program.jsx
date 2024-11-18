import React from 'react'
import './program.css'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.webp'
import b from '../../assets/b.jpg'
import micon from '../../assets/m-icon.jpg'
import p from '../../assets/p.jpg'

export const Program = () => {
  return (
    <div className="p-container">
        <div className="program">
            <img src={img1} alt="" />
            <div className="caption">
                <img src={b} alt="" />
                <p>Bachelor's</p>
            </div>

        </div>

        <div className="program">
            <img src={img2} alt="" />
            <div className="caption">
                <img src={micon} alt="" />
                <p>Masters</p>
            </div>
            
        </div>

        <div className="program">
            <img src={img3} alt="" />
            <div className="caption">
                <img src={p} alt="" />
                <p>PHD</p>
            </div>
        </div>
    </div>
  )
}
