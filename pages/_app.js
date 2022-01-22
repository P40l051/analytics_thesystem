import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Loading from '../components/loading'
import Link from 'next/link'

import { useState, useEffect } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  //const loading = false;

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
      console.log(router.pathname)
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    setLoading(router.isFallback)
  }, [router]);

  if (loading) {
    return <Loading />
  } else return (
    <><div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    </>
  );
}

export default MyApp;

