import { toast } from 'react-toastify'
import { quanLyPhimService } from '../../services/QuanLyPhimService'
import { displayLoadingAction, hideLoadingAction } from './LoadingAction'
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from './types/QuanLyPhimType'
import { history } from '../../Layout'

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

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.themPhimUploadHinh(formData)
      toast.success('Thêm Phim Thành Công!')
      // console.log('result', result.data.content)
      dispatch(layDanhSachPhim())
      history.push('/admin/films')
    } catch (errors) {
      toast.success('Thêm Phim Thất Bại!')
      console.log(errors.response?.data)
    }
  }
}

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.layThongTinPhim(maPhim)

      dispatch({
        type: SET_THONG_TIN_PHIM,
        thongTinPhim: result.data.content,
      })
    } catch (errors) {
      console.log('errors', errors)
    }
  }
}

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.capNhatPhimUpload(formData)
      alert('Cập nhật phim thành công!')
      console.log('result', result.data.content)

      dispatch(layDanhSachPhim())
      history.push('/admin/films')
    } catch (errors) {
      console.log(errors.response?.data)
    }
  }
}

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.xoaPhim(maPhim)
      // console.log('result', result.data.content)
      toast.success('Xóa Phim Thành Công')
      //Sau khi xoá load lại danh sách phim mới;
      dispatch(layDanhSachPhim())
    } catch (errors) {
      console.log('errors', errors.response?.data)
    }
  }
}
