import React from 'react';
import './ItemLink.css';

const ItemLink = () => {
    return (
        <div className="item-link-2">
            <div className = "about valign-text-middle raleway-bold-chathams-blue-16px">
                About
            </div>
            <div className="text-9 valign-text-middle fontawesome5free-solid-normal-chathams-blue-15px">

            </div>
        </div>
    );
}

const ItemLink2 = () => {
    return (
        <div className="item-link-3">
            <div className = "programs-and-research valign-text-middle raleway-bold-chathams-blue-16px">
                Programs and Research
            </div>
            <div className="text-10 valign-text-middle fontawesome5free-solid-normal-chathams-blue-15px">
            </div>
        </div>    
    );
}

export { ItemLink, ItemLink2}
