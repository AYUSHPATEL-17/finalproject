import React from 'react'
import styles from '../style/header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <header className='mt-3 position-absolute w-100 z-index '>

                <div className='container header_body p-1'>
                    <ul className='list-unstyled  d-flex mx-auto justify-content-center justify-content-evenly align-items-center'>
                        <li ><Link href="/" className={`text-decoration-none font_header`}>Home</Link></li>
                        <li ><Link href="/studio" className='text-decoration-none font_header'>Types Of Apartments</Link></li>
                        <li ><Link href="/"><img src="img/header-logo.png" alt="" className='img' /></Link></li>
                        <li ><Link href="/gallery" className='text-decoration-none font_header'>Gallery</Link></li>
                        <li ><Link href="/aboutus" className='text-decoration-none font_header'>About Us</Link></li>
                        <li ><Link href="/contactus" className='text-decoration-none font_header'>Contact Us</Link></li>


                    </ul>

                </div>
            </header>
        </>
    )
}

export default Header