import axios from "axios"
import { Album } from "@/types"

export const albums = {
  getAlbums: async () => {
    try {
      await axios.get<Album>(`/api/albums`)
    } catch (err) {
      console.error(err)
    }
  }
}