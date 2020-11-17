import React from 'react';
import {Link} from 'react-router-dom'

const Footer = (props) => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-4 offset-1">
                        <h3>PI BootCamp</h3>
                        <h4>Walid Nawfal</h4>
                        <h4>Nadeen Shaaban</h4>
                    </div>
                    <div className="col-10 col-sm-4 offset-1">
                        <ul className="list=unstyled">
                            <Link to="/home"><span className="fa fa-home"></span>Home</Link>
                            <Link to="/conatctus"><span className="fa fa-book"></span>Contact Us</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;