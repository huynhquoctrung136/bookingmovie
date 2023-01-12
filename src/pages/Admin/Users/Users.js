import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import ReactPaginate from 'react-paginate'
import { useSelector, useDispatch } from 'react-redux'
import {
  layDanhSachNguoiDungAction,
  layDanhSachNguoiDungPhanTrangAction,
  layThongTinNguoiDungAction,
  timKiemNguoiDungAction,
  xoaNguoiDungAction,
} from '../../../redux/actions/QuanLyNguoiDungAction'
import { NavLink } from 'react-router-dom'
import { Input, Space } from 'antd'
const { Search } = Input

const Users = () => {
  const { listUsers, totalPages, totalUsers } = useSelector(
    (state) => state.QuanLyNguoiDung,
  )
  const dispatch = useDispatch()
  // console.log('listUsers', listUsers)

  useEffect(() => {
    dispatch(layDanhSachNguoiDungPhanTrangAction(1))
  }, [])

  const handlePageClick = (event) => {
    dispatch(layDanhSachNguoiDungPhanTrangAction(+event.selected + 1))
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <NavLink to="/admin">Trang chủ</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Danh sách Users
          </li>
        </ol>
      </nav>
      <div className="conatiner mt-3">
        <div className="card">
          <div class="card-header d-flex justify-content-between">
            <h3>Danh Sách Người Dùng</h3>
            <NavLink to={`/admin/users/addnew`}>
              <button className="btn btn-success">
                <PlusOutlined />
              </button>
            </NavLink>
          </div>
          <div className="card-body">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tài Khoản</th>
                  <th>Mật Khẩu</th>
                  <th>Họ & Tên</th>
                  <th>Email</th>
                  <th>Số Điện Thoại</th>
                  <th>Loại Người Dùng</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {listUsers.items?.map((item, index) => {
                  return (
                    <tr
                      key={`users-${index}`}
                      style={{
                        overflow: 'visible',
                        overflowX: 'scroll',
                      }}
                    >
                      <td>{index + 1}</td>
                      <td>{item.taiKhoan}</td>
                      <td>{item.matKhau}</td>
                      <td>{item.hoTen}</td>
                      <td>{item.email}</td>
                      <td>{item.soDt}</td>
                      <td>{item.maLoaiNguoiDung}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          style={{ marginRight: '5px' }}
                          onClick={() => {
                            //Gọi action xoá
                            if (
                              window.confirm(
                                'Bạn có chắc muốn xóa người dùng ' +
                                  item.taiKhoan,
                              )
                            ) {
                              //Gọi action
                              dispatch(xoaNguoiDungAction(item.taiKhoan))
                            }
                          }}
                        >
                          <DeleteOutlined />
                        </button>
                        <button className="btn btn-warning">
                          <EditOutlined />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={totalPages}
              previousLabel="<"
              renderOnZeroPageCount={null}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Users
{
  /* <Search
        className="mb-5"
        placeholder="Tìm kiếm users"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
      /> */
}
