import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { quanLyNguoiDungService } from '../../../services/QuanLyNguoiDung'
import { useState } from 'react'
const Users = () => {
  const [listUser, setListUser] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    let res = await quanLyNguoiDungService.layDanhSachNguoiDung()
    console.log('res', res)
    try {
      setListUser({
        ...listUser,
        listUser: res.data.content,
      })
    } catch (error) {
      console.log('error', error.response?.data)
    }
  }

  // console.log('listUser', listUser)
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
        <tbody>{}</tbody>
      </Table>
    </div>
  )
}

export default Users
