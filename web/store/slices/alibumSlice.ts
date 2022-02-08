import { createSlice } from '@reduxjs/toolkit';
import { albums as albumsApi } from '@/api/index';
import { Album, AlbumWithoutId } from "@/types"
import { AppDispatch } from '@/store/index';

interface TypedState { 
  albums: Album[],
  addAlbumsResponse: {
    succeeded: boolean;
    albumRecord: Partial<Album>
  }
}

const initialState: TypedState = {
  albums: [],
  addAlbumsResponse: {
    succeeded: false,
    albumRecord: {}
  }
}

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    setAlbums: (state, action) => {
      state.albums = action.payload
    },
    setAddNew: (state, action) => {
      state.addAlbumsResponse = action.payload
    } 
  }
})

export const getAlbums = () => {
  return async (dispatch: AppDispatch) => {
    const albums = await albumsApi.getAlbums()
    console.log(albums)

    dispatch(albumsSlice.actions.setAlbums(albums))
  }
}

export const addNew = (data: AlbumWithoutId) => {
  return async (dispatch: AppDispatch) => {
    const req = await albumsApi.addNew(data)

    if (req) {
      const payload: TypedState["addAlbumsResponse"]  = {
        succeeded: true,
        albumRecord: req
      }

      dispatch(albumsSlice.actions.setAddNew(payload))
    } else {
      const payload: TypedState["addAlbumsResponse"]  = {
        succeeded: false,
        albumRecord: {}
      }
      dispatch(albumsSlice.actions.setAddNew(payload))
    }
  }
}

export const {setAlbums, setAddNew} = albumsSlice.actions
export const reducer = albumsSlice.reducer