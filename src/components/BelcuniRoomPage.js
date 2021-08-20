import React from "react";
import B1 from '../images/Belcuni_Room/b_b_1.jpg';
import B2 from '../images/Belcuni_Room/b_b_2.jpg';
import B3 from '../images/Belcuni_Room/b_b_3.jpg';
import B4 from '../images/Belcuni_Room/b_b_4.jpg';
import B5 from '../images/Belcuni_Room/b_b_5.jpg';
import B6 from '../images/Belcuni_Room/b_b_6.jpg';

const BelcuniRoomPage = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Bedroom </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className='row'>
                    <div className="col-12 max-auto">
                        <div className="row gy-4">
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={B1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Belcuni_Room</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={B2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-02</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={B3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-03</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={B4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-04</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={B5} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-05</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/feedback" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={B6} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-06</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/feedback" class="btn btn-primary">Order</a>
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

export default BelcuniRoomPage;