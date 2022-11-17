import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDung'
import { DANG_NHAP_ACTION } from './types/QuanLyNguoiDungType'
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
