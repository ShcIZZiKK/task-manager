import React from 'react';

const LayoutWidthRightSidebar = ({content, sidebar}) => {
    return (
        <div className="layout-sidebar">
            <div className="layout-sidebar__content">{content}</div>
            <div className="layout-sidebar__sidebar">{sidebar}</div>
        </div>
    );
};

export default LayoutWidthRightSidebar;
