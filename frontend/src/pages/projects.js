import React from 'react';
import { useNavigate } from 'react-router-dom';

import Content from '../components/Views/Content/Content';
import ProjectList from '../sections/ProjectsList/ProjectsList';

const Projects = () => {
    const navigate = useNavigate();

    return (
        <Content title="Проекты компании">
            <ProjectList onProjectSelected={(id) => navigate(id)} />
        </Content>
    );
};

export default Projects;
