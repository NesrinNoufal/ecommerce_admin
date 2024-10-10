import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../AddProduct/AddProduct'
import ListProduct from '../ListProduct/ListProduct'

const Content = () => {
  return (
    <div className='content'>
        <p></p>
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/listproduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

export default Content
