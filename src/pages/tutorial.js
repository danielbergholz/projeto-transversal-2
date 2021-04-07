import Image from 'next/image';
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
                <Image src="/resized-pietchart.png"  width="650px" height="500px" alt="BG"></Image>
            </div>                  
      </body>
  )
}
