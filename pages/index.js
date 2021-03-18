import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao Daily Bible
        </h1>

        <p className={styles.description}>
          {data.text} <br /> 
          {data.book.abbrev.pt.toUpperCase()} {data.chapter}:{data.number} ({data.book.version.toUpperCase()})
        </p>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://www.abibliadigital.com.br/api/verses/nvi/random');
  const data = await res.json();

  console.log(data);

  return {
    props: {
      data
    },
    revalidate: 86400,
  }
}
