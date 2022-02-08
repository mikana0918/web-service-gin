import type { NextPage } from 'next'
import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import { AlbumList } from "@/components/Pages/home/AlbumList"
import { DefaultBottomNavigation } from "@/layouts/WithNavigation"
import {AddButton} from '@/components/Base/Button/Add'
import { Modal } from '@mui/material'
import ModalInner from '@/components/Pages/home/ModalInner/ModalInner'
import { useSelector } from '@/store';
import {useDispatch} from "react-redux";
import { albumsSelector } from '@/store/selectors/albums';
import { getAlbums } from "@/store/slices/alibumSlice"

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const albumsState = useSelector(albumsSelector)

  const [dialogState, setDialogState] = useState({
    shouldShow: false
  })

  const toggleDialog = () => setDialogState({
    shouldShow: !dialogState.shouldShow
  })

  useEffect(() => {
    dispatch(getAlbums())
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Head>
        <title>web-service-gin by mikana0918</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AddButton handleOnClick={() => toggleDialog()} />
        <Modal
          open={dialogState.shouldShow}
          children={<ModalInner />}
          onClose={() => toggleDialog()}
        />
        <Box sx={{ justifyContent: 'center' }}>
          <AlbumList albums={albumsState.albums}/>
        </Box>
      </main>
      <DefaultBottomNavigation />
    </div>
  )
}

export default Home
