import React from 'react'
import './style.css'
import Img from '../../assets/gatacss.jpg'

const Banner = () => {
    return(
        <>
        <div className="main">
            <div>
                <h1>Ilustrasamdra</h1>
                <p>Conheça as ilustrações de Samdra Dee.</p>
            </div>
            <img src={Img} alt="ilustracao com logo do react" />
        </div>
        </>
    )
}
export default Banner