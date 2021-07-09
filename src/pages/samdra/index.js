import React from 'react'

import Menu from '../../components/menu'
import Img from '../../assets/samdrade.jpg'


import './style.css'

const Samdra = () => {
    return(
        <>
        <Menu />
        <div className="main">
            <div>
                <h1> Bonjuuu!</h1>
                <p>Aqui é Samdra Dee! Sou professora de inglês, front-end dev da Reprograma e ilustradora. Apresento aqui um pequeno portifólio de minhas artes.</p>
            </div>
            <div>
            <img class="container4" src={Img} alt="ilustrações" />

            </div>
        </div>
        </>
    )
}

export default Samdra


