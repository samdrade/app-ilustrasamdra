import Menu from '../../components/menu'
import React, {useState, useEffect} from 'react'

import './style.css'

const Samdra = () => {
    const [ repositories, setRepositories ] = useState([])
    const [ filtroRepos, setFiltroRepos] = useState([])
    const [ busca, setBusca ] = useState('')

    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
            const data = await response.json()
    
            setRepositories(data)
        }
        getData()
    
    },[])

    useEffect(()=>{
        setFiltroRepos(
            repositories.filter(repo =>{
                return repo.name.includes(busca)
            }           
            )
        )
    },[busca, repositories])

    return(
        <div>
            <input 
                type="text" 
                placeholder="Digite aqui" 
                onChange={e=>{setBusca(e.target.value)}}
            />

            <h1>Busque personagens com Samdra:</h1>

            <ul>{filtroRepos.map(repo=>{
                return <li key={repo.id}>{repo.name}</li>
            })}</ul>
        </div>
    )
}

export default Samdra