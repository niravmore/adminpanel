import React from 'react'
import DropDown from '../dropdown/DropDown'

import { Link } from 'react-router-dom'

import './topnav.css'

import notifications from '../../assets/JsonData/notification.json'

const renderNotificationItem = (item, index) => (
    <div className='notification-item' key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const TopNav = () => {
    return (
        <div className='topnav'>
            <div className='topnav__search'>
                <input type="text" placeholder='Search Here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right-item'>
                    {/* Drop down here */}
                    <DropDown
                        icon='bx bx-user'
                    />
                </div>
                <div className='topnav__right-item'>
                    {/* Drop down here */}
                    <DropDown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div>
                <div className='topnav__right-item'>
                    {/* Drop down here */}
                    <DropDown />
                </div>
            </div>
        </div>
    )
}

export default TopNav
