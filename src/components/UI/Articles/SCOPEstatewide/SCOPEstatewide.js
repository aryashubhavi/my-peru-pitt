import React from 'react';
import './SCOPEstatewide.css';


const SCOPEstatewide = (props) => {
    const {
        //commmunityHealthInitiatives,
        //technicalAssistance,
        //readMore1,
        //text5,
    } = props;

    return (
        <div className="article">
            <Diviconimage className={diviconimage2Props.className}>
                {diviconimage2Props.children}
            </Diviconimage>
            <div className="diviconmain-3">
                <div className="flex-col-3">
                    <div className="heading-3-scope-statewide valign-text-middle ptsans-normal-black-18px">
                        {heading3ScopeStatewide}
                    </div>
                    <p className="the-scope-statewide valign-text-middle raleway-normal-mine-shaft-14px-22">
                        {theScopeStatewide}
                    </p>
                    <div className="link-2">
                        <div className="register-now valign-text-middle raleway-bold-chathams-blue-14px">
                            {registerNow}
                        </div>
                        <div className="text valign-text-middle fontawesome5free-solid-normal-chathams-blue-16-8px">
                            {text11}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SCOPEstatewide;