import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Tabs } from 'antd'
import logoPayment from './payment.png'
import Screen from './screen.png'
import { useDispatch, useSelector } from 'react-redux'
import {
  datVeAction,
  layChiTietPhongVeAction,
} from '../../redux/actions/QuanLyDatVeAction'
import { layDanhSachCumRap } from '../../redux/actions/QuanLyRapAction'
import { CloseOutlined, UserOutlined } from '@ant-design/icons'
import { DAT_VE } from '../../redux/actions/types/QuanLyDatVeTypes'
import _ from 'lodash'
import { ThongTinDatVe } from '../../core/models/ThongTinDatVe'
import { toast } from 'react-toastify'
const Checkout = (props) => {
  const [tabPosition, setTabPosition] = useState('right')
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVe,
  )
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDung)
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRap)
  // console.log('heThongRapChieu', heThongRapChieu)
  // console.log('userLogin', userLogin)
  const dispatch = useDispatch()
  // console.log('chiTietPhongVe', chiTietPhongVe)

  useEffect(() => {
    dispatch(layChiTietPhongVeAction(props.match.params.id))
    dispatch(layDanhSachCumRap())
  }, [])

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value)
  }

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe

  const renderGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : ''
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe,
      )
      let classGheDaDuocDat = ''
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = 'gheDaDuocDat'
      }

      if (indexGheDD !== -1) {
        classGheDaDat = 'gheDangDat'
      }
      return (
        <Fragment key={`danhSachGhe-${index}`}>
          <button
            disabled={ghe.daDat}
            className={`ghe ${classGheDaDuocDat} ${classGheVip} ${classGheDaDat} `}
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              })
            }}
          >
            {ghe.daDat ? (
              classGheDaDuocDat !== '' ? (
                <UserOutlined />
              ) : (
                <CloseOutlined />
              )
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ''}
        </Fragment>
      )
    })
  }
  return (
    <div
      style={{
        backgroundImage: `url(${thongTinPhim.hinhAnh})`,
        backgroundSize: '100%',
        backgroundPosition: 'cover',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        <div className="detailBooking">
          <div className="row">
            <div className="col-8">
              <div className="bookingTicket__content">
                <div className="bookingTicketContent__info">
                  <div className="bookingTicket__tabs">
                    <div>
                      <Tabs defaultActiveKey="1">
                        <Tabs.TabPane
                          tab={
                            <div
                              style={{
                                backgroundImage: { logoPayment },
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                textAlign: 'center',
                              }}
                            >
                              <i className="fa fa-credit-card"></i>
                              <p className="bookingTicketTabs__title">
                                CHỌN GHẾ VÀ THANH TOÁN
                              </p>
                            </div>
                          }
                          key="1"
                        >
                          <div className="bookingSeatContent">
                            <div className="bookingSeatContent__info">
                              <div className="bookingCinema__name d-flex">
                                <img
                                  src="https://movie-booking-project.vercel.app/img/logo-theater/bhd.png"
                                  alt=""
                                />
                                <div className="bookingCinemaName__des">
                                  <p>{thongTinPhim.tenCumRap}</p>
                                  <p>
                                    {thongTinPhim.ngayChieu} -{' '}
                                    {thongTinPhim.gioChieu} -{' '}
                                    {thongTinPhim.tenRap}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bookingSeatContent__seat">
                              <div className="bookingSeatContent__screen">
                                <img
                                  className="img-fluid"
                                  src={Screen}
                                  alt="screen.png"
                                />
                              </div>
                              <div className="bookingSeatContent__select">
                                {renderGhe()}
                              </div>

                              <div className="bookingSeatContent__infoSeat mt-4">
                                <div>
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">Ghế chưa đặt</th>
                                        <th scope="col">Ghế đang đặt</th>
                                        <th scope="col">Ghế Vip</th>
                                        <th scope="col">Ghế đã đặt</th>
                                        <th scope="col">Ghế mình đặt</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <button className={`ghe`}>00</button>
                                        </td>
                                        <td>
                                          <button
                                            className={`ghe gheDangDat`}
                                          ></button>
                                        </td>
                                        <td>
                                          <button
                                            className={`ghe gheVip`}
                                          ></button>
                                        </td>
                                        <td>
                                          <button
                                            className={`ghe gheDaDat`}
                                          ></button>
                                        </td>
                                        <td>
                                          <button
                                            className={`ghe gheDaDuocDat`}
                                          ></button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane
                          value={tabPosition}
                          tab={
                            <div
                              style={{
                                backgroundImage: { logoPayment },
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                textAlign: 'center',
                              }}
                            >
                              <i className="fa fa-check"></i>
                              <p className="bookingTicketTabs__title">
                                KẾT QUẢ ĐẶT VÉ
                              </p>
                            </div>
                          }
                          key="2"
                        >
                          Content of Tab Pane 2
                        </Tabs.TabPane>
                        <Tabs.TabPane
                          tab={
                            <NavLink to="/home">
                              <div
                                style={{
                                  backgroundImage: { logoPayment },
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: 'cover',
                                  textAlign: 'center',
                                }}
                              >
                                <i className="fa fa-home"></i>
                                <p className="bookingTicketTabs__title">
                                  Trang Chủ
                                </p>
                              </div>
                            </NavLink>
                          }
                          key="3"
                        ></Tabs.TabPane>
                        <Tabs.TabPane
                          tab={
                            <NavLink to="/profile">
                              <div
                                style={{
                                  backgroundImage: `https://i.pravatar.cc/300?u=nguyenvanteo2506`,
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: 'cover',
                                  textAlign: 'center',
                                }}
                              >
                                <img
                                  style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                  }}
                                  src={`https://picsum.photos/200`}
                                  alt=""
                                />
                              </div>
                              <p className="bookingTicketTabs__title">
                                {userLogin.hoTen}
                              </p>
                            </NavLink>
                          }
                          key="4"
                        ></Tabs.TabPane>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="detailBooking__content">
                <div>
                  <p className="detailBookingContent__price">
                    {danhSachGheDangDat
                      .reduce((tongTien, ghe) => {
                        return (tongTien += ghe.giaVe)
                      }, 0)
                      .toLocaleString()}{' '}
                    đ
                  </p>
                  <div className="detailBookingContent__des">
                    <p className="detailBookingContent__name">
                      {thongTinPhim.tenPhim}
                    </p>
                    <p>{thongTinPhim.tenCumRap}</p>
                    <p>
                      {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -{' '}
                      {thongTinPhim.tenRap}
                    </p>
                  </div>
                  <div className="detailBookingContent__InfoBooking">
                    <span>Ghế </span>
                    {_.sortBy(danhSachGheDangDat, ['stt']).map(
                      (gheDD, index) => {
                        return (
                          <Fragment>
                            <span key={`gheDD-${index}`}>{gheDD.stt}</span>
                          </Fragment>
                        )
                      },
                    )}
                    <p className="detailBookingContentInfoBooking__price">
                      {danhSachGheDangDat
                        .reduce((tongTien, ghe) => {
                          return (tongTien += ghe.giaVe)
                        }, 0)
                        .toLocaleString()}{' '}
                      đ
                    </p>
                  </div>
                  <div className="detailBookingContent__form">
                    <span>Email</span>
                    <p>{userLogin.email}</p>
                  </div>
                </div>
                <div className="detailBooking__button">
                  <button
                    onClick={() => {
                      const thongTinDatVe = new ThongTinDatVe()
                      thongTinDatVe.maLichChieu = props.match.params.id
                      thongTinDatVe.danhSachVe = danhSachGheDangDat
                      // console.log(thongTinDatVe)
                      dispatch(datVeAction(thongTinDatVe))
                      toast.success('Đặt Vé Thành Công!')
                    }}
                    className="button button--booking"
                  >
                    Đặt Vé
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
