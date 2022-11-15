import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from '../actions/types/QuanLyRapType'

const initialState = {
  heThongRapChieu: [],
  filmDetail: {},
}

export const QuanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU: {
      state.heThongRapChieu = action.heThongRapChieu
      return { ...state }
    }

    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail
      return { ...state }
    }

    default:
      return state
  }
}
