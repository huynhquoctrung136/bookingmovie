import { quanLyPhimService } from '../../services/QuanLyPhimService'
import { FETCH_CAROUSEL } from './types/CarouselType'

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.layDanhSachBanner()

      dispatch({
        type: FETCH_CAROUSEL,
        arrImg: result.data.content,
      })
    } catch (errors) {
      console.log('errors', errors)
    }
  }
}
