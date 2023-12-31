import React from 'react'


const Aboutus = () => {
  return (

    <div className="conatiner-fluid">
      <div className='row'>
        <div className="col-3"></div>
        <div className="col-6 position-relative">

          <span className='position-absolute pic_14 '>
            <img src="../img/Rectangle 14.png" className='' alt="" />
          </span>

          <span className='position-absolute pic_15'>
            <img src="../img/Rectangle 15.png" className=' ' alt="" />
          </span>

          <div className=' border-0 ab  p-5'>
            <div className="text-center p-5 ">
              <h3 className='mt-2 ab_h mb-1'>ABout US</h3>

              <p className='ab_p1 mb-2 mt-3'>Experience the Wonder of Nature in Comfort and Style</p>

              <p className='mt-2 ab_p2 mb-3'>Bougainvilla Apartment Design is a fusion design concept which represents the classic French type furniture design with a boutique colourful concepts of the Architect Lt. Mr. TrilochanChhaya. Architect has put his life time experience to design building in a rustic and an artistic way.</p>
              <p className='mt-3 ab_p3 mb-3 '>Developers have made best effort to restore all the tree surrounding the property to allow staying guest to feel the taste of nature and to experience a green home. Moreover, each apartment has a small balcony to allow guest breath abundant fresh air and restore the energy for the day.</p>

              <button className='mt-2 btn border border-dark'>See More</button>
            </div>
          </div>
        </div>
        <div className="col-3">
        </div>
      </div>
    </div>

  )
}

export default Aboutus