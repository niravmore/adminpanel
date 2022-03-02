import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Category from '../pages/Category'
import Year from '../pages/Year'
import Month from '../pages/Month'
import Documente from '../pages/Documente'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/category' component={Category} />
            <Route path='/year' component={Year} />
            <Route path='/month' component={Month} />
            <Route path='/document' component={Documente} />
        </Switch>
    )
}

export default Routes
