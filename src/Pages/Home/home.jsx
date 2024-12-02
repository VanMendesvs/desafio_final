import S from "./home.module.scss"
import Card1 from "../../assets/card1.png"
import Card2 from "../../assets/card2.png"
import Card3 from "../../assets/card3.png"
import Card4 from "../../assets/card4.png"

export default function Home (){
    return(
        <section>
            <section className={S.post}>
            <h2>Venha fazer parte da maior rede de doação</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2 className={S.text}>Por que devo doar?</h2>
                    <section className={S.boxCard}>
                        <article>
                            <img src={Card1} alt="Icone de circulo com conexão"/>
                            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                        </article>
                        <article>
                            <img src={Card2} alt="Personagem lendo livro"/>
                            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                        </article>
                        <article>
                            <img src={Card3} alt="Conexão de pessoas atraves do estimulo da leitura"/>
                            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas. </p>
                        </article>
                        <article>
                            <img src={Card4} alt="Balança representando igualdade para receber doações"/>
                            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado. </p>
                        </article>
                    </section>
                </div>
            </section>
            </section>
    )
}