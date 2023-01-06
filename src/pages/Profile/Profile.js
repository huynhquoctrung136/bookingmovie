import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinUser } from '../../redux/actions/QuanLyNguoiDungAction'
import moment from 'moment'
import _ from 'lodash'

const { TabPane } = Tabs
const Profile = () => {
  const callback = (key) => {
    console.log(key)
  }

  const { userProfile } = useSelector((state) => state.QuanLyNguoiDung)
  // console.log('userProfile', userProfile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(layThongTinUser())
  }, [])
  //Formik
  const formik = useFormik({
    initialValues: {
      taiKhoan: userProfile?.taiKhoan,
      matKhau: userProfile?.matKhau,
      hoTen: userProfile?.hoTen,
      email: userProfile?.email,
      soDT: userProfile?.soDT,
      maNhom: 'GP00',
      loaiNguoiDung: '',
      thongTinDatVe: userProfile?.thongTinDatVe,
    },
    onSubmit: (values) => {},
  })

  const renderTicketItems = () => {
    return userProfile.thongTinDatVe?.map((item, index) => {
      const seats = _.first(item.danhSachGhe)
      return (
        <tr key={index}>
          <th>{index++}</th>
          <td>{item.tenPhim}</td>
          <td>{item.thoiLuongPhim}</td>
          <td>{moment(item.ngayDat).format('DD.MM.YYYY')}</td>
          <td>
            {seats.tenHeThongRap}, {seats.tenCumRap}
          </td>
          <td>{seats.maGhe}</td>
          <td>
            {item.danhSachGhe.map((ghe, index) => {
              return (
                <p
                  className="text-danger"
                  style={{ marginLeft: '5px', display: 'inline-block' }}
                  key={`ghe-${index}`}
                >
                  {ghe.tenGhe.length > 10 ? (
                    <span>{ghe.tenGhe.substr(0, 5)}...</span>
                  ) : (
                    <span>{ghe.tenGhe}</span>
                  )}
                </p>
              )
            })}{' '}
          </td>
          <td>{item.giaVe.toLocaleString()} đ</td>
          <td>
            {item.danhSachGhe
              ?.reduce((tongTien, ghe) => {
                return tongTien + ghe.giaVe
              }, 0)
              .toLocaleString()}
          </td>
        </tr>
      )
    })
  }

  return (
    <>
      <section id="profile" style={{ paddingTop: '10%' }}>
        <div className="container">
          <Tabs tabPosition="top" defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Thông Tin Tài Khoản" key="1">
              <div className="row">
                <div className="col-md-4 profile__info__left">
                  <div className="profile__info__avatar text-center">
                    <img
                      src="https://picsum.photos/200"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <h3>{userProfile.hoTen}</h3>
                  </div>
                </div>
                <div className="col-md-8 profile__info__right">
                  <form className="w-75">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputUsername"
                        className="form-label"
                      >
                        Tài khoản
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername"
                        disabled="disabled"
                        name="taiKhoan"
                        onChange={formik.handleChange}
                        value={formik.values.taiKhoan}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword"
                        className="form-label"
                      >
                        Mật khẩu
                      </label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="exampleInputPassword"
                        onChange={formik.handleChange}
                        value={formik.values.matKhau}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputName" className="form-label">
                        Họ & Tên
                      </label>
                      <input
                        name="hoTen"
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        onChange={formik.handleChange}
                        value={formik.values.hoTen}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail" className="form-label">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPhone" className="form-label">
                        Số điện thoại
                      </label>
                      <input
                        name="soDT"
                        type="number"
                        className="form-control"
                        id="exampleInputPhone"
                        onChange={formik.handleChange}
                        value={formik.values.soDT}
                      />
                    </div>

                    <button type="submit" className="btn btn-success">
                      Cập nhật
                    </button>
                  </form>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Lịch sử đặt vé" key="2">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên Phim</th>
                    <th scope="col">Thời lượng phim</th>
                    <th scope="col">Ngày đặt</th>
                    <th scope="col">Tên rạp</th>
                    <th scope="col">Mã vé</th>
                    <th scope="col">Tên ghế</th>
                    <th scope="col">Giá vé</th>
                    <th scope="col">Tổng vé</th>
                  </tr>
                </thead>
                <tbody>{renderTicketItems()}</tbody>
              </table>
            </TabPane>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default Profile
