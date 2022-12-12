import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Helpers
import compose from '../../utils/compose';
import WithApi from '../../components/Hoc/WithApi';
import { fetchProject } from '../../actions';

// Views
import ProjectView from './Templates/ProjectView';
import StateContent from '../../components/Views/StateContent/StateContent';

const ProjectDetail = (props) => {
    useEffect(() => {
        updateSelected();
        updateTitle();
    }, []);

    const updateSelected = () => {
        const { selectedId, fetchProject } = props;

        if (!selectedId) {
            return;
        }

        fetchProject(selectedId);
    };

    const updateTitle = () => {
        const { project, setTitle } = props;

        if (project && project.name) {
            setTitle(project.name);
        }
    };

    const { project, loading, error } = props;

    return (
        <main>
            <StateContent loading={loading} error={error}>
                <ProjectView project={project} />
            </StateContent>
        </main>
    );
};

const mapStateToProps = ({ project: { project, error, loading } }) => {
    return { project, error, loading };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { apiService, selectedId } = ownProps;

    return {
        fetchProject: fetchProject(apiService, dispatch, selectedId),
    };
};

export default compose(WithApi(), connect(mapStateToProps, mapDispatchToProps))(ProjectDetail);
