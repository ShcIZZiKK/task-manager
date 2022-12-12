import React from 'react';

// Views
import LineChart from '../../components/Views/LineChart/LineChart';
import ProgressPercent from '../../components/Views/ProgressPercent/ProgressPercent';

const ChartsBlock = () => {
    return (
        <div className="chart-block">
            <div className="chart-block__item chart-block__column">
                <ProgressPercent
                    title="Всего проектов"
                    count={3}
                    percent={33}
                    all={1}
                    info="Успешно"
                />
                <ProgressPercent
                    title="Всего клиентов"
                    count={50}
                    percent={50}
                    all={25}
                    info="Довольных"
                />
            </div>
            <div className="chart-block__item chart-block__flex">
                <div>Неделя</div>
                <LineChart />
            </div>
        </div>
    );
};

export default ChartsBlock;
