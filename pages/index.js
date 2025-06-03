
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Perfect Capital - Home</title>
        <meta name="description" content="The Perfect Capital - Build your capital in India." />
      </Head>
      <Header />
      <main className={styles.main}>
        <HeroBanner />
      </main>
      <Footer />
    </>
  );
}
