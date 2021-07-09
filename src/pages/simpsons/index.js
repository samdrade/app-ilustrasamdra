import React from 'react'
import Menu from '../../components/menu'
import Img from '../../assets/gatacss.jpg'
import Img1 from '../../assets/catinho1.jpg'
import Img2 from '../../assets/catwoman.jpg'
import Img3 from '../../assets/AIMEU GIT.jpg'
 
import './style.css'

const Simpsons = () => {
        return (
        <>
        <Menu />
            <div className="main-simpson">
            </div>
            <img src={Img} alt="gatadocss" />
            <img src={Img1} alt="gatinho" />
            <img src={Img2} alt="catwoman" />
            <img src={Img3} alt="AIMEUGIT" />
        </>
    )
}

export default Simpsons

