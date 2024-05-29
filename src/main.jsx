import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar/NavBar'
import './index.css'
import Middlebar from './middlebar/Middlebar'
import Product from './products/Product'

{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <>
   <NavBar/>
   <Middlebar/>
   <Product/>
   </>
  </React.StrictMode>,
)
