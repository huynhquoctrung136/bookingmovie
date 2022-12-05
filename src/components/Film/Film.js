import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ModalFilm from '../ModalFilm/ModalFilm'
import { CaretRightOutlined } from '@ant-design/icons'
const Film = (props) => {
  let { phim } = props
  const [isShowModalTrailer, setIsShowModalTrailer] = useState(false)

  const handleModal = () => {
    setIsShowModalTrailer(true)
  }

  const handleClose = () => {
    setIsShowModalTrailer(false)
  }
  return (
    <>
      <div className="movieContent">
        <div className="movieContent__image">
          <div
            style={{
              backgroundImage: `url(${phim.hinhAnh}),url(https://picsum.photos/)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <img src={phim.hinhAnh} className="img-fluid" alt={phim.hinhAnh} />
          </div>
          <div className="movieContent__overplay"></div>
          <div className="movieContent__play">
            <NavLink
              to=""
              onClick={() => {
                handleModal()
              }}
            >
              <CaretRightOutlined className="movieIcon__play" />
            </NavLink>
          </div>
        </div>
        <div className="movieContent__name">
          <NavLink to={`/detail/${phim.maPhim}`}>
            {phim.tenPhim.length > 10 ? (
              <h3>{phim.tenPhim.substr(0, 20)}...</h3>
            ) : (
              <h3>{phim.tenPhim}</h3>
            )}
          </NavLink>
          <NavLink to={`/detail/${phim.maPhim}`}>
            <button className="button button--booking">Mua Vé</button>
          </NavLink>
        </div>
      </div>
      <ModalFilm phim={phim} handleClose={handleClose} show={isShowModalTrailer} />
    </>
  )
}

export default Film
