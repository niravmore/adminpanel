import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from '../sidebar/Sidebar'
import Rouutes from '../Rouutes'
import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'

const Layout = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/customers" element={<Customers />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Layout
