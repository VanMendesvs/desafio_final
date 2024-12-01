import S from "./doados.module.scss"   
import Capa from "../../assets/capaLivro.png"


export default function Doados (){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxCards}>
                <article>
                    <img src={Capa} alt="Capa do Livro com titulo Protagonista"/>
                    <h3>Protagonista</h3>
                    <p>Susane Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}