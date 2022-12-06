import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import ReactPaginate from 'react-paginate'
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachNguoiDung } from '../../../redux/actions/QuanLyNguoiDungAction'

const Users = () => {
  const { listUsers, totalPages, totalUsers } = useSelector(
    (state) => state.QuanLyNguoiDung,
  )
  const dispatch = useDispatch()
  console.log('listUsers', listUsers)

  useEffect(() => {
    const action = layDanhSachNguoiDung(1)
    dispatch(action)
  }, [])

  const handlePageClick = (event) => {
    dispatch(layDanhSachNguoiDung(+event.selected + 1))
  }

  return (
    <div className="mt-3">
      <div
        className="mb-3"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h3>Danh Sách Người Dùng</h3>
        <button className="btn btn-success">
          <PlusOutlined />
        </button>
      </div>
      <Table
        style={{ width: '1092px', height: '204px', position: 'relative' }}
        striped
        bordered
        hover
      >
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
  )
}

export default Users
