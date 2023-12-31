import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid f00t mt-5 position-relative">

        <span className='position-absolute foot_set'>
          <img src="../footer_img/last_1.png" alt="" className='foot_ab'/>
        </span>

        <div className="container">
          <div className="col-12 d-flex">

            <div className="col-3">
              <span className='mt-3'>
                <img src="../footer_img/f_logo.png" alt="" />
              </span>
            </div>
            <div className="col-3 p-2 mt-3">

              <ul>
                <li><a href="" className='f_text'>Home</a></li>
                <li><a href="" className='f_text'>Types of Apartments</a></li>
                <li><a href="" className='f_text'>AboutUs</a></li>
                <li><a href="" className='f_text'>Contact Us</a></li>
              </ul>
            </div>

            <div className="col-3 p-2 mt-3">
              <p className='mt-1 mb-1 f_p'>ABOUT BOUGAINVILLA APARTMENT
                6,RAJVANSH SOCIETY, NR.RATANDEEP HOSPITAL, NEW CITY LIGHT ROAD,SURAT,GUJARAT -395007</p>

              <h3 className='mt-3'>+91 7801903348</h3>

              <p className='mt-3'>BOUGAINVILLASURAT@GMAIL.COM</p>
            </div>

            <div className="col-3">
              <div className='map mt-4 p-1'>
                <img src="../footer_img/map.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer