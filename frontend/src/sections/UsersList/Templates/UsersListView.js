import React from 'react';

// Helpers
import Utils from '../../../utils/utils';

// Views
import Avatar from '../../../components/Views/Avatar/Avatar';
import { TableRow, TableRowItem } from '../../../components/Views/Table/Table';

const UsersListView = ({ users, onUserSelected }) => {
    return users.map((project) => {
        const { id, avatar, username, role = {}, email, workTimes = [], createdAt } = project;
        const workTimeMinutes = workTimes.reduce((total, item) => total + item.duration, 0);

        return (
            <TableRow key={id}>
                <TableRowItem>
                    <Avatar image={avatar} name={username} />
                </TableRowItem>
                <TableRowItem>{role.name}</TableRowItem>
                <TableRowItem>{email}</TableRowItem>
                <TableRowItem>{Utils.minutesToHours(workTimeMinutes)}</TableRowItem>
                <TableRowItem>{Utils.formatDate(createdAt)}</TableRowItem>
            </TableRow>
        );
    });
};

export default UsersListView;
