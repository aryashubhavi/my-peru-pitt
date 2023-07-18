import React from 'react';
import './InnovativeHealthSystemsInitiatives.css';

const InnovativeHealthSystemsInitiatives = (props) => {
    const {
        innovativeHealthSystemInitiatives,
        supportTheImplementation,
        readMore2,
        text6,
        text7,
    } = props;

    return (
        <div className="article">
            <div className="diviconimage">
                <div className="text-3 valign-text-middle">
                    {text6}
                </div>
            </div>
            <div className="diviconmain-1">
                <div className="flex-col-1">
                    <div className="innovative-health-system-initiatives valign-text-middle ptsans-normal-black-18px">
                        {innovativeHealthSystemInitiatives}
                    </div>
                    <p className="support-the-implementation valign-text-middle raleway-normal-mine-shaft-14px-2">
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
