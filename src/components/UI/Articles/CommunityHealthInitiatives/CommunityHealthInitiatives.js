import React from 'react';
import './CommunityHealthInitiatives.css';
import Diviconimage from '../../Diviconimage/Diviconimage';

const CommunityHealthInitiatives = (props) => {
    const {
        commmunityHealthInitiatives,
        technicalAssistance,
        readMore1,
        text5,
        diviconimage1Props,
    } = props;

    return (
        <div className="article">
            <Diviconimage>{diviconimage1Props.children}</Diviconimage>
            <div className="diviconmain">
                <div className="flex-col">
                    <div className="community-health-initiatives valign-text-middle ptsans-normal-black-18px">
                        {commmunityHealthInitiatives}
                    </div>
                    <p className="technical-assistance valign-text-middle raleway-normal-mine-shaft-14px-2">
                        {technicalAssistance}
                    </p>
                    <div className="link">
                        <div className="read-more valign-text-middle raleway-bold-chathams-blue-14px">
                            {readMore1}
                        </div>
                        <div className="text valign-text-middle fontawesome5free-solid-normal-chathams-blue-16-8px">
                            {text5}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityHealthInitiatives;
