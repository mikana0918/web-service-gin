import TextField from '@mui/material/TextField'
import styles from './ModalInner.module.scss'
import { useState } from "react"
import { Album } from "@/types/index"
import Button from "@mui/material/Button"

type DataType = Omit<Album, "id">

interface PropType {
}

const ModalInner = (props: PropType) => {
  const [data, setData] = useState<DataType>({
    title: "",
    artist: "",
    price: 0,
    imageSrc: ""
  })

  const handleConfirm = () => {
    console.log("handleConfirm")
    console.log(data)
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