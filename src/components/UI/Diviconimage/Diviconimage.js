import React from 'react';
import './Diviconimage.css';

function Diviconimage(props) {
    const {children, className} = props;

    return (
        <div className={`diviconimage-2 ${className || ""}`}>
            <div className="text-1 valign-text-middle fontawesome5free-solid-normal-white-21px">
                {children}
            </div>
        </div>
    );
}

export default Diviconimage;