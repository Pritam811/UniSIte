import React from 'react'
import './about.css'
import a from '../../assets/a.jpg'
import p from '../../assets/p.png'

export const About = () => {
  return (
    <div className="a-container" name= 'about'>
        <div className="a-left">
            <img className='img1' src={a} alt="" />
            <img className='img2' src={p} alt="" />
        </div>
        <div className="a-right">
            <h2>Who We Are?</h2>
            <p>Østfold University College (Norwegian: Høgskolen i Østfold, HiØ) is a university college in Østfold county, Norway.
            It has campuses in Fredrikstad and Halden, and has around 7000 students (as of 2017) and 550 employees (as of 2017).
            The university college is one of the public university colleges in Norway,
            and is a result of five public colleges in Halden, Sarpsborg and Fredrikstad which were joined together as a part of the University College Reform (Norwegian: Høgskolereformen) of 1994.
            The school offers over 60 fields of study, ranging from Associate degrees, Bachelor's degrees, Master's degrees, and some Doctorates.</p>
        </div>
    </div>
  )
}
