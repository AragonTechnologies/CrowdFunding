import React from 'react';
import Aux from "../../hoc/aux"
import Footer from "./Footer"

const namespaces = {
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  };

const names2 ={
    "xml:space":"preserve"
            
}
const Home = () => {
    return(
        <Aux>
        <section className="slice py-5">
        <div className="container">
            <div className="row row-grid align-items-center">
                <div className="col-12 col-md-5 col-lg-6 order-md-2">
                    {/* <!-- Image -->
                     */}
                    <figure className="w-100">
                        <img 
                            alt="Image placeholder" 
                            src="assets/img/svg/illustrations/illustration-3.svg" 
                            className="img-fluid mw-md-120" />
                    </figure>
                </div>
                <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                    {/* <!-- Heading -->
                     */}
                    <h1 className="display-4 text-center text-md-left mb-3">
                     
                     RAISE FUNDS FOR THE SOCIAL CAUSES AND BUSINESSES YOU <strong className="text-custom">CARE ABOUT</strong>
                    </h1>
                    {/* <!-- Text --> */}
                    <p className="lead text-center text-md-left text-muted">
                    With our Decentralized and a Transparent system, you can start a campaign to fund your dream.                    </p>
                    {/* <!-- Buttons --> */}
                    <div className="text-center text-md-left mt-5">
                        <a href="#" className="btn btn-primary btn-icon">
                            <span className="btn-inner--text">Get started</span><span className="btn-inner--icon">
                                <i data-feather="arrow-right"></i>
                            </span>
                        </a>
                        <a href="#" className="btn btn-neutral btn-icon d-none d-lg-inline-block">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="slice slice-lg pt-lg-6 pb-0 pb-lg-6">
        <div className="container">
            {/* <!-- Title -->
            <!-- Section title --> */}
            <div className="row mb-5 justify-content-center text-center">
                <div className="col-lg-6">
                    <span className="badge badge-soft-success badge-pill badge-lg">
                    Featured Campaigns
                    </span>
                </div>
            </div>
            {/* <!-- Card --> */}
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card border-0 bg-soft-danger">
                        <div className="card-body pb-5">
                            <div className="pt-4 pb-5">
                                <img 
                                src="assets/img/svg/illustrations/illustration-5.svg"
                                 className="img-fluid img-center" 
                                 style={{height: "200px"}} alt="Illustration" />
                            </div>
                            <h5 className="h4 lh-130 text-dark mb-3">Unleash you creativity</h5>
                            <p className="text-dark opacity-6 mb-0">Quick Website UI Kit (FREE) contains components and pages that are easy to customize and change.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 bg-soft-success">
                        <div className="card-body pb-5">
                            <div className="pt-4 pb-5">
                                <img 
                                    src="assets/img/svg/illustrations/illustration-6.svg" 
                                    className="img-fluid img-center" 
                                    style={{height: "200px"}} alt="Illustration" />
                            </div>
                            <h5 className="h4 lh-130 text-dark mb-3">Get more results</h5>
                            <p className="text-dark opacity-6 mb-0">Quick Website UI Kit (FREE) contains components and pages that are easy to customize and change.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 bg-soft-warning">
                        <div className="card-body pb-5">
                            <div className="pt-4 pb-5">
                                <img 
                                src="assets/img/svg/illustrations/illustration-7.svg" 
                                className="img-fluid img-center" 
                                style={{height:"200px"}} alt="Illustration" />
                            </div>
                            <h5 className="h4 lh-130 text-dark mb-3">Increase your audience</h5>
                            <p className="text-dark opacity-6 mb-0">Quick Website UI Kit (FREE) contains components and pages that are easy to customize and change.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="slice slice-lg">
        <div className="container">
            <div className="row row-grid justify-content-around align-items-center">
                <div className="col-lg-6 order-lg-2 ml-lg-auto pl-lg-6">
                    {/* <!-- Heading -->
 */}
                    <h5 className="h2 mt-4">
                    START AND RUN A SUCCESSFUL CROWDFUNDING CAMPAIGN FROM THE COMFORT OF
YOUR ROOM.
                    </h5>
                    {/* <!-- List --> */}
                    <ul className="list-unstyled">
                        <li className="py-2">
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="icon icon-shape icon-primary icon-sm rounded-circle mr-3">
                                        <i className="fas fa-store-alt"></i>
                                    </div>
                                </div>
                                <div>
                                    <span className="h6 mb-0">
                                    Sign up and invite some friends to gain ethers
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="icon icon-shape icon-warning icon-sm rounded-circle mr-3">
                                        <i className="fas fa-palette"></i>
                                    </div>
                                </div>
                                <div>
                                    <span className="h6 mb-0">
                                    Create a campaign and share with your friends for support
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="icon icon-shape icon-success icon-sm rounded-circle mr-3">
                                        <i className="fas fa-cog"></i>
                                    </div>
                                </div>
                                <div>
                                    <span className="h6 mb-0">
                                    Reach your Milestone and your needed funds get deposited into your bank.
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 order-lg-1">
                    {/* <!-- Image --> */}
                    <div className="position-relative zindex-100">
                        <img 
                            alt="Image placeholder" 
                            src="assets/img/svg/illustrations/illustration-2.svg" 
                            className="img-fluid"
                            />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="slice slice-lg bg-section-secondary">
        <div className="container text-center">
            <div className="row justify-content-center mt-4">
                <div className="col-lg-8">
                    {/* <!-- Title --> */}
                    <h2 className="h1 strong-600">
                        Complete features at your hand
                    </h2>
                    {/* <!-- Text --> */}
                    <p className="lead text-muted">
                        Boomerang is a great free UI package based on Bootstrap 4 that includes the most important components and features so you can jumpstart the hard work and get right to the website creation fast and easy.
                    </p>
                    {/* <!-- Buttons --> */}
                    <div className="mt-5">
                        <a href="" className="btn btn-lg btn-warning px-4">
                            Download Free
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </Aux>
    );
}

export default Home;

// <section className="slice slice-lg bg-section-dark pt-5 pt-lg-8">
// <div className="shape-container shape-line shape-position-top shape-orientation-inverse">
//     <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" 
//     {...namespaces}
//     preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" 
//     style={{enableBackground:"new 0 0 2560 100"}} 
//     {...names2}
//     className="">
//         <polygon points="2560 0 2560 100 0 100"></polygon>
//     </svg>
// </div>
// <div className="container position-relative zindex-100">
//     <div className="col">
//         <div className="row justify-content-center">
//             <div className="col-md-10 text-center">
//                 <div className="mt-4 mb-6">
//                     <h2 className="h1 text-white">
//                         Are you ready to grow faster?
//                     </h2>
//                     <h4 className="text-white mt-3">Create your own experience</h4>
//                     {/* <!-- Play button --> */}
//                     <a href="#" className="btn btn-warning btn-icon hover-translate-y-n10 mt-4">
//                         <span className="btn-inner--icon">
//                             <i data-feather="play"></i>
//                         </span>
//                         <span className="btn-inner--text">Learn more</span>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </section>


{/* <section className="slice pt-0">
<div className="container position-relative zindex-100">
    <div className="row">
        <div className="col-xl-4 col-sm-6 mt-n7">
            <div className="card bg-soft-warning border-0 mb-5 hover-translate-y-n10">
                <div className="d-flex p-5">
                    <div>
                        <span className="badge badge-warning badge-pill">New</span>
                    </div>
                    <div className="pl-4">
                        <h5 className="lh-130 text-dark">Listen to the nature</h5>
                        <p className="text-dark opacity-6">
                            Design made simple with a clean and smart HTML markup.
                        </p>
                    </div>
                </div>
                <div className="pb-5">
                    <img 
                        src="assets/img/svg/illustrations/illustration-7.svg" 
                        className="img-fluid img-center" 
                        style={{height: "200px"}} alt="Illustration" 
                        />
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-sm-6 mt-sm-n7">
            <div className="card bg-soft-success border-0 mb-5 hover-translate-y-n10">
                <div className="d-flex p-5">
                    <div>
                        <span className="badge badge-success badge-pill">Tips</span>
                    </div>
                    <div className="pl-4">
                        <h5 className="lh-130 text-dark">Rules not to follow</h5>
                        <p className="text-dark opacity-6">
                            Design made simple with a clean and smart HTML markup.
                        </p>
                    </div>
                </div>
                <div className="pb-5">
                    <img 
                        src="assets/img/svg/illustrations/illustration-6.svg" 
                        className="img-fluid img-center" 
                        style={{height: "200px"}} 
                        alt="Illustration" />
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-md-12 col-sm-6 mt-xl-n7">
            <div className="card bg-soft-danger border-0 mb-5 hover-translate-y-n10">
                <div className="d-flex p-5 p">
                    <div>
                        <span className="badge badge-danger badge-pill">Update</span>
                    </div>
                    <div className="pl-3">
                        <h5 className="lh-130 text-dark">Beware the water</h5>
                        <p className="text-dark opacity-6">
                            Design made simple with a clean and smart HTML markup.
                        </p>
                    </div>
                </div>
                <div className="pb-5">
                    <img 
                        src="assets/img/svg/illustrations/illustration-5.svg" 
                        className="img-fluid img-center" 
                        style={{height: "200px"}} alt="Illustration" />
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<section className="slice slice-lg">
<div className="container">
    <div className="row">
        <div className="col-lg-6">
            <span className="badge badge-primary badge-pill">Key features</span>
            <h5 className="lh-180 mt-4 mb-6">Quick is a premium HTML template that includes adaptable components and pages for various industries, plus new ones each month.</h5>
        </div>
    </div> */}
    {/* <!-- Features --> */}
    {/* <div className="row mx-lg-n4"> */}
        {/* <!-- Features - Col 1 --> */}
        {/* <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
                <div className="p-3 d-flex">
                    <div>
                        <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                            <i data-feather="check"></i>
                        </div>
                    </div>
                    <div>
                        <span className="h6">100% Responsive</span>
                        <p className="text-sm text-muted mb-0">
                            Built to be customized.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
                <div className="p-3 d-flex">
                    <div>
                        <div className="icon icon-shape rounded-circle bg-primary text-white mr-4">
                            <i data-feather="check"></i>
                        </div>
                    </div>
                    <div>
                        <span className="h6">Based on Bootstrap 4</span>
                        <p className="text-sm text-muted mb-0">
                            Built to be customized.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
                <div className="p-3 d-flex">
                    <div>
                        <div className="icon icon-shape rounded-circle bg-danger text-white mr-4">
                            <i data-feather="check"></i>
                        </div>
                    </div>
                    <div>
                        <span className="h6">Built with SASS</span>
                        <p className="text-sm text-muted mb-0">
                            Built to be customized.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
                <div className="p-3 d-flex">
                    <div>
                        <div className="icon icon-shape rounded-circle bg-success text-white mr-4">
                            <i data-feather="check"></i>
                        </div>
                    </div>
                    <div>
                        <span className="h6">300+ components</span>
                        <p className="text-sm text-muted mb-0">
                            Built to be customized.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
                <div className="p-3 d-flex">
                    <div>
                        <div className="icon icon-shape rounded-circle bg-info text-white mr-4">
                            <i data-feather="check"></i>
                        </div>
                    </div>
                    <div>
                        <span className="h6">23+ widgets</span>
                        <p className="text-sm text-muted mb-0">
                            Built to be customized.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 px-lg-4"> */}
            {/* <div className="card shadow-none">
                <div className="p-3 d-flex">
                    <div>
                        <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                            <i data-feather="check"></i>
                        </div>
                    </div>
                    <div>
                        <span className="h6">Bootstrap Flexbox Grid</span>
                        <p className="text-sm text-muted mb-0">
                            Built to be customized.
                        </p>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Features - Col 3 --> */}
        {/* <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
                <div className="p-3 d-flex">
                    <div>
                        <div>
                            <div className="icon icon-shape rounded-circle bg-info text-white mr-4">
                                <i data-feather="check"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="h6">Animate CSS</span>
                        <p className="text-sm text-muted mb-0">
                            Built to be customized.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
                <div className="p-3 d-flex">
                    <div>
                        <div>
                            <div className="icon icon-shape rounded-circle bg-danger text-white mr-4">
                                <i data-feather="check"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="h6">Integrated plugins</span>
                        <p className="text-sm text-muted mb-0">
                            Built to be customized.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 px-lg-4">
            <div className="card shadow-none">
                <div className="p-3 d-flex">
                    <div>
                        <div>
                            <div className="icon icon-shape rounded-circle bg-primary text-white mr-4">
                                <i data-feather="check"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="h6">Smart HTML markup</span>
                        <p className="text-sm text-muted mb-0">
                            Built to be customized.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}
