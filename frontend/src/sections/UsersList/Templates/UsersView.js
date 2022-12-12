import React from 'react';

// Views
import UsersListView from './UsersListView';
import { Table } from '../../../components/Views/Table/Table';

const UsersView = (props) => {
    const headerItems = ['Имя', 'Должность', 'Email', 'Отработанных часов', 'Создан'];
    const publicType = 'public';
    const workersUsers = props.users.filter((user) => user.role.type !== publicType);
    const publicUsers = props.users.filter((user) => user.role.type === publicType);

    return (
        <div className="users">
            <Table title="Список работников" header={headerItems}>
                <div className="projects__content">
                    <UsersListView users={workersUsers} />
                </div>
            </Table>
            <Table title="Список пользователей" header={headerItems}>
                <div className="projects__content">
                    <UsersListView users={publicUsers} />
                </div>
            </Table>
        </div>
    );
};

export default UsersView;
