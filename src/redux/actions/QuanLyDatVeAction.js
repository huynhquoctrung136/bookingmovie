import { toast } from 'react-toastify'
import { ThongTinDatVe } from '../../core/models/ThongTinDatVe'
import { quanLyDatVeService } from '../../services/QuanLyDatVeService'
import { displayLoadingAction, hideLoadingAction } from './LoadingAction'
import {
  CHUYEN_TAB,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from './types/QuanLyDatVeTypes'

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction())
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu)
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        })
      }
      dispatch(hideLoadingAction())
    } catch (error) {
      console.log('error: ', error)
      console.log('error', error?.response.data)
      toast.error('Thất bại!')
      dispatch(hideLoadingAction())
    }
  }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction())
      const result = await quanLyDatVeService.datVe(thongTinDatVe)
      console.log(('result', result.data.content))

      //Đặt vé thành cộng gọi api load lại phòng vé
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
      await dispatch({
        type: DAT_VE_HOAN_TAT,
      })
      dispatch({
        type:CHUYEN_TAB
      })

      dispatch(hideLoadingAction())
    } catch (error) {
      console.log('error: ', error)
      console.log('error', error?.response.data)
      dispatch(hideLoadingAction())
    }
  }
}
