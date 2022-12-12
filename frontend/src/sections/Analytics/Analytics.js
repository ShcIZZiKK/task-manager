import React from 'react';

// Helpers

// Views
import ChartsBlock from '../../blocks/ChartsBlock/ChartsBlock';
import DatePicker from '../../components/Views/DatePicker/DatePicker';
import LayoutWidthRightSidebar from '../../components/Layouts/LayoutWidthRightSidebar';

const Analytics = ({title, modify = ''}) => {
    return (
        <LayoutWidthRightSidebar content={<ChartsBlock />} sidebar={<DatePicker date={new Date()} />}>
        </LayoutWidthRightSidebar>
    );
};

export default Analytics;
