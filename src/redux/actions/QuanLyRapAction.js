import { quanLyRapService } from '../../services/QuanLyRapService'
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
  SET_THONG_TIN_HE_THONG_RAP,
} from './types/QuanLyRapType'

export const layThongTinHeThongRap=()=>{
  return async(dispatch)=>{
    try {
      const result=await quanLyRapService.layThongTinHeThongRap()
      if(result.status===200){
        dispatch({
          type:SET_THONG_TIN_HE_THONG_RAP,
          danhSachRap: result.data.content,
        })
      }
    } catch (errors) {
      console.log('errors', errors.response?.data)
    }
  }
}


export const layDanhSachCumRap = () => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyRapService.layDanhSachHeThongRap()

      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          heThongRapChieu: result.data.content,
        })
      }
    } catch (errors) {
      console.log('errors', errors.response?.data)
    }
  }
}

export const layThongTinChiTietPhim = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuPhim(id)
      // console.log('result: ', result)
      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHIM,
          filmDetail: result.data.content,
        })
      }
    } catch (errors) {
      console.log('errors', errors.response?.data)
    }
  }
}
