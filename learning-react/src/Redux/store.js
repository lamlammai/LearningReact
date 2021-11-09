import {configureStore} from '@reduxjs/toolkit'
import songReducer from '../Redux/Song/songSlice'
export default configureStore({
  reducer: {
    song: songReducer,
  },
})