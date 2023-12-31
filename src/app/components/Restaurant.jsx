import React from 'react'

const Restaurant = () => {
    return (
        <div className='container mb-3'>

            <div className="text-center p-5 mb-4">
                <h3 className='mt-2 ab_h mb-1'>DINING EXPERIENCE</h3>

                <p className='ab_p1 mb-2 mt-3'>we'll even take you to dinner</p>

                <p className='mt-2 ab_p2 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada elit ipsum, nec ultricies diam commodo non. Duis nec elit diam. Nunc rutrum, velit sed vehicula cursus, purus turpis tincidunt erat, sed varius erat metus quis lectus. Sed et metus dignissim, suscipit odio at, placerat purus. Sed facilisis iaculis sapien, ac sodales nulla. Nullam sed congue odio, at ornare eros. </p>


            </div>
            <div className="container">
                <div className="col-12 d-flex justify-content-center align-itmes-center  text-center mx-auto">
                    <div className="col-6">
                        <h2 className='restro_head'>Restaurant</h2>
                        <div className='card border-0 p-5 r_img1 position-relative '>
                            <img src="../img/102.png" alt="" />

                            <span className='position-absolute  r_img3 '>
                                <img src="../img/103.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className='card border-0 p-5 r_img2'>
                            <img src="../img/101.png" alt="" />
                        </div>
                        <h2 className='restro_head'>Cafeteria</h2>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Restaurant