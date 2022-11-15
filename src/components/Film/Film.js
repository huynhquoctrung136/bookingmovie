import React from 'react'
import { NavLink } from 'react-router-dom'

const Film = (props) => {
  let { phim } = props
  return (
    <NavLink to={`/detail/${phim.maPhim}`}>
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
            <a href={phim.trailer}>
              <i className="fa fa-play"></i>
            </a>
          </div>
        </div>
        <div className="movieContent__name">
          {phim.tenPhim.length > 10 ? (
            <h3>{phim.tenPhim.substr(0, 20)}...</h3>
          ) : (
            <h3>{phim.tenPhim}</h3>
          )}
          <NavLink to={`/detail/${phim.maPhim}`}>
            <button className="button button--booking">Mua Vé</button>
          </NavLink>
        </div>
      </div>
    </NavLink>
  )
}

export default Film
