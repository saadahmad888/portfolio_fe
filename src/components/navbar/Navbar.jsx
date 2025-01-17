import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Link className='singleLink barLink' href="">
                    <span className='barbox'>
                        <span className="bar1"></span>
                        <span className="bar2"></span>
                        <span className="bar3"></span>
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Navbar