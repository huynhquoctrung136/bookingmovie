import { quanLyPhimService } from '../../services/QuanLyPhimService'
import { displayLoadingAction, hideLoadingAction } from './LoadingAction'
import { SET_DANH_SACH_PHIM } from './types/QuanLyPhimType'


export const layDanhSachPhim = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction())
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.layDanhSachPhim()

      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrPhim:result.data.content,
      })
      dispatch(hideLoadingAction())
    } catch (errors) {
      console.log('errors', errors)
      dispatch(hideLoadingAction())
    }
  }
}
