import React from 'react'

const Staf = () => {
    return (
        <div className='container-fluid '>
            <div className="">

                <div className='position-relative '>
                    <span className='staf_back'>
                        <img src="../img/staf.png" alt="" />
                    </span>

                    <div className="container d-flex">

                        <div className="col-6 position-absolute staf_front">
                            <h3 className='mt-2 ab_h mb-1'>OUR STAFF</h3>
                            <p className='ab_p1 mb-2 mt-3'>Service and Safety</p>


                            <p>It’s more like a residence with all the services of a hotel.
                                We serve with smile and make people happy.
                                It is the best place to stay while seeking a relaxation from hustle and bustle of the city.
                                We take all the necessary measures as per the covid-19 guidelines to ensure your safety.We understand value of your health and of your beloved ones.</p>

                        </div>
                        <div className="col-6">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Staf