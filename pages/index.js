import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LayoutDefault from '../Layouts/index'
import Gallery from './gallery'

export default function Home() {
  return (
    <LayoutDefault>
      <p>Hello World</p>
    </LayoutDefault>
  )
}
