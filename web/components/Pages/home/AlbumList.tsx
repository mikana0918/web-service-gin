import Box from '@mui/material/Box';
import MediaCard from '@/components/Base/Card/MediaCard'
import { Album } from '@/types'

export const AlbumList = ({ albums }: { albums: Album[] }) => {
  const list = albums.map(
    (album, idx) => (
      <Box mb={4} key={idx}>
        <MediaCard
          key={idx}
          title={album.title}
          imageSrc={album.imageSrc}
          price={album.price}
        />
      </Box>
    )
  )

  return (
    <div>
      {list}
    </div>
  )
}
