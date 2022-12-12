import React from 'react';

const Status = ({ color, title }) => {
    return (
        <div className="status">
            <span className="status__color" style={{ backgroundColor: color }}></span>
            <span className="status__name">{title}</span>
        </div>
    );
};

export default Status;
