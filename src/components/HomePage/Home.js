import React from "react";
import Header from '../UI/Header/Header';
import './Home.css';
import VAinitiatives from "../UI/Articles/VAinitiatives/VAinitiatives";

function HomePage() {
    const headerProps = {
        itemLinkPublications: "Publications",
        itemLinkNews: "News",
        itemLinkContactUs: "Contact Us",
    };

    return (
        <div className="container-center-horizontal">
            <div className="homeScreen">  {/* myperu-pitt-homepage screen */}
                <Header {...headerProps} />
                <div className="divintroaction-core">
                    <h1 className="heading-3-program valign-text-middle">
                        {heading3Program}
                    </h1>
                    <p className="peru-is-dedicated-to valign-text-middle">
                        {peruIsDedicatedTo}
                    </p>
                </div>
                <div className="divsection-home-inner">
                    {CommunityHealthInitiatives}
                    {InnovativeHealthSystemsInitiatives}
                    {VAinitiatives}
                    {SCOPEstatewide}
                </div>
                <Footer PharmacyLogo={footerProps.PharmacyLogo}/>
            </div>
        </div>
    );
}

export default HomePage;
