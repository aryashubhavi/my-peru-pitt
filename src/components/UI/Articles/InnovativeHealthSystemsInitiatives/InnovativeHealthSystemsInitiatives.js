import React from 'react';
import './InnovativeHealthSystemsInitiatives.css';


const InnovativeHealthSystemsInitiatives = (props) => {
    const {
        commmunityHealthInitiatives,
        technicalAssistance,
        readMore1,
        text5,
    } = props;

    return (
        <div className="article">
            <div className="diviconimage">
                <div className="pseudo"></div>
                <div className="pseudo-1"></div>
                <div className-="text-3 valign-text-middle">
                    {text6}
                </div>
            </div>
            <div className="diviconmain-1">
                <div className="flex-col-1">
                    <div className="innovative-health-system-initiaties valign-text-middle ptsans-normal-black-18px">
                        {innovativeHealthSystemInitiatives}
                    </div>
                    <p className="support-the-implemen valign-text-middle raleway-normal-mine-shaft-14px-22">
                        {supportTheImplementation}
                    </p>
                    <div className="link-1">
                        <div className="read-more valign-text-middle raleway-bold-chathams-blue-14px">
                            {readMore2}
                        </div>
                        <div className="text valign-text-middle fontawesome5free-solid-normal-chathams-blue-16-8px">
                            {text7}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InnovativeHealthSystemsInitiatives;