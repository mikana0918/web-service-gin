import type { NextPage } from 'next'
import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import { Album } from '@/types'
import { AlbumList } from "@/components/Pages/home/AlbumList"
import { albums as albumsApi } from "@/api/index"
import { DefaultBottomNavigation } from "@/layouts/WithNavigation"
import {AddButton} from '@/components/Base/Button/Add'
import Card from '@mui/material/Card';
import { Icon } from '@mui/material';

const Home: NextPage = () => {
  const [data, setData] = useState<{ albums: Album[] }>({ albums: [] });

  useEffect(() => {
    const asyncData = async () => {
      const albums = await albumsApi.getAlbums();

      setData({
        ...data,
        albums
      });
    }

    asyncData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>web-service-gin by mikana0918</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AddButton handleOnClick={() => console.log('clicked')}/>
        <Box sx={{ justifyContent: 'center' }}>
          <AlbumList albums={data.albums} />
          <Card>
            <Icon></Icon>
          </Card>
        </Box>
      </main>
      <DefaultBottomNavigation />
    </div>
  )
}

export default Home
