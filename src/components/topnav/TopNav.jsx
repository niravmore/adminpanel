import React from 'react'

import './topnav.css'

const TopNav = () => {
    return (
        <div className='topnav'>
            <div className='topnav__search'>
                <input type="text" placeholder='Search Here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right-item'>
                    NavPage_1
                    {/* Drop down here */}
                </div>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right-item'>
                    NavPage_2
                    {/* Drop down here */}
                </div>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right-item'>
                    NavPage_3
                    {/* Drop down here */}
                </div>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right-item'>
                    NavPage_4
                    {/* Drop down here */}
                </div>
            </div>
        </div>
    )
}

export default TopNav
