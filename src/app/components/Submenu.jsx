import React from 'react'

const Submenu
  = () => {
    return (
      <>
        <div className="container  ">
          <span className='d-flex align-items-center justify-content-evenly'>
            <span className='col-3'>
              <p className='menu_h h3 text-r'>Amenities</p>
            </span>
            <span className='col-3 text-left' >
              <img src="../img/Vector.png" alt="" />
            </span>
            <div className="col-3"></div>
            <div className="col-3"></div>
          </span>
        </div>

        <div className="container mt-3">
          <div className="d-flex">
            <div className="col-2">
              <div className="card border-0">
                <span>
                  <img src="../MEnu_logo/1.png" alt="" />
                </span>
                <h2 className=' mt-2 sub_menu_head2'>Restaurants</h2>
              </div>
            </div>
            <div className="col-2">
              <div className="card border-0">
                <span>
                  <img src="../MEnu_logo/5.png" alt="" />
                </span>
                <h2 className=' mt-2 sub_menu_head2'>TV</h2>
              </div>
            </div>
            <div className="col-2">
              <div className="card border-0">
                <span>
                  <img src="../MEnu_logo/8.png" alt="" />
                </span>
                <h2 className=' mt-2 sub_menu_head2'>Elevator/Lift</h2>
              </div>
            </div>
            <div className="col-2">
              <div className="card border-0">
                <span>
                  <img src="../MEnu_logo/2.png" alt="" />
                </span>
                <h2 className=' mt-2 sub_menu_head2'>Caretaker</h2>
              </div>
            </div>

            <div className="col-2">
              <div className="card border-0">
                <span>
                  <img src="../MEnu_logo/7.png" alt="" />
                </span>
                <h2 className=' mt-2 sub_menu_head2'>Air cconditioner </h2>
              </div>
            </div>
            <div className="col-2">
              <div className="card border-0">
                <span>
                  <img src="../MEnu_logo/3.png " alt="" />
                </span>
                <h2 className=' mt-2 sub_menu_head2'>Lageg</h2>
              </div>
            </div>
          </div>
        </div>
      </>

    )
  }

export default Submenu