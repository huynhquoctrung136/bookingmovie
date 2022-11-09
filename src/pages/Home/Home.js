import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Home = () => {
  const { arrPhim } = useSelector((state) => state.QuanLyPhim)

  const renderPhim = () => {
    return arrPhim.map((phim, index) => {
      return (
        <div key={`phim(${index})`} className="col-3">
          <div className="movieContent">
            <div className="movieContent__image">
              <div
                key={`phim(${index})`}
                style={{
                  backgroundImage: `url(${phim.hinhAnh})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <img
                  src={phim.hinhAnh}
                  className="img-fluid"
                  alt={phim.hinhAnh}
                />
              </div>

              <div className="movieContent__overplay"></div>
              <div className="movieContent__play">
                <a href="#">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div className="movieContent__name">
              <h3>{phim.tenPhim}</h3>
              <a href="#">
                <button className="button button--booking">Mua Vé</button>
              </a>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="newIn section">
      <div className="container">
        <h2 className="newIn__title">NEW IN</h2>
        <div className="newIn__content">
          <div className="row">{renderPhim()}</div>
        </div>
      </div>
    </div>
  )
}

export default Home
