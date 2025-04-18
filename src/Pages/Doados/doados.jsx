import S from "./doados.module.scss"   
import Capa from "../../assets/capaLivro.png"
import axios from 'axios'
import { useState,useEffect } from "react"


export default function Doados (){

    const [livros,setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://api-livros-bhat.onrender.com/livros")
        setLivros(response.data)
    }

    useEffect(() => {
        getLivros()
    },[])


    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxCards}>
                
                {livros.map((item) =>(
                    <article key={(item.id)}>
                        <img src={item.imagem_url} alt={`Imagem do Livro: ${item.titulo}`}/>
                        <h3>{item.titulo}</h3>
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}