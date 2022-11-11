import { SET_DANH_SACH_PHIM } from '../actions/types/QuanLyPhimType'

const initialState = {
  arrPhim: [
    {
      maPhim: 10828,
      tenPhim: 'John Wick: Chapter 10',
      biDanh: 'john-wick-chapter-10',
      trailer: 'https://www.youtube.com/embed/BMWtLXDkv6Y',
      hinhAnh:
        'http://movieapi.cyberlearn.vn/hinhanh/john-wick-chapter-4_gp01.jpg',
      moTa:
        'John Wick: Chapter 4 là bộ phim hành động kịch tính neo-noir của Mỹ được đạo diễn bởi Chad Stahelski. Đây là phần hậu truyện của bộ phim Sát thủ John Wick: Phần 3 – Chuẩn bị chiến tranh đồng thời cũng là phần phim thứ tư trong loạt phim ăn khách John Wick.',
      maNhom: 'GP01',
      ngayKhoiChieu: '2022-11-07T11:04:07.113',
      danhGia: 10,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
}

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrPhim = action.arrPhim
      return { ...state }
    }

    default:
      return state
  }
}
