import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Helpers
import compose from '../../utils/compose';
import { fetchNews } from '../../actions';
import WithApi from '../../components/Hoc/WithApi';

// Views
import NewsView from './Templates/NewsView';
import StateContent from '../../components/Views/StateContent/StateContent';

const NewsList = (props) => {
    useEffect(() => {
        props.fetchNews();
    }, []);

    const { news, loading, error, onNewItemSelected } = props;

    return (
        <main>
            <StateContent loading={loading} error={error}>
                <NewsView news={news} onNewItemSelected={(id) => onNewItemSelected(id)} />
            </StateContent>
        </main>
    );
};

const mapStateToProps = ({ news: { news, error, loading } }) => {
    return { news, error, loading };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { apiService } = ownProps;

    return {
        fetchNews: fetchNews(apiService, dispatch),
    };
};

export default compose(WithApi(), connect(mapStateToProps, mapDispatchToProps))(NewsList);
