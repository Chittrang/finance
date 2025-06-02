
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>SR Money Loans - Home</title>
        <meta name="description" content="SR Money Loans - Best personal loans in India." />
      </Head>
      <Header />
      <main className={styles.main}>
        <HeroBanner />
      </main>
      <Footer />
    </>
  );
}
