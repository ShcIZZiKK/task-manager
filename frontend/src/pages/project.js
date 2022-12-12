import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Content from '../components/Views/Content/Content';
import ProjectDetail from '../sections/ProjectDetail/ProjectDetail';

const Project = () => {
    const params = useParams();
    const [title, setTitle] = useState('');

    return (
        <Content title={title}>
            <ProjectDetail selectedId={params.id} setTitle={(newTitle) => setTitle(newTitle)} />
        </Content>
    );
};

export default Project;
