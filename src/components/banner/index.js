import React from 'react'
import Img  from '../../assets/imagemceleb.svg'
import './style.css'

const Banner = () => {
    return(
        <>
        <div className="main">
            <div>
                <h1>App Samdrinha Simpson</h1>
                <p>Tia Samdrinha ajuda você a procurar personagens dos Simpsons</p>
            </div>
            <img src={Img} alt="ilustracao com logo do react" />
        </div>
        </>
    )
}
export default Banner