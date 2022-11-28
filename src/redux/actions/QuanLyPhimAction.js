import { toast } from 'react-toastify'
import { quanLyPhimService } from '../../services/QuanLyPhimService'
import { displayLoadingAction, hideLoadingAction } from './LoadingAction'
import { SET_DANH_SACH_PHIM } from './types/QuanLyPhimType'

export const layDanhSachPhim = (tenPhim = '') => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction())
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.layDanhSachPhim(tenPhim)

      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrPhim: result.data.content,
      })
      dispatch(hideLoadingAction())
    } catch (errors) {
      console.log('errors', errors)
      dispatch(hideLoadingAction())
    }
  }
}

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.xoaPhim(maPhim)
      console.log('result', result.data.content)
      toast.success('Xóa Phim Thành Công')
      //Sau khi xoá load lại danh sách phim mới;
      dispatch(layDanhSachPhim())
    } catch (errors) {
      console.log('errors', errors.response?.data)
    }
  }
}
