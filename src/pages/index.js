import Image from 'next/image';
import Link from 'next/link';
import styles from './../styles/Sobre.module.css';
import Topbar from './../components/Appbar/topbar.js';
//import Background from './../../public/finance.jpg';

export default function Sobre() {
  return (
      <body className={styles.main}>
            <Topbar />
            <div className={styles.center}>  
                <h1>Projeto de Previsão de Ativos Financeiros</h1>
                <hr className={styles.line}></hr>           
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <br></br>

                <Image 
                    src="/resized-financeiro.png"      
                    width="704px"
                    height="650px"                                   
                />

                <br></br>
                <Link href="/tutorial">
                    <button className={styles.btnhome}>Tutorial</button>
                </Link>
                <br></br>
                <Link href="/ativo-financeiro">
                    <button className={styles.btnhome}>Solicitar Previsão</button>
                </Link>
                <br></br>
            </div>                     
      </body>
  )
}
