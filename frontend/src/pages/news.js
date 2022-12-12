import React from 'react';
import { useNavigate } from 'react-router-dom';

import Content from '../components/Views/Content/Content';
import NewsList from '../sections/NewsList/NewsList';

const News = () => {
    const navigate = useNavigate();

    return (
        <Content title="Новости">
            <NewsList onNewItemSelected={(id) => navigate(id)} />
        </Content>
    );
};

export default News;
