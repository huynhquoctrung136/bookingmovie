import React from 'react'

const Film = (props) => {
  let { phim } = props
  return (
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
        <a href="#">
          <button className="button button--booking">Mua Vé</button>
        </a>
      </div>
    </div>
  )
}

export default Film
