import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import CampusSelection from './CampusSelection'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Uni Universe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Choose your campus" />
        <p className="description">
          
        </p>


      <CampusSelection/>
    
      </main>
      <Footer />
    </div>
  )
}
