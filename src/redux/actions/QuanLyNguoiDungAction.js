import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDung'
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  GET_USERS,
  GET_USERS_PAG,
  GET_USER_TYPES,
  SEARCH_USERS,
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
export const layDanhSachNguoiDungPhanTrangAction = (soTrang) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction())
      const result = await quanLyNguoiDungService.layDanhSachNguoiDungPhanTrang(
        soTrang,
      )
      if (result.data.statusCode === 200) {
        dispatch({
          type: GET_USERS_PAG,
          listUsers: result.data.content,
          totalPages: result.data.content.totalPages,
          totalUsers: result.data.content.count,
        })
        dispatch(hideLoadingAction())
      }
      // console.log('result: ' + result)
    } catch (error) {
      dispatch(hideLoadingAction())
      console.log('error', error.response.data)
    }
  }
}

export const layDanhSachNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction())
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung()
      if (result.data.statusCode === 200) {
        dispatch({
          type: GET_USERS,
          listNguoiDung: result.data.content,
        })
        dispatch(hideLoadingAction())
      }
      // console.log('result: ' + result)
    } catch (error) {
      dispatch(hideLoadingAction())
      console.log('error', error.response.data)
    }
  }
}
//Lấy danh sách loại người dùng
export const layDanhSachLoaiNguoiDung = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung()
      // console.log("result", result);
      if (result.data.statusCode === 200) {
        dispatch({
          type: GET_USER_TYPES,
          loaiNguoiDung: result.data.content,
        })
      }
    } catch (error) {
      console.log('error', error.response.data)
    }
  }
}

export const themNguoiDungAction = (newUser) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction())
      let result = await quanLyNguoiDungService.themNguoiDung(newUser)
      toast.success('Thêm Users Thành Công!')
      console.log('result', result.data.content)
      history.push('/admin/users')
      dispatch(hideLoadingAction())
    } catch (errors) {
      dispatch(hideLoadingAction())
      toast.success('Thêm Users Thất Bại!')
      console.log(errors.response?.data)
    }
  }
}

export const timKiemNguoiDungAction = (keyword) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction())
      let result = await quanLyNguoiDungService.timKiemNguoiDung(keyword)
      console.log('result', result)
      if (result.data.statusCode === 200) {
        dispatch({
          type: SEARCH_USERS,
          searchUser: result.data.content,
        })
      }
      dispatch(hideLoadingAction())
    } catch (errors) {
      dispatch(hideLoadingAction())
      toast.success('Thêm Users Thất Bại!')
      console.log(errors.response?.data)
    }
  }
}
export const xoaNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan)
      console.log('result', result.data.content)
      toast.success('Xóa Người Dùng Thành Công')
      //Sau khi xoá load lại danh sách phim mới;
      dispatch(layDanhSachNguoiDungPhanTrangAction())
    } catch (errors) {
      toast.error('Xóa Người Dùng Thất Bại')
      console.log('errors', errors.response?.data)
    }
  }
}
