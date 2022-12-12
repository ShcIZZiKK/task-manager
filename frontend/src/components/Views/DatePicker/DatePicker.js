import React, { useState } from 'react';

// Helpers
import Calendar, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);

const DatePicker = ({ date, functest }) => {
    const [startDate, setStartDate] = useState(date);

    return (
        <div className="date-picker">
            <Calendar
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date);
                    functest(date);
                }}
                inline
                disabledKeyboardNavigation
                locale="ru"
                calendarClassName="date-picker_theme_custom"
            />
        </div>
    );
};

export default DatePicker;
