import { quanLyPhimService } from '../../services/QuanLyPhimService'
import { SET_DANH_SACH_PHIM } from './types/QuanLyPhimType'


export const layDanhSachPhim = () => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.layDanhSachPhim()

      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrPhim:result.data.content,
      })
    } catch (errors) {
      console.log('errors', errors)
    }
  }
}
