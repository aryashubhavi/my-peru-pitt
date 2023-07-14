import React from 'react';
import './Header.css';
import Carousel from '../Carousel/Carousel';
import {ItemLink, ItemLink2} from '../ItemLink/ItemLink';

import PeruLogo from '../assets/images/PERU_logo.png';
import PharmacyLogo from '../assets/images/Logo_SchoolOfPharmacy.png';

const Header = (props) => {
    const {
        itemLinkPublications,
        itemLinkNews,
        itemLinkContactUs,
    } = props;

    return (
        <header className="header">
            <div className="pre-header"></div>
            <div className="divheader">
                <div className="divheader-core">
                    <img className="PeruLogo" src={PeruLogo} alt="Peru Logo" />
                    <div className="list raleway-bold-chathams-blue-16px">
                        <ItemLink />
                        <ItemLink2 />
                        <div className="item-link-publications valign-text-middle">
                            {itemLinkPublications}
                        </div>
                        <div className="item-link-news valign-text-middle">
                            {itemLinkNews}
                        </div>
                        <div className="item-link-contact-us valign-text-middle">
                            {itemLinkContactUs}
                        </div>
                        <img className="PharmacyLogo" src={PharmacyLogo} alt="PharmacyLogo" />
                    </div>
                </div>
            </div>
            <Carousel />
        </header>
    );
}

export default Header;
