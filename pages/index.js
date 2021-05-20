import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import dynamic from 'next/dynamic'

export default function Home({ weatherData}) {
  const MapWithNoSSR = dynamic(() => import("../components/map/map"), {
    ssr: false
  });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Singapore weather forecast
        </p>
      </section>
      <MapWithNoSSR weatherData={weatherData}></MapWithNoSSR>
    </Layout>
  )
}

