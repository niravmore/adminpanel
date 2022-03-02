import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from '../sidebar/Sidebar'
import Rouutes from '../Rouutes'
import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'

const Layout = () => {
  return (
    <BrowserRouter>
        <Route path='/'>
            <div className='layout'>
                <Sidebar/>
                <div className='layout__content'>
                    <div className='layout__content-main'>
                        <h1>Welcome to Admin panel</h1>
                        <h2>Please Login</h2>
                        <Rouutes />
                    </div>
                </div>
            </div>
        </Route>
    </BrowserRouter>
  )
}

export default Layout
