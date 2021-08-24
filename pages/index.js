import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
    <Head>
        <title>Taofiq List | Home</title>
        <meta name="keywords" content="taofiq"/>
    </Head>
    <div className={styles.container}>
     <h1>Home</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia repellat vero sed fugit architecto dolores, veniam doloribus ea atque?</p>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia repellat vero sed fugit architecto dolores, veniam doloribus ea atque?</p>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia repellat vero sed fugit architecto dolores, veniam doloribus ea atque?</p>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti mollitia repellat vero sed fugit architecto dolores, veniam doloribus ea atque?</p>
    </div>

    </>
  )
}
