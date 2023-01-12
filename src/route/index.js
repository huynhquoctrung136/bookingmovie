import Contact from '../pages/Contact/Contact'
import Detail from '../pages/Detail/Detail'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import News from '../pages/News/News'
import Profile from '../pages/Profile/Profile'
import Register from '../pages/Register/Register'
import Checkout from '../pages/Checkout/Checkout'
import Dashboard from '../pages/Admin/Dashboard/Dashboard'
import Films from '../pages/Admin/Films/Films'
import Edit from '../pages/Admin/Films/Edit'
import ShowTime from '../pages/Admin/Films/ShowTime'
import Users from '../pages/Admin/Users/Users'
import AddUsers from '../pages/Admin/Users/AddUsers'
import AddNew from '../pages/Admin/Films/AddNew'
const routeHome = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
  {
    path: '/news',
    component: News,
    exact: true,
  },
  {
    path: '/detail/:id',
    component: Detail,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
]

const routeUser = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
]

const routeCheckout = [
  {
    path: '/checkout/:id',
    component: Checkout,
    exact: true,
  },
]

const routeAdmin = [
  {
    path: '/admin',
    component: Films,
    exact: true,
  },
  {
    path: '/admin/films',
    component: Films,
    exact: true,
  },
  {
    path: '/admin/films/addnew',
    component: AddNew,
    exact: true,
  },
  {
    path: '/admin/films/edit/:id',
    component: Edit,
    exact: true,
  },
  {
    path: '/admin/films/showtime/:id/:tenphim',
    component: ShowTime,
    exact: true,
  },
  {
    path: '/admin/users',
    component: Users,
    exact: true,
  },
  {
    path: '/admin/users/addnew',
    component: AddUsers,
    exact: true,
  },
]

export { routeHome, routeUser, routeCheckout, routeAdmin }
