import { TOKEN, USER_LOGIN } from '../../util/settings/config'
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  GET_INFO_USER,
  GET_USERS,
  GET_USERS_PAG,
  GET_USER_TYPES,
  SEARCH_USERS,
  SET_THONG_TIN_NGUOI_DUNG,
} from '../actions/types/QuanLyNguoiDungType'
import { toast } from 'react-toastify'
let user = {}
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

let userProfile = {}
if (localStorage.getItem(USER_LOGIN)) {
  userProfile = JSON.parse(localStorage.getItem(USER_LOGIN))
}

let thongTinNguoiDung = {}
if (localStorage.getItem(USER_LOGIN)) {
  thongTinNguoiDung = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
  userLogin: user,
  thongTinNguoiDung: thongTinNguoiDung,
  userRegister: {},
  listUsers: [],
  listNguoiDung: [{}],
  totalPages: 0,
  totalUsers: 0,
  searchUser: [],
  userProfile: userProfile,
  loaiNguoiDung: [
    {
      maLoaiNguoiDung: 'KhachHang',
      tenLoai: 'Khách hàng',
    },
  ],
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

    case GET_USERS_PAG: {
      state.listUsers = action.listUsers
      state.totalPages = action.totalPages
      state.totalUsers = action.totalUsers
      return { ...state }
    }

    case GET_USER_TYPES: {
      state.loaiNguoiDung = action.loaiNguoiDung
      return { ...state }
    }
    case GET_USERS: {
      state.listNguoiDung = action.listNguoiDung
      return { ...state }
    }

    case SEARCH_USERS: {
      state.searchUser = action.searchUser
      return { ...state }
    }

    case GET_INFO_USER: {
      state.userProfile = action.userProfile
      return { ...state }
    }

    default:
      return state
  }
}
