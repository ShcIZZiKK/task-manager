import React from 'react';
import { connect } from 'react-redux';

// Helpers
import compose from '../../utils/compose';
import { fetchUsers } from '../../actions';
import WithApi from '../../components/Hoc/WithApi';

// Views
import StateContent from '../../components/Views/StateContent/StateContent';
import UsersView from './Templates/UsersView';

class Users extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users, loading, error, onUserSelected } = this.props;

        return (
            <main>
                <StateContent loading={loading} error={error}>
                    <UsersView users={users} onUserSelected={(id) => onUserSelected(id)} />
                </StateContent>
            </main>
        );
    }
}

const mapStateToProps = ({ users: { users, error, loading } }) => {
    return { users, error, loading };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { apiService } = ownProps;

    return {
        fetchUsers: fetchUsers(apiService, dispatch),
    };
};

export default compose(WithApi(), connect(mapStateToProps, mapDispatchToProps))(Users);
