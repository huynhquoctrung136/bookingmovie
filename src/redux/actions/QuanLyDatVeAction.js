import { toast } from 'react-toastify'
import { ThongTinDatVe } from '../../core/models/ThongTinDatVe'
import { quanLyDatVeService } from '../../services/QuanLyDatVeService'
import { SET_CHI_TIET_PHONG_VE } from './types/QuanLyDatVeTypes'

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        })
      }
     
    } catch (error) {
      console.log('error: ', error)
      console.log('error', error?.response.data)
      toast.error('Thất bại!')
    }
  }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe)
      console.log(('result', result.data.content))
    } catch (error) {
      console.log('error: ', error)
      console.log('error', error?.response.data)
    }
  }
}
