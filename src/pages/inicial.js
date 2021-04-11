import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.center}>
      <div className={styles['image-container']}>
        <Image
          quality={1}
          src="/wallpaper.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className={styles.title}>
        Seja bem vindo à plataforma de previsão de ativos financeiros!
      </h1>
      <h2 className={styles.title}>Clique abaixo para começar</h2>
      <Link href="/ativo-financeiro">
        <a>
          <Button>INICIAR</Button>
        </a>
      </Link>
    </div>
  )
}
