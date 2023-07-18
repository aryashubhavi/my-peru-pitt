import React from 'react';
import './VAinitiatives.css';


const VAinitiatives = (props) => {
    const {
        text8,
        heading3VaInitiatives,
        veteransAffairsVa,
        readMore3,
        text9,
    } = props;

    return (
        <div className="article">
            <div className="diviconimage-1">
                <div className-="text-5 valign-text-middle fontawesome5free-solid-normal-white-21px">
                    {text8}
                </div>
            </div>
            <div className="diviconmain-2">
                <div className="flex-col-2">
                    <div className="heading-3-va-initiatives valign-text-middle ptsans-normal-black-18px">
                        {heading3VaInitiatives}
                    </div>
                    <p className="veterans-affairs-va valign-text-middle raleway-normal-mine-shaft-14px-2">
                        {veteransAffairsVa}
                    </p>
                    <div className="link">
                        <div className="read-more valign-text-middle raleway-bold-chathams-blue-14px">
                            {readMore3}
                        </div>
                        <div className="text valign-text-middle fontawesome5free-solid-normal-chathams-blue-16-8px">
                            {text9}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VAinitiatives;