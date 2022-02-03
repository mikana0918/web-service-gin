import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import { Album } from '@/types'
import { AlbumList } from "@/components/Pages/home/AlbumList"

import { albums as albumsApi } from "@/api/index"


const Home: NextPage = () => {
  const d = albumsApi.getAlbums()

  const sampleAlbum: Album[] = [
    {
      ID: "1",
      Title: "DM",
      Artist: "fromis9",
      Price: 2.4,
      ImageSrc: "/fromis9.jpeg"
    },
    {
      ID: "2",
      Title: "Airplane",
      Artist: "iz*one",
      Price: 3.5,
      ImageSrc: "/izone.jpeg"
    },
    {
      ID: "3",
      Title: "That day",
      Artist: "Lovelyz",
      Price: 2.6,
      ImageSrc: "/lovelyz.jpeg"
    }
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>web-service-gin by mikana0918</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box sx={{ justifyContent: 'center' }}>
          <AlbumList albums={ sampleAlbum } />
        </Box>
      </main>
    </div>
  )
}

export default Home
