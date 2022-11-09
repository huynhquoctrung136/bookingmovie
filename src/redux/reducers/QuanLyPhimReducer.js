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
    {
      maPhim: 10839,
      tenPhim: 'Venom 2: ĐỐI MẶT TỬ THÙ ',
      biDanh: 'venom-2-doi-mat-tu-thu',
      trailer: 'https://www.youtube.com/watch?v=-FmWuCgJmxo',
      hinhAnh:
        'http://movieapi.cyberlearn.vn/hinhanh/venom-2-let-there-be-carnage_gp01.jpeg',
      moTa:
        'Venom: Đối mặt tử thù (tựa gốc tiếng Anh: Venom: Let There Be Carnage) là một bộ phim siêu anh hùng ra mắt năm 2021 của Mỹ, dựa trên nhân vật Venom, 18 tháng sau các sự kiện trong Venom (2018), phóng viên Eddie Brock cố gắng làm quen với việc sống như 1 vật chủ của sinh vật ngoài hành tinh Venom, kẻ ban cho anh siêu năng lực nhưng cũng khiến anh phải cảnh giác. Brock cố gắng xây dựng lại sự nghiệp của mình bằng cách phỏng vấn tên sát nhân Cletus Kasady, kẻ trở thành vật chủ của sinh vật Carnage và bỏ trốn khỏi nhà tù sau khi may mắn thoát khỏi hành quyết.',
      maNhom: 'GP01',
      ngayKhoiChieu: '2022-07-31T01:54:11.903',
      danhGia: 9,
      hot: true,
      dangChieu: true,
      sapChieu: false,
    },
    {
      maPhim: 10856,
      tenPhim: 'Spy x Family',
      biDanh: 'spy-x-family',
      trailer: 'https://youtu.be/rzRUlBcmsDo?t=1',
      hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/spy-x-family_gp01.jpg',
      moTa: 'Spy x Family Des',
      maNhom: 'GP01',
      ngayKhoiChieu: '2022-11-02T11:03:57.317',
      danhGia: 10,
      hot: true,
      dangChieu: true,
      sapChieu: false,
    },
    {
      maPhim: 10867,
      tenPhim: 'Tầm Tần Ký ',
      biDanh: 'tam-tan-ky',
      trailer: '',
      hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/tam-tan-ky_gp01.jpg',
      moTa: 'xuyên không thời gian',
      maNhom: 'GP01',
      ngayKhoiChieu: '2022-11-02T11:06:12.68',
      danhGia: 10,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
    
  ],
}

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'first':
      return { ...state }

    default:
      return state
  }
}
