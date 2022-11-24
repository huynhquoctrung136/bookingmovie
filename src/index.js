import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout'
import reportWebVitals from './reportWebVitals'
// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
// // //Font-Awesome
// import '@fortawesome/fontawesome-free/css/all.min.css'
//React-Toastify
import 'react-toastify/dist/ReactToastify.css'
//ant
import 'antd/dist/antd.css'
//Slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//scss
import './scss/main.scss'
//store redux
import { Provider } from 'react-redux'
import { store } from './redux/configStore'
//jq
// import $ from "jquery";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
