import { useState, useCallback } from 'react'
import React from 'react'
import { newsApi, api } from '../services/api'
import Button from '../components/Button'
import styles from '../styles/AtivoFinanceiro.module.css'
import Topbar from './../components/Appbar/topbar.js'
import Grafico from '../components/Graph/grafico'
import Datepicker from '../components/Calendar/Datepicker.js'
import Calendar from 'react-calendar'

const mapStockToName = {
  petrobras: 'PETR4',
  ambev: 'AMBEV',
  cielo: 'CIELO',
  itau: 'ITAU',
}

export default function AtivoFinanceiro() {
  const [loading, setLoading] = useState(false)
  const [selectedStock, setSelectedStock] = useState(null)
  const [news, setNews] = useState([])
  const [graph, setGraph] = useState({})
  const [date, setDate] = useState([])
  const [real, setReal] = useState([])
  const [tested, setTested] = useState([])
  const [previsao, setPrevisao] = useState([])

  const loadNews = useCallback(
    async (stock) => {
      try {
        const { data } = await newsApi.get(`/news/${stock}`)
        setNews(data)
      } catch (err) {
        console.log({ err })
      }
    },
    [setNews]
  )

  const loadGraph = async (stock) => {
    try {
      // chamada estatica pra petrobras por enquanto
      const { data } = await api.get('/' + mapStockToName[stock])
      setGraph(data)
      setDate(data.values.date)
      setReal(data.values.real)
      setTested(data.values.tested)
      setPrevisao(data.values.forecast)
      console.log({ data })
    } catch (err) {
      console.log({ err })
    }
  }

  const loadGraphAndNews = async (stock) => {
    setLoading(true)
    setNews([])
    setGraph({})
    setSelectedStock(stock)

    await Promise.all([loadNews(stock), loadGraph(stock)])

    setLoading(false)
  }

  return (
    <>
      <Topbar />
      <div className={styles.center}>
        <div className={styles.header}>
          <h1>Selecione o ativo financeiro e em seguida a data</h1>
          <Button onClick={() => loadGraphAndNews('petrobras')}>
            Petrobras
          </Button>
          <Button onClick={() => loadGraphAndNews('ambev')}>Ambev</Button>
          <Button onClick={() => loadGraphAndNews('itau')}>Itaú</Button>
          <Button onClick={() => loadGraphAndNews('cielo')}>Cielo</Button>
        </div>

        <br></br>
        <Datepicker />

        <div className={styles.graph}>
          {selectedStock && loading && <img src="/spinner.png" width="80px" />}
          {selectedStock && !loading && (
            <Grafico
              date={date}
              real={real}
              tested={tested}
              previsao={previsao}
            >
              {' '}
            </Grafico>
          )}
        </div>

        <br></br>
        <div className={styles.news}>
          {selectedStock &&
            news.length !== 0 &&
            news.map((item, index) => (
              <div key={index} className={styles.box}>
                <a href={item.link} target="_blank">
                  <h2>{item.company}</h2>
                  <h4>{new Date(item.date).toLocaleDateString('pt-BR')}</h4>
                  <p>{item.title}</p>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
