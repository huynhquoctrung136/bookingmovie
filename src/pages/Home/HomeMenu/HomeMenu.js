import React, { Fragment, useState } from 'react'
import moment from 'moment'
import { Tabs } from 'antd'
import { NavLink } from 'react-router-dom'
import {RightOutlined,ClockCircleOutlined} from "@ant-design/icons"
const { TabPane } = Tabs
const HomeMenu = (props) => {
  const [tabPosition, setTabPosition] = useState('left')
  let { heThongRapChieu } = props
  console.log(heThongRapChieu)

  const renderHeThongRap = () => {
    return heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <div
              style={{
                backgroundImage: `${heThongRap.logo}`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <img
                style={{ width: '50px' }}
                src={heThongRap.logo}
                alt={heThongRap.logo}
              />
            </div>
          }
          key={`heThongRap-${index}`}
        >
          <Tabs tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="cumRap__content">
                      <img
                        src="https://movie-booking-project.vercel.app/img/cumRap/bhd-star-bitexco-16105952137769.png"
                        alt="hethongrap"
                      />
                      <div className="cumRap__desc">
                        <p className="cumRap__name">{cumRap.tenCumRap}</p>
                        {cumRap.diaChi.length > 10 ? (
                          <p className="cumRap__district">
                            {cumRap.diaChi.substr(0, 30)}...
                          </p>
                        ) : (
                          <p className="cumRap__district">{cumRap.diaChi}</p>
                        )}
                      </div>
                    </div>
                  }
                  key={`heThongRap-${index}`}
                >
                  {/* Load danh sách phim theo cụm rạp */}
                  {cumRap.danhSachPhim.slice(0, 4).map((phim, index) => {
                    return (
                      <div
                        key={`phim-${index}`}
                        className="row py-3 showTime__row"
                      >
                        <div className="col-3">
                          <img
                            className="img-fluid"
                            src={phim.hinhAnh}
                            alt={phim.tenPhim}
                            onError={(e) => {
                              e.target.onerror = null
                              e.target.src = 'https://picsum.photos/75/75'
                            }}
                          />
                        </div>
                        <div className="col-9">
                          <p className="showTimeRow__title">
                            ACTION,AVENTURE,FANTASY
                          </p>
                          <h3 className="showTimeRow__name">{phim.tenPhim}</h3>
                          <p>{/* Mô tả */}</p>
                          <p>
                            <NavLink
                              className="showTimeRow__NavLink"
                              to={`/detail/${phim.maPhim}`}
                            >
                              Full Detail <RightOutlined />
                            </NavLink>
                          </p>

                          <div className="row">
                            <div className="col-10 ">
                              <span className="showTimeRow__runningTimes d-flex align-items-center">
                              <ClockCircleOutlined /> VIEWING TIMES
                              </span>
                              <div>
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 8)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                      >
                                        <button
                                          key={`lichchieu-${index}`}
                                          className="btn--runningTimes mt-2"
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu,
                                          ).format('hh:mm A')}
                                        </button>
                                      </NavLink>
                                    )
                                  })}
                              </div>
                            </div>
                            <div
                              className="col-2 showTime__mins"
                              style={{ textAlign: 'right' }}
                            >
                              <span>105 MINS </span>
                              <span>15</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </TabPane>
              )
            })}
          </Tabs>
        </TabPane>
      )
    })
  }
  return (
    <>
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </>
  )
}
export default HomeMenu
