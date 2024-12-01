import Logo from "../../assets/logo.png"
import Busca from "../../assets/search.png"
import Home from "../../Pages/Home/home"
import Doados from "../../Pages/Doados/doados"
import QueroDoar from "../../Pages/QueroDoar/querodoar"
import S from "./header.module.scss"

import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

export default function Header() {
    return(
      <BrowserRouter>
      <header>
       <section className={S.boxLogo}>
        <img src={Logo} alt="Imagem de Livro Aberto logotipo da empresa" />
        <h1>Livros Vai na Web</h1>
       </section>   
       <nav className={S.boxMenu}>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/doados">Livros Doados</Link></li>
            <li><Link to="/queroDoar">Quero Doar</Link></li>
        </ul>
       </nav>
       <div className={S.boxSearch}>
       <input className={S.boxInput} type="text" placeholder="O que você procura?" />
       <img src= {Busca} alt="Icone de Lupa que representa Buscas" />
       </div>
       
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doados" element={<Doados/>}/>
        <Route path="/queroDoar" element={<QueroDoar/>}/>
      </Routes>
      </BrowserRouter>
    )
  }