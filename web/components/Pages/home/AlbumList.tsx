import Box from '@mui/material/Box';
import MediaCard from '@/components/Base/Card/MediaCard'
import { Album } from '@/types'

export const AlbumList = ({ albums }: { albums: Album[] }) => {
  const list = albums.map(
    (album, idx) => (
      <Box mb={4} key={idx}>
        <MediaCard
          key={idx}
          title={album.Title}
          description={album.Title}
          imageSrc={album.ImageSrc}
          price={album.Price}
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
