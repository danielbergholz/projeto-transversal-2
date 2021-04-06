//import Image from 'next/image';
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>                     
      </body>
  )
}
