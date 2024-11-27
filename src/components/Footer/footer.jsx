import Face from "../../assets/face.png"
import X from "../../assets/x.png"
import YT from "../../assets/YT.png"
import Linkedin from "../../assets/linkedin.png"
import Insta from "../../assets/insta.png"

import S from "./footer.module.scss"



export default function footer(){
    return(
        <footer>
            <section className={S.boxRedes}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""><img src={Face} alt=""/></a>
                    <a href=""><img src= {X} alt=""/></a>
                    <a href=""><img src= {YT} alt=""/></a>
                    <a href=""><img src={Linkedin} alt=""/></a>
                    <a href=""><img src= {Insta} alt=""/></a>
                </nav>
            </section>
            <section className={S.text}>
            <p> Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}