import React from "react";
import AB1 from '../images/attach_Bedroom/a_b1.jpg';
import AB2 from '../images/attach_Bedroom/a_b_2.jpg';
import AB3 from '../images/attach_Bedroom/a_b_3.jpg';
import AB4 from '../images/attach_Bedroom/a_b_3.jpg';
import AB5 from '../images/attach_Bedroom/a_b_5.jpg';
import AB6 from '../images/attach_Bedroom/a_b_6.jpg';

const AttachBathRoomPage = () => {
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
                                    <img src={AB1} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Attatch_BathRoom</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={AB2} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-02</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={AB3} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-03</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={AB4} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-04</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={AB5} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-05</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img src={AB6} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Iamge-06</h5>
                                        <p class="card-text">Some quick example text to build on the Iamge-0 and make up the bulk of the card's content.</p>
                                        <a href="/order" class="btn btn-primary">Order</a>
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

export default AttachBathRoomPage;