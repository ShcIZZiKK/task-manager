import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Content from '../components/Views/Content/Content';
import NewsDetail from '../sections/NewsDetail/NewsDetail';

const NewsItem = () => {
    const params = useParams();

    return (
        <Content title="Детальная информация новости">
            <NewsDetail selectedId={params.slug} />
        </Content>
    );
};

export default NewsItem;
