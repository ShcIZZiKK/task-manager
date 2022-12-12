import React from 'react';

// Helpers
import Chart from 'chart.js/auto';
import { options } from './setting';

// Views
import { Line } from 'react-chartjs-2';

const LineChart = ({ title }) => {
    const labels = [
        'ЯНВ',
        'ФЕВ',
        'МАР',
        'АПР',
        'МАЙ',
        'ИЮН',
        'ИЮЛ',
        'АВГ',
        'СЕН',
        'ОКТ',
        'НОЯ',
        'ДЕК',
    ];

    return (
        <div className="line-chart">
            {title && <div className="line-chart__title">{title}</div>}
            <div className="line-chart__wrapper">
                <Line
                    datasetIdKey="id"
                    data={{
                        labels,
                        datasets: [
                            {
                                id: 1,
                                label: 'Успешно завершённые проекты',
                                data: [4, 2, 3, 5, 3, 4, 1, 0, 6, 2, 1, 3],
                                fill: false,
                                tension: 0.15,
                            },
                            {
                                id: 2,
                                label: 'Неудачные проекты',
                                data: [1, 0, 1, 2, 5, 1, 0, 2, 3, 1, 4, 0],
                                fill: false,
                                tension: 0.15,
                                borderColor: '#EBEDF7',
                                pointBackgroundColor: '#FFFFFF',
                                pointBorderWidth: 4,
                                pointHoverBorderWidth: 4,
                                pointBorderColor: '#8E92BC',
                                pointRadius: 0,
                                pointHoverRadius: 8,
                                pointHitRadius: 16,
                            },
                        ],
                    }}
                    options={options}
                />
            </div>
        </div>
    );
};

export default LineChart;
