import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
  SET_THONG_TIN_HE_THONG_RAP,
} from '../actions/types/QuanLyRapType'

const initialState = {
  heThongRapChieu: [],
  filmDetail: {},
  danhSachRap: [],
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

    case SET_THONG_TIN_HE_THONG_RAP: {
      state.danhSachRap = action.danhSachRap
      return { ...state }
    }

    default:
      return state
  }
}
