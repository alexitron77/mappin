import Head from 'next/head'
import styles from './layout.module.css'
import Image from 'next/image'


const name = "alexis"
export const siteTitle = "Note website"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Weather app"
          content="Check the forecast weather in Singapore"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <header className={styles.header}>
        <Image
        src="/../public/images/logo.png"
        alt="Mappin'"
        height={100}
        width={300}>
        </Image>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  )
}