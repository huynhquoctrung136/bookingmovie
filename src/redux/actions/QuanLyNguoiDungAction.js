import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDung'
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  GET_USERS,
  SET_THONG_TIN_NGUOI_DUNG,
} from './types/QuanLyNguoiDungType'
import { toast } from 'react-toastify'
import { history } from '../../Layout'
import { displayLoadingAction, hideLoadingAction } from './LoadingAction'
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
        // console.log('result', result)
      }
    } catch (error) {
      toast.error('Mật khẩu và tài khoản không đúng!')
      console.log('error', error.response.data)
    }
  }
}

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      await dispatch(displayLoadingAction())
      const result = await quanLyNguoiDungService.layThongTinNguoiDung()
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        })
      }
      await dispatch(hideLoadingAction())
    } catch (error) {
      console.log('error', error.response.data)
      await dispatch(hideLoadingAction())
    }
  }
}

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy)
      if (result.data.statusCode === 200) {
        toast.success('Đăng ký thành công!')
        dispatch({
          type: DANG_KY_ACTION,
          payload: result.data.content,
        })
        //Chuyển hướng đăng ký về trang đăng nhập đó
        history.push('/login')
        console.log('result', result)
      }
    } catch (error) {
      toast.error('Tài khoản đã tồn tại trong hệ thống!')
      console.log('error', error.response.data)
    }
  }
}

//Lấy danh sách người dùng
export const layDanhSachNguoiDung = (soTrang) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung(soTrang)
      if (result.data.statusCode === 200) {
        dispatch({
          type: GET_USERS,
          listUsers: result.data.content,
          totalPages:result.data.content.totalPages,
          totalUsers: result.data.content.count,
        })
      }
      // console.log('result: ' + result)
    } catch (error) {
      console.log('error', error.response.data)
    }
  }
}
