import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDung'
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from './types/QuanLyNguoiDungType'
import { toast } from 'react-toastify'
import { history } from '../../Layout'
export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
      if (result.data.statusCode === 200) {
        toast.success('Đăng nhập thành công!')
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        })
        //Chuyển hướng đăng nhập về trang trước đó
        history.goBack()
        console.log('result', result)
      }
    } catch (error) {
      toast.error('Đăng nhập thất bại!')
      console.log('error', error.response.data)
    }
  }
}


export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung()
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        })
      }
    } catch (error) {
      console.log('error', error.response.data)
    }
  }
}