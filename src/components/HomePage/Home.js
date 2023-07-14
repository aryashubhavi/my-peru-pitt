import React from "react";
import Header from '../UI/Header/Header';
import './Home.css';

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
            </div>
        </div>
    );
}

export default HomePage;
