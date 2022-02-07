export interface Album {
  id: string
  title: string
  artist: string
  price: number
  imageSrc: string
}

export type AlbumWithoutId = Omit<Album, "id">
