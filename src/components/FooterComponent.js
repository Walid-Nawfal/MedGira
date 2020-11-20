import React from 'react';
import {Link} from 'react-router-dom'

const Footer = (props) => {
    return(
        <React.Fragment>
            {/* <div><img src="assets/images/wave.png" alt=""></img></div> */}
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-10 col-sm-4 offset-1">
                            <h2> MedGira </h2>
                            <ul className="list-unstyled">
                                <li className="d-block">
                                    <Link to="/home"><span className="fa fa-home"></span>Home</Link>
                                </li>
                                <li className="d-block" id="footer-links">
                                    <Link to="/conatctus"><span className="fa fa-book"></span>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-10 col-sm-4 offset-1">
                            <h3>PI BootCamp</h3>
                            <h4>Walid Nawfal</h4>
                            <h4>Nadeen Shaaban</h4>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    );
}

export default Footer;