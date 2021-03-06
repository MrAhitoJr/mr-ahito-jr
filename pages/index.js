import Header from '@components/Header'
import Footer from '@components/Footer'
import Body from '@components/Body'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
    <title>Mr Ahito Jr.</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200&family=Yantramanav:wght@100;300;400;500;700&display=swap" rel="stylesheet"></link>
    </Head>
      <Header/>
      <Body/>
      <Footer/>
    </>

  )
}
