import { baseService } from './baseService'
import { GROUPID } from '../util/settings/config'
export class QuanLyNguoiDungService extends baseService {
  // constructor() {
  //   super()
  // }

  dangNhap = (thongTinDangNhap) => {
    // {taiKhoan:'',matKhau:''}
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
  }

  dangKy = (thongTinDangKy) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy)
  }

  layThongTinNguoiDung = () => {
    return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
  }

  //Lấy danh sách người dùng phân trang
  layDanhSachNguoiDung = (soTrang) => {
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${GROUPID}&soTrang=${soTrang}`,
    )
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()

