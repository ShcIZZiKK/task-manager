import React from 'react';

// Views
import PieChart from '../PieChart/PieChart';

const ProgressPercent = (props) => {
    const { title = '', count = 0, percent = 0, all = 0, info = '' } = props;

    return (
        <div className="progress-percent">
            <div className="progress-percent__top">
                <div className="progress-percent__top-title">{title}</div>
                <div className="progress-percent__top-count">{count}</div>
            </div>
            <div className="progress-percent__bottom">
                <div className="progress-percent__bottom-percent">
                    <PieChart percent={percent} />
                </div>
                <div className="progress-percent__bottom-info">
                    <span>{all}</span>
                    <span>{info}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressPercent;
