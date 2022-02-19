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
    <>
      <AddButton handleOnClick={() => toggleDialog()} />
      <Modal
        open={dialogState.shouldShow}
        onClose={() => toggleDialog()}
      >
        <ModalInner handleToggleDialog={() => toggleDialog()}></ModalInner>
      </Modal>
      <Box sx={{ justifyContent: 'center' }}>
        <AlbumList albums={albumsState.albums}/>
      </Box>
    </> 
  )
}

export default Home
