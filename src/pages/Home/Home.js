import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRowSlick from '../../components/Film/RSlick/MultipleRowSlick'
import { layDanhSachPhim } from '../../redux/actions/QuanLyPhimAction';
const Home = (props) => {
  const { arrPhim } = useSelector((state) => state.QuanLyPhim);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(layDanhSachPhim());
  },[])

  return (
    <div className="newIn section">
      <div className="container">
        <h2 className="newIn__title">NEW IN</h2>
        <div className="newIn__content">
          <MultipleRowSlick arrPhim={arrPhim} />
        </div>
      </div>
    </div>
  )
}

export default Home
