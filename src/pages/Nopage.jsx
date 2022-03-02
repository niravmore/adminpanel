import React from 'react'

import '../assets/css/nopage.css'

const Nopage = () => {
    return (
        <div className='nopagemain'> 
            <header>
                <a href='#'>Terms and Conditions</a>
            </header>
            <section>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                    </ul>
                </nav>
                <article>
                    <h2>Work in progress</h2>
                </article>
            </section>
            <footer>
                <a href='#'>Contact Us</a>
            </footer>
        </div>
    )
}

export default Nopage
