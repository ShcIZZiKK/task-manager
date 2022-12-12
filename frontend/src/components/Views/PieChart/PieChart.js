import React from 'react';
// 31.8309886183
const PieChart = ({ percent }) => {
    return (
        <div className="pie-chart">
            <div className="pie-chart__svg">
                <svg
                    viewBox="0 0 33.83098862 33.83098862"
                    width="180"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        className="pie-chart__svg-bg"
                        strokeWidth="2"
                        fill="none"
                        cx="16.91549431"
                        cy="16.91549431"
                        r="15.91549431"
                    />
                    <circle
                        className="pie-chart__svg-circle"
                        strokeWidth="2"
                        strokeDasharray={`${percent}, 100`}
                        strokeLinecap="round"
                        fill="none"
                        cx="16.91549431"
                        cy="16.91549431"
                        r="15.91549431"
                    />
                </svg>
            </div>
            <div className="pie-chart__value">{percent}%</div>
        </div>
    );
};

export default PieChart;
