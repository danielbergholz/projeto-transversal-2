import { useState, useCallback } from 'react'
import Button from '../components/Button'
import styles from '../styles/AtivoFinanceiro.module.css'

export default function AtivoFinanceiro() {
  const [loading, setLoading] = useState(false)
  const [selectedStock, setSelectedStock] = useState(null)

  const loadGraph = useCallback(
    (stock) => {
      setLoading(true)
      setSelectedStock(stock)
      setTimeout(() => {
        setLoading(false)
      }, 800)
    },
    [setLoading, setSelectedStock]
  )

  return (
    <div className={styles.center}>
      <div className={styles.header}>
        <h1>Selecione o ativo financeiro</h1>
        <Button onClick={() => loadGraph('petrobras')}>Petrobras</Button>
        <Button onClick={() => loadGraph('ambev')}>Ambev</Button>
        <Button onClick={() => loadGraph('itausa')}>Itaúsa</Button>
        <Button onClick={() => loadGraph('cielo')}>Cielo</Button>
      </div>
      <div className={styles.graph}>
        {selectedStock && loading && <img src="/spinner.png" width="80px" />}
        {selectedStock && !loading && <h1>Gráfico carregado</h1>}
      </div>
      <div className={styles.news}>
        {selectedStock && (
          <>
            <h2>Notícia 1 sobre {selectedStock}</h2>
            <h2>Notícia 2 sobre {selectedStock}</h2>
            <h2>Notícia 3 sobre {selectedStock}</h2>
          </>
        )}
      </div>
    </div>
  )
}
