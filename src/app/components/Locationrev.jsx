import React from 'react'

const Locationrev = () => {
    return (
        <div>
            <div className="container mt-4">
                <div className="d-flex">
                   
                    <div className="col-6 text-leftt">
                        <h3 className='mt-2 ab_hh mb-1'>Location Area</h3>

                        <p className='ab_p11 mb-2 mt-3'>Nearby Location</p>
                        <p className='mt-2 ab_p22 mb-3 mt-4 text-left'>BEasy access for people travelling by Car to the City.
                            About 4 Km from Palsana Surat Highway
                            About 4 km from Surat International Exhibition centre (Sarsana Dome).
                            About 15 minute drive from Surat International Airport.
                            Less than 1 Km from Udhna Magdalla Road</p>

                        <button className='mt-2 btn border border-dark'>See More</button>
                    </div>

                    <div className="col-6">
                        <img src="../img/rev_img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locationrev