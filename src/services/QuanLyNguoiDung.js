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
  // layDanhSachNguoiDung = (soTrang) => {
  //   return this.get(
  //     `/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${GROUPID}&soTrang=${soTrang}`,
  //   )
  // }
  layDanhSachNguoiDung = (soTrang) => {
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`,
    )
  }

  layDanhSachNguoiDungPhanTrang = (soTrang) => {
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${GROUPID}&soTrang=${soTrang}`,
    )
  }

  layDanhSachLoaiNguoiDung = () => {
    return this.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)
  }

  themNguoiDung = (newUser) => {
    return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, newUser)
  }

  timKiemNguoiDung = (keyword) => {
    return this.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUPID}&tuKhoa=${keyword}`,
    )
  }

  xoaNguoiDung = (taiKhoan) => {
    return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
  }

  thongTinNguoiDung = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
  }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()
