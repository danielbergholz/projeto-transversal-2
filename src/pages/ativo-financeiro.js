import { useState, useCallback } from 'react'

import { newsApi } from '../services/api'
import Button from '../components/Button'
import styles from '../styles/AtivoFinanceiro.module.css'

export default function AtivoFinanceiro() {
  const [loading, setLoading] = useState(false)
  const [selectedStock, setSelectedStock] = useState(null)
  const [news, setNews] = useState([])

  const loadGraphAndNews = useCallback(
    async (stock) => {
      setLoading(true)
      setNews([])
      setSelectedStock(stock)

      try {
        const { data } = await newsApi.get(`/news/${stock}`)
        setNews(data)
        console.log({ data })
      } catch (err) {
        console.log({ err })
      }

      setLoading(false)
    },
    [setLoading, setSelectedStock, setNews]
  )

  return (
    <div className={styles.center}>
      <div className={styles.header}>
        <h1>Selecione o ativo financeiro</h1>
        <Button onClick={() => loadGraphAndNews('petrobras')}>Petrobras</Button>
        <Button onClick={() => loadGraphAndNews('ambev')}>Ambev</Button>
        <Button onClick={() => loadGraphAndNews('itau')}>Itaú</Button>
        <Button onClick={() => loadGraphAndNews('cielo')}>Cielo</Button>
      </div>
      <div className={styles.graph}>
        {selectedStock && loading && <img src="/spinner.png" width="80px" />}
        {selectedStock && !loading && <h1>Gráfico carregado</h1>}
      </div>
      <div className={styles.news}>
        {selectedStock &&
          news.length !== 0 &&
          news.map((item, index) => (
            <div key={index} className={styles.box}>
              <a href={item.link} target="_blank">
                <h2>{item.company}</h2>
                <p>{item.title}</p>
              </a>
            </div>
          ))}
      </div>
    </div>
  )
}
