import React from 'react'
import { NavLink } from 'react-router-dom'

const AddUsers = () => {
  return (
    <div className="container mt-3">
      <h3 className="text-center">Thêm Users</h3>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <p>Tài Khoản</p>
            <input type="text" className="form-control" name="taiKhoan" />
          </div>
          <div className="form-group">
            <p>Mật Khẩu</p>
            <input type="password" className="form-control" name="matKhau" />
          </div>
          <div className="form-group">
            <p>Họ & Tên</p>
            <input type="text" className="form-control" name="hoTen" />
          </div>
          <div className="form-group mt-3">
            <NavLink to="/admin/users">
              <button className="btn btn-danger">Trở Lại</button>
            </NavLink>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <p>Nhóm</p>
            <input type="text" className="form-control" name="maNhom" />
          </div>
          <div className="form-group">
            <p>Email</p>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <p>Số Điện Thoại</p>
            <input type="text" className="form-control" name="soDt" />
          </div>
          <div className="form-group">
            <p>Loại Người Dùng</p>
            <select name="maLoaiNguoiDung" className="form-control">
              <option></option>
              <option>KhachHang</option>
              <option>QuanTri</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-success" style={{ marginRight: '10px' }}>
              Thêm
            </button>
            <button className="btn btn-warning">Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUsers
