import React from 'react';

import Sidebar from '../Views/Sidebar/Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="layout__content">{children}</div>
        </div>
    );
};

export default Layout;
