import React from 'react';

// helpers
import Utils from '../../../utils/utils';

const ProjectViewInfo = ({ createdAt, royalties, timeSpent, dateEnd }) => {
    const workTimeMinutes = timeSpent.reduce((total, item) => total + item.duration, 0);

    return (
        <ul>
            <li>
                <span>Поставлена:</span>
                <span>{Utils.formatDate(createdAt)}</span>
            </li>
            <li>
                <span>Гонорар:</span>
                <span
                    className="color-blue"
                    dangerouslySetInnerHTML={{ __html: Utils.formatPrice(royalties) }}
                ></span>
            </li>
            <li>
                <span>Затрачено времени:</span>
                <span>{Utils.minutesToHours(workTimeMinutes)}</span>
            </li>
            <li>
                <span>Срок до:</span>
                <span>{Utils.formatDate(dateEnd)}</span>
            </li>
        </ul>
    );
};

export default ProjectViewInfo;
