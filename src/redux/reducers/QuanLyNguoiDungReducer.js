import { TOKEN, USER_LOGIN } from '../../util/settings/config'
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from '../actions/types/QuanLyNguoiDungType'
import { toast } from 'react-toastify'
let user = {}
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
  userLogin: user,
  thongTinNguoiDung: {},
  userRegister: {},
  danhSachNguoiDung:[],
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken)

      return { ...state, userLogin: thongTinDangNhap }
    }

    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung
      return { ...state }
    }

    case DANG_KY_ACTION: {
      const userItem = state.userRegister.find(
        (item) => item.taiKhoan === action.payload.taiKhoan,
      )
      if (userItem) {
        toast.error('Tài khoản đã tồn tại trong hệ thống!')
      } else {
        state.userRegister.push(action.payload)
      }
      return { ...state }
    }

    // case GET_USERS:{

    // }
    default:
      return state
  }
}
