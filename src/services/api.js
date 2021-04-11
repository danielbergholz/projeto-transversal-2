import axios from 'axios'

export const newsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEWS_API_URL,
})

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAIN_API_URL,
})
