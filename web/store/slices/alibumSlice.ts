import { createSlice } from '@reduxjs/toolkit';
import { albums as albumsApi } from '@/api/index';
import { Album } from "@/types"

interface TypedState { 
  albums: Album[]
}

const initialState: TypedState = {
  albums: []
}

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    setAlbums: (state, action) => {
      state.albums = action.payload
    }
  }
})

export const getAlbums = () => {
  return async (dispatch) => {
    const albums = await albumsApi.getAlbums()
    console.log(albums)

    dispatch(albumsSlice.actions.setAlbums(albums))
  }
}

export const {setAlbums} = albumsSlice.actions
export const reducer = albumsSlice.reducer