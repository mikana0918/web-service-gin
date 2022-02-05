import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { Album } from "@/types"

export const albums = {
  getAlbums: async () => await axios.get<Album[]>(`/api/albums`)
  .then((res: AxiosResponse<Album[]>) => {
    const { data } = res;

    return data
  })
  .catch((e: AxiosError<{ error: string }>) => {
    console.log(e.message);

    return []
  })
}
