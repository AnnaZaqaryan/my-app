import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fethCrawlerParms, updateCrawlerParmsPost } from './crawlerParamsApi';


const initialState = {
  paramData : {
    
      postalCode: '',
      distanceKm: '',
      minYear: null,
      maxYear: null,
      minMileageKm: null,
      maxMileageKm: null,
    makes: [
        "bmw",
        "lexus"
      ]

  }
};

export const getCrawlerParams = createAsyncThunk(
  'crawlerParams/getValues',
  async ( arg, { getState }) => {
    const response = await fethCrawlerParms();
    return response;
  }
);


export const updateCrawlerParams = createAsyncThunk(
  'crawlerParams/updateParams',
  async ( arg, { getState }) => {

    const state = getState();
    const response = await updateCrawlerParmsPost(state.crawlerParams.paramData);
    return response;
  }
);


export const crawlerParamsSlice = createSlice({
  name: 'crawlerParams',
  initialState,
  reducers: {


    changePostalCode: (state, action) => {
      state.paramData.postalCode = action.payload;
    },

    changeDistanceKm: (state, action) => {
      state.paramData.distanceKm = action.payload;
    },

 
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCrawlerParams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCrawlerParams.fulfilled, (state, action) => {
        
        state.paramData  = action.payload;
      })
      ;
  },
});

export const {  changePostalCode, changeDistanceKm } = crawlerParamsSlice.actions;

export const selectCrawlerParams = (state) => state.crawlerParams.paramData;

export default crawlerParamsSlice.reducer;
