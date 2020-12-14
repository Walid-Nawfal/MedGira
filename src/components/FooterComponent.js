import React from 'react';
// import {Link} from 'react-router-dom'

const Footer = (props) => {
    return (
        <React.Fragment>
            {/* <div><img src="assets/images/wave.png" alt=""></img></div> */}
            <div className="footer d-flex align-items-end">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-10 col-sm-4">
                            <h2> MedGira </h2>
                            <ul className="list-unstyled d-flex">
                                <li><a href="http://www.facebook.com/profile.php?id="><span className="btn fa fa-facebook-square fa-2x"></span></a></li>
                                <li><a href="mailto:http://gmail.com/"><span className="btn fa fa-envelope fa-2x"></span></a></li>
                            </ul>
                        </div>
                        <div className="col-10 col-sm-4">
                            <div>
                                <h4 className="d-inline">Walid Nawfal</h4>
                                <a href="tel:+96171562917"><span className="fa fa-phone fa-2x ml-3"></span></a>
                                <a href="mailto:walid.nawfal.pro@gmail.com"><span className="fa fa-envelope fa-2x ml-2"></span></a>
                                <a href="https://www.linkedin.com/in/walid-nawfal/"><span className="fa fa-linkedin fa-2x ml-2"></span></a>
                            </div>
                            <div>
                                <h4 className="d-inline">Nadeen Shaaban</h4>
                                <a href="tel:+96170056694"><span className=" fa fa-phone fa-2x ml-3"></span></a>
                                <a href="mailto:nadeen.shaaban.pro@gmail.com"><span className="fa fa-envelope fa-2x ml-2"></span></a>
                                <a href="https://www.linkedin.com/in/nadeen-shaaban-7905411ab/"><span className="fa fa-linkedin fa-2x ml-2"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <h5>© Copyright 2020</h5>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Footer;