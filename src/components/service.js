import React from "react";
import b from '../images/bedroom/b_5.jpg';
import bb from '../images/Belcuni_Room/b_b_1.jpg';
import ab from '../images/attach_Bedroom/a_b_3.jpg';

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Service </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className='row'>
                    <div className="col-12 max-auto">
                        <div className="row gy-4">
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={b} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Bedroom</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/service/bedroom" class="btn btn-primary">Room</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={bb} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">bedroom with Belcuni</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/service/belcuniroom" class="btn btn-primary">Room</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={ab} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Attatch bathroom</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="service/attatchbathroom" class="btn btn-primary">Room</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Service;