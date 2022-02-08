import TextField from '@mui/material/TextField'
import styles from './ModalInner.module.scss'
import { useState, useEffect }  from "react"
import { AlbumWithoutId } from "@/types/index"
import Button from "@mui/material/Button"
import { albums as albumsApi } from "@/api/index"
import * as React from 'react';
import { useDispatch } from "react-redux";
import { getAlbums, addNew } from "@/store/slices/alibumSlice"


interface PropType {}

const ModalInner = (props: PropType) => {
  const dispatch = useDispatch()

  const [data, setData] = useState<AlbumWithoutId>({
    title: "",
    artist: "",
    price: 0,
    imageSrc: ""
  })

  useEffect( () => {
    dispatch(getAlbums())
  }, [dispatch])


  const handleConfirm = async () => {
    dispatch(addNew(data))

    alert("new album has been added!")

    dispatch(getAlbums())

  }

  return (
    <div className={styles.modalInner}>
      <TextField
        className={styles.modalInner__input}
        id="title-input"
        label="title"
        variant="filled"
        value={data.title}
        onChange={(event) => setData({ ...data, title: event.target.value })}
        required={true}
      />
      <TextField
        className={styles.modalInner__input}
        id="artist-input"
        label="artist"
        variant="filled"
        value={data.artist}
        onChange={(event) => setData({ ...data, artist: event.target.value })}
        required={true}
      />
      <TextField
        className={styles.modalInner__input}
        id="price-input"
        label="price"
        variant="filled"
        value={data.price}
        onChange={(event) => setData({ ...data, price: Number(event.target.value) })}
        required={true}
      />
      <TextField
        className={styles.modalInner__input}
        id="price-input"
        label="imageSrc"
        variant="filled"
        value={data.imageSrc}
        onChange={(event) => setData({...data, imageSrc: event.target.value})}
      />
      <Button variant="contained" onClick={handleConfirm}>Confirm</Button>
    </div>
  )
}

export default ModalInner