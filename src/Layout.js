import './App.scss'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import HomeTemplates from './templates/HomeTemplates/HomeTemplates'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import News from './pages/News/News'
import Detail from './pages/Detail/Detail'
import UserTemplates from './templates/UserTemplates/UserTemplates'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import { ToastContainer } from 'react-toastify'
import CheckoutTemplates from './templates/CheckoutTemplates/CheckoutTemplates'
import Checkout from './pages/Checkout/Checkout'
import Loading from './components/Loading/Loading'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import Films from './pages/Admin/Films/Films'
import AdminTemplates from './templates/AdminTemplates/AdminTemplates'
import AddNew from './pages/Admin/Films/AddNew'
import Edit from './pages/Admin/Films/Edit'
import ShowTime from './pages/Admin/Films/ShowTime'
import Users from './pages/Admin/Users/Users'
import AddUsers from './pages/Admin/Users/AddUsers'
export const history = createBrowserHistory()
function App() {
  return (
    <>
      <Loading />
      <Router history={history}>
        <Switch>
          <HomeTemplates path="/home" exact Component={Home} />
          <HomeTemplates path="/contact" exact Component={Contact} />
          <HomeTemplates path="/news" exact Component={News} />
          <HomeTemplates path="/detail/:id" exact Component={Detail} />
          <HomeTemplates path="/profile" exact Component={Profile} />
          <UserTemplates path="/login" exact Component={Login} />
          <UserTemplates path="/register" exact Component={Register} />
          <CheckoutTemplates path="/checkout/:id" exact Component={Checkout} />
          <HomeTemplates path="/" exact Component={Home} />


          {/* Admin */}
          {/* Films */}
          <AdminTemplates path="/admin" exact Component={Dashboard} />
          <AdminTemplates path="/admin/films" exact Component={Films} />
          <AdminTemplates path="/admin/films/addnew" exact Component={AddNew} />
          <AdminTemplates path="/admin/films/edit/:id" exact Component={Edit} />
          <AdminTemplates
            path="/admin/films/showtime/:id/:tenphim"
            exact
            Component={ShowTime}
          />

          {/* Users */}
          <AdminTemplates path="/admin/users" exact Component={Users} />
          <AdminTemplates path="/admin/users/addnew" exact Component={AddUsers} />
          

        </Switch>
      </Router>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
