import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {
  layDanhSachLoaiNguoiDung,
  themNguoiDungAction,
} from '../../../redux/actions/QuanLyNguoiDungAction'
import { history } from '../../../Layout'
const AddUsers = (props) => {
  const { loaiNguoiDung } = useSelector((state) => state.QuanLyNguoiDung)
  // console.log('loaiNguoiDung', loaiNguoiDung)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(layDanhSachLoaiNguoiDung())
  }, [])
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: 'GP00',
      maLoaiNguoiDung: loaiNguoiDung[0].maLoaiNguoiDung,
      hoTen: '',
    },
    onSubmit: (values) => {
      // console.log('values', values)
      dispatch(themNguoiDungAction(values))
    },
  })

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <NavLink to="">Trang chủ</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <NavLink to="/admin/films">Danh sách Users</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Thêm Users
          </li>
        </ol>
      </nav>

      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h3 className="text-center">Thêm Users</h3>
          <button className="btn btn-success">Edit Users</button>
        </div>
        <div className="card-body">
          <div className="container mt-3">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Tài Khoản</p>
                    <input
                      value={formik.values.taiKhoan}
                      onChange={formik.handleChange}
                      type="text"
                      className="form-control"
                      name="taiKhoan"
                    />
                  </div>
                  <div className="form-group">
                    <p>Mật Khẩu</p>
                    <input
                      value={formik.values.matKhau}
                      onChange={formik.handleChange}
                      type="password"
                      className="form-control"
                      name="matKhau"
                    />
                  </div>
                  <div className="form-group">
                    <p>Họ & Tên</p>
                    <input
                      value={formik.values.hoTen}
                      onChange={formik.handleChange}
                      type="text"
                      className="form-control"
                      name="hoTen"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <NavLink to="/admin/users">
                      <button
                        onClick={() => {
                          history.push('/admin/users')
                        }}
                        className="btn btn-danger"
                      >
                        Trở Lại
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Nhóm</p>
                    <input
                      value={formik.values.maNhom}
                      onChange={formik.handleChange}
                      type="text"
                      className="form-control"
                      name="maNhom"
                    />
                  </div>
                  <div className="form-group">
                    <p>Email</p>
                    <input
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      type="email"
                      className="form-control"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <p>Số Điện Thoại</p>
                    <input
                      value={formik.values.soDt}
                      onChange={formik.handleChange}
                      type="text"
                      className="form-control"
                      name="soDt"
                    />
                  </div>
                  <div className="form-group">
                    <p>Loại Người Dùng</p>
                    <select
                      name="maLoaiNguoiDung"
                      onChange={formik.handleChange}
                      value={formik.values.maLoaiNguoiDung}
                      className="form-control"
                    >
                      <option></option>
                      {loaiNguoiDung?.map((item, index) => {
                        return (
                          <option
                            value={item.maLoaiNguoiDung}
                            key={`maLoaiNguoiDung-${index}`}
                          >
                            {item.tenLoai}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      className="btn btn-success"
                      style={{ marginRight: '10px' }}
                    >
                      Thêm
                    </button>
                    {/* <button className="btn btn-warning">Reset</button> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddUsers
