import Link from 'next/link';
import styles from './../styles/Sobre.module.css';
import Topbar from './../components/Appbar/topbar.js';

export default function Tutorail() {
  return (
      <body className={styles.main}>
            <Topbar />
            <div className={styles.center}>  
                <h1>Tutorial</h1>
                <hr className={styles.line}></hr>           
                <p>
                    Para utilização da aplicação de Previsão de Ativos Financeiros, será apresentado os passos seguintes do tutorial.
                    A tecnlogia que é utilizada na aplicação irá automaticamente retornar ao usuário a previsão do ativo financeiro selecionado.
                    Sendo que os dados em questão são atualizados diariamente com a realidade dos acontecimentos do Sistema Financeiro, dessa forma a expectativa é trazer uma previsão mais próxima possível, baseada em dados científicos.                   
                </p>

                <div className={styles.start}>
                    <br></br>
                    <h3>PASSO-A-PASSO</h3>
                    <p>1°) Ir para página de previsão de ativos</p>
                    <p>2°) Selecionar o ativo financeiro desejado</p>
                    <p>3°) Gerar o gráfico da expectativa retornado</p>
                    <p>4°) Selecionar período específico de tempo que busca previsão</p>
                    <p>5°) Gerar notícias relacionadas</p>
                    <br></br>
                </div>

                <br></br>
                <Link href="/chart">                   
                    <button className={styles.btnhome}>Gerar Gráfico</button>                    
                </Link>
   
            </div>                  
      </body>
  )
}
