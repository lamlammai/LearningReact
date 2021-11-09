import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../ZingMP3/HomePage/FirebaseConfig";
export const fetchNewSong = createAsyncThunk("song/fetch/new", async () => {
  const data = await db.collection("His").get();
  return data.docs.map((e) => e.data());
});
const songSlice = createSlice({
  name: "song",
  initialState: {
    data: [],
    error: null,
    loading: "idle",
    page: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewSong.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(fetchNewSong.fulfilled, (state, action) => {
        state.loading = "success";
        state.data = action.payload;
        state.page = 1;
      })
      .addCase(fetchNewSong.rejected, (state, action) => {
        state.loading = "error";
        state.error = action.error.message;
      });
  },
});

export default songSlice.reducer;
export const { setPage } = songSlice.actions;
export const selectSongData = (state) => state.song.data;
export const selectSongLoading = (state) => state.song.loading;
export const selectSongError = (state) => state.song.loading;
export const selectSongPage = (state) => state.song.page;
