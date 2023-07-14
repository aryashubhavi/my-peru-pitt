import React from 'react';
import './Footer.css';

import PharmacyLogo from '../assets/images/Logo_SchoolOfPharmacy.png';

function Footer(props) {
    const {
        PharmacyLogo,
    } = props;

    return (
        <footer className="footer">
            <div className="divfooter">
                <div className="divfooter-core">
                    <div className="aside">
                        <div className="heading-3-general-inquiries valign-text-middle ptsans-normal-mine-shaft-20px">
                            General Inquiries:
                        </div>
                        <div className="divtextwidget">
                            <div className="p">
                                <p classname="university-of-pittsb valign-text-middle raleway-normal-mine-shaft-14px2">
                                    University of Pittsburgh, School of Pharmacy <br />
                                    Program Evaluation and Research Unit (PERU)
                                </p>
                            </div>
                            <div className="p-1">
                                <p className="link-contact-us valign-text-middle raleway-bold-white-14px">
                                    <span>
                                        <span className="raleway-bold-chathams-blue-14px">
                                            Contact Us <br />
                                        </span>
                                        <span className="raleway-normal-mine-shaft-14px2">
                                            5607 Baum Blvd, Pittsburgh, PA 15206 <br />
                                            412-383-0217
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="divfooter-col3">
                        <img className="aside-logo_-school-of-pharmacy" src={PharmacyLogo} alt="PharmacyLogo" />
                        <div className="aside-link-input">
                            <div className="logo valign-text-middle raleway-normal-white-14px">
                                Login
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divsub-footer"></div>
        </footer>
    );
}

export default Footer;