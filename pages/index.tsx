import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Template, TextInput } from '../components'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <Template>
      <TextInput placeholder='Inserisci Nome' label='inserisci Nome' />
    </Template>
  )
}

export default Home
