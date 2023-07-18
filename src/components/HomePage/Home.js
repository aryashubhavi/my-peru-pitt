import React from "react";
import Header from '../UI/Header/Header';
import './Home.css';
import VAinitiatives from "../UI/Articles/VAinitiatives/VAinitiatives";
import Footer from "../UI/Footer/Footer";
import CommunityHealthInitiatives from "../UI/Articles/CommunityHealthInitiatives/CommunityHealthInitiatives";
import InnovativeHealthSystemsInitiatives from "../UI/Articles/InnovativeHealthSystemsInitiatives/InnovativeHealthSystemsInitiatives";
import SCOPEstatewide from "../UI/Articles/SCOPEstatewide/SCOPEstatewide";
import Carousel from '../UI/Carousel/Carousel';

function HomePage() {
    const headerProps = {
        itemLinkPublications: "Publications",
        itemLinkNews: "News",
        itemLinkContactUs: "Contact Us",
    };

    const heading3Program = "Program Evaluation and Research Unit";
    const peruIsDedicatedTo =  (
        <React.Fragment>
            PERU is dedicated to meaningful work that facilitates each patient or community 
            member&#x27;s ability to achieve optimal health, well-being, recovery and choice.
        </React.Fragment>
    );

    const diviconimage1Data = {
        children: " ",
    };

    const diviconimage2Data = {
        children: " ",
        className: "diviconimage-3"
    };

    const communityHealthInitiativesProps = {
        commmunityHealthInitiatives: (
            <React.Fragment>
                Community Health <br /> Initiatives
            </React.Fragment>
        ),
        technicalAssistance: (
            <React.Fragment>
                Technical Assistance Centers <br /> 
                (TACs) providing strategic support <br />
                on multiple projects
            </React.Fragment>
        ),
        readMore1: "Read More",
        text5: " ",
        diviconimage1Props: diviconimage1Data,
    };

    const innovativeHealthSystemsInitiativesProps = {
        innovativeHealthSystemInitiatives: (
            <React.Fragment>
                Innovative Health System <br /> Initiatives
            </React.Fragment>
        ),
        supportTheImplementation: (
            <React.Fragment>
                Support the implementation and <br />
                evaluation of best practices within
                <br />
                health systems
            </React.Fragment>
        ),
        readMore2: "Read More",
        text6: " ",
        text7: " ",
    };

    const VAinitiativesProps = {
        text8: " ",
        heading3VaInitiatives: "VA Initiatives",
        veteransAffairsVa: (
            <React.Fragment>
                Veterans Affairs (VA) collaboration <br />
                with Veterans Integrated Service <br />
                Network 23 (VISN 23)
            </React.Fragment>
        ),
        readMore3: "Read More",
        text9: " ", 
    };

    const SCOPEstatewideProps = {
        heading3ScopeStatewide: "SCOPE Statewide",
        theScopeStatewide: (
            <React.Fragment>
                The SCOPE Statewide project <br />
                trains first responders to increase <br />
                naloxone administration and <br />
                eliminate overdose deaths within <br />
                Pennsylvania.
            </React.Fragment>
        ),
        registerNow: "Register Now",
        text11: " ",
        diviconimage2Props: diviconimage2Data,
    };

    return (
        
        <div className="container-center-horizontal">
            <div className="homeScreen">  {/* myperu-pitt-homepage screen */}
                <div className="header-container">
                    <Header {...headerProps} />
                </div>
                <div className="content-container">
                    <div className="carousel-container">
                        <Carousel />
                    </div>
                    <div className="divintroaction-core">
                        <h1 className="heading-3-program valign-text-middle">
                            {heading3Program}
                        </h1>
                        <p className="peru-is-dedicated-to valign-text-middle">
                            {peruIsDedicatedTo}
                        </p>
                    </div>
                    <div className="divsection-home-inner">
                        <CommunityHealthInitiatives {...communityHealthInitiativesProps} />
                        <InnovativeHealthSystemsInitiatives {...innovativeHealthSystemsInitiativesProps} />
                        <VAinitiatives {...VAinitiativesProps}/>
                        <SCOPEstatewide {...SCOPEstatewideProps}/>
                    </div>
                </div>
               <Footer />
            </div>
        </div>
    );
}

export default HomePage;

