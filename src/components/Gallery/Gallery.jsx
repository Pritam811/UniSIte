import React from 'react'
import './gallery.css'
import g7 from '../../assets/g7.jpg'
import g2 from '../../assets/g2.jpg'
import g3 from '../../assets/g3.jpg'
import g4 from '../../assets/g4.jpg'

export const Gallery = () => {
  return (
    <div className="g-container" name = 'campus'>
        <div className="gallery">
            <img src={g7} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
        </div>
        <button className='btn'>See More</button>
    </div>
  )
}
