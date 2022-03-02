import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Rouutes = () => {
  return (
    <Routes>
        <Route path='/' component={Dashboard}/>
        <Route path='/customers' component={Customers}/>
    </Routes>
  )
}

export default Rouutes
