import React from 'react';

// Views
import Card from '../../../components/Views/Card/Card';
import Utils from '../../../utils/utils';

const ProjectsView = ({ projects, onProjectSelected }) => {
    return (
        <div className="projects">
            {projects.map((project) => {
                return (
                    <Card
                        id={project.id}
                        image={project.image}
                        title={project.name}
                        subtitle={Utils.formatPrice(project.royalties)}
                        date={project.dateEnd}
                        users={project.team}
                        action={onProjectSelected}
                        progress={project.status}
                        key={project.id}
                    />
                );
            })}
        </div>
    );
};

export default ProjectsView;
