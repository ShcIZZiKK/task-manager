import React from 'react';
import { useNavigate } from 'react-router-dom';

import Content from '../components/Views/Content/Content';
import UsersList from '../sections/UsersList/UsersList';

const Users = () => {
    const navigate = useNavigate();

    return (
        <Content title="Пользователи">
            <UsersList onProjectSelected={(id) => navigate(id)} />
        </Content>
    );
};

export default Users;
