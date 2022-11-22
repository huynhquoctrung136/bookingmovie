import {
  DAT_VE,
  SET_CHI_TIET_PHONG_VE,
} from '../actions/types/QuanLyDatVeTypes'
import { ThongTinLichChieu } from '../../core/models/ThongTinPhongVe'

const initialState = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
}

export const QuanLyDatVeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe
      return { ...state }
    }
    case DAT_VE: {
      //Cập nhật danh sách ghế đang đặt
      let danhSachGheCapNhat = [...state.danhSachGheDangDat]

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe,
      )
      if (index !== -1) {
        //Nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi => xoá đi
        danhSachGheCapNhat.splice(index, 1)
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon)
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
    }

    default:
      return state
  }
}
