import S from "./queroDoar.module.scss"
import Livro from "../../assets/livro.png"


export default function QueroDoar (){
    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                    <form action="">
                        <div>
                            <img src={Livro} alt="" />
                            <h3>Informaçoes do Livro</h3>
                        </div>
                        <input type="text" placeholder="Titulo"/>
                        <input type="text" placeholder="Categoria"/>
                        <input type="text" placeholder="Autor"/>
                        <input type="text" placeholder="Link da Imagem"/>
                        <input type='submit' value="Doar"/>
                    </form>
            </section>
        </section>
    )
}