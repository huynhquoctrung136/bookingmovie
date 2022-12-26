import React from 'react'
import dataNews from './danhSachTinTuc.json'
const News = () => {
  return (
    <>
      <div className="news__content container" style={{ paddingTop: '150px' }}>
        <div className="row">
          {dataNews.map((item, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card news__content__bg">
                  <div className="news__content__bg__pic">
                    <img
                      className="card-img-top"
                      src={item.image}
                      alt="project01"
                    />
                  </div>
                  <div className="card-body news__content__bg__txt">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default News
