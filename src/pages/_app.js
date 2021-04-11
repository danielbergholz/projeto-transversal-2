import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Previsão de Ativos</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
