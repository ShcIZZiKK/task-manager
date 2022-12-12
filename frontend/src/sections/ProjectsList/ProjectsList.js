import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Helpers
import compose from '../../utils/compose';
import WithApi from '../../components/Hoc/WithApi';
import { fetchProjects } from '../../actions';

// Views
import ProjectsView from './Templates/ProjectsView';
import StateContent from '../../components/Views/StateContent/StateContent';

const ProjectsList = (props) => {
    useEffect(() => {
        props.fetchProjects();
    }, []);

    const { projects, loading, error, onProjectSelected } = props;

    return (
        <main>
            <StateContent loading={loading} error={error}>
                <ProjectsView
                    projects={projects}
                    onProjectSelected={(id) => onProjectSelected(id)}
                />
            </StateContent>
        </main>
    );
};

const mapStateToProps = ({ projects: { projects, error, loading } }) => {
    return { projects, error, loading };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { apiService } = ownProps;

    return {
        fetchProjects: fetchProjects(apiService, dispatch),
    };
};

export default compose(WithApi(), connect(mapStateToProps, mapDispatchToProps))(ProjectsList);
