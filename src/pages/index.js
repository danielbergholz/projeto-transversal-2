import Image from 'next/image'
import Link from 'next/link'
import styles from './../styles/Sobre.module.css'
import Topbar from './../components/Appbar/topbar.js'
//import Background from './../../public/finance.jpg';

export default function Sobre() {
  return (
    <body className={styles.main}>
      <Topbar />
      <div className={styles.center}>
        <h1>Projeto de Previsão de Ativos Financeiros</h1>
        <hr className={styles.line}></hr>

        <p>
          <b><i>UnB - FT - ENE</i></b>
          <br></br>
          O projeto de previsão de ativos financeiros, idealizado como o projeto final da disciplina de Projeto Transversal 2
          é uma aplicação que visa como objetivo principal trazer aos usuários uma expectativa do comportamento de ativos financeiros. 
          Como base a previsão proposta se deve ao uso das tecnologias empregadas na implementação do projeto, sendo a principal a utilização da tecnologia de 
          Machine Learning de forma que foi desenvolvido um algoritmo próprio que é atualizado diariamente com os dados reais do mercado financeiro de forma a aumentar ao máximo a acurácia da expectativa gerada.
        </p>

        <br></br>

        <Image src="/resized-financeiro.png" width="704px" height="650px" />

        <br></br>
        <Link href="/tutorial">
          <a>
            <button className={styles.btnhome}>Tutorial</button>
          </a>
        </Link>
        <br></br>
        <Link href="/ativo-financeiro">
          <a>
            <button className={styles.btnhome}>Solicitar Previsão</button>
          </a>
        </Link>
        <br></br>
      </div>
    </body>
  )
}
