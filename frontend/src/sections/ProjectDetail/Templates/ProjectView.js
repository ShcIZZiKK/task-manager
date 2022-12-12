import React from 'react';

// Views
import Comments from '../../../components/Views/Comments/Comments';
import Detail from '../../../components/Views/Detail/Detail';
import ProjectParticipantsView from './ProjectParticipantsView';
import ProjectViewInfo from './ProjectViewInfo';

const ProjectView = ({ project }) => {
    const users = ProjectParticipantsView(project);
    const info = ProjectViewInfo(project);

    return (
        <div className="project">
            <Detail
                image={project.imageFull}
                status={project.status}
                title={project.name}
                users={users}
                info={info}
                purpose={project.purpose}
                description={project.description}
            />

            <Comments list={project.comments} />
        </div>
    );
};

export default ProjectView;
