import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hello } from '../components/atoms/hello/Hello'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <Hello />
  )
}

export default Home
