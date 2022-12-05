import React from 'react'
import { Modal } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
const ModalFilm = (props) => {
  const { show, handleClose } = props
  let {phim}=props;
  // console.log("phim",phim);
  // const filmDetail = useSelector((state) => state.QuanLyRap.filmDetail)
  return (
    <Modal dialogClassName="modal-180w" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="body-add-new">
          <iframe
            width="460"
            height="315"
            src={phim?.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalFilm
