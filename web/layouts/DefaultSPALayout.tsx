import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { DefaultBottomNavigation } from "@/layouts/WithNavigation"

interface PropType {
  children: JSX.Element; // 適当
}
export const DefaultSPALayout = (props: PropType) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>web-service-gin by mikana0918</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {props.children}
      </main>     
      <DefaultBottomNavigation />
    </div>
  )
}