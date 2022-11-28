import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { TOKEN, USER_LOGIN } from '../../util/settings/config'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  DesktopOutlined,
  FileOutlined,
  HomeOutlined,
  ImportOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'
import { history } from '../../Layout'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const AdminTemplate = (props) => {
  //path, exact, Component

  const { Component, ...restProps } = props
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDung)

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (collapsed) => {
    // console.log(collapsed);
    setCollapsed(collapsed)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  if (!localStorage.getItem(USER_LOGIN)) {
    alert('Bạn không có quyền truy cập vào trang này !')
    return <Redirect to="/" />
  }

  if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
    alert('Bạn không có quyền truy cập vào trang này !')
    return <Redirect to="/" />
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="admin__content">
              <Layout style={{ minHeight: '100vh' }}>
                <Sider
                  collapsible
                  collapsed={collapsed}
                  onCollapse={onCollapse}
                >
                  <div className="logo mt-3">
                    <img
                      src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                      alt="..."
                    />
                  </div>
                  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Fragment>
                      <SubMenu
                        key="sub1"
                        icon={
                          <img
                            src="https://picsum.photos/200"
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '50%',
                              marginRight:"15px"
                            }}
                            alt="profile"
                          />
                        }
                        title={userLogin.taiKhoan}
                      >
                        <Menu.Item key="9" icon={<HomeOutlined />}>
                          <NavLink to="/admin">Administrative</NavLink>
                        </Menu.Item>
                        <Menu.Item key="10" icon={<UserOutlined />}>
                          <NavLink to="/profile">Thông Tin Profile</NavLink>
                        </Menu.Item>
                        <Menu.Item key="11" icon={<ImportOutlined />}>
                          <NavLink
                            onClick={() => {
                              localStorage.removeItem(USER_LOGIN)
                              localStorage.removeItem(TOKEN)
                              history.push('/home')
                              window.location.reload()
                            }}
                            to="/"
                          >
                            Đăng Xuất
                          </NavLink>
                        </Menu.Item>
                      </SubMenu>
                    </Fragment>
                    <SubMenu key="sub2" icon={<FileOutlined />} title="Films">
                      <Menu.Item key="12" icon={<FileOutlined />}>
                        <NavLink to="/admin/films">Films</NavLink>
                      </Menu.Item>
                      <Menu.Item key="13" icon={<FileOutlined />}>
                        <NavLink to="/admin/films/addnew">Add new</NavLink>
                      </Menu.Item>
                    </SubMenu>

                    <Menu.Item key="1" icon={<UserOutlined />}>
                      <NavLink to="/admin/users">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                      <NavLink to="/admin/showtimes">Showtime</NavLink>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout className="site-layout">
                  <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                  ></Header>
                  <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
                    <div
                      className="site-layout-background"
                      style={{ padding: 24, minHeight: '85vh' }}
                    >
                      <Component {...propsRoute} />
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2022 Created by Ant UED
                  </Footer>
                </Layout>
              </Layout>
            </div>
          </Fragment>
        )
      }}
    />
  )
}

export default AdminTemplate
