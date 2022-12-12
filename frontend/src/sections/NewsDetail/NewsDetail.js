import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Helpers
import compose from '../../utils/compose';
import WithApi from '../../components/Hoc/WithApi';
import { fetchNewsItem } from '../../actions';

// Views
import NewsDetailView from './Templates/NewsDetailView';
import StateContent from '../../components/Views/StateContent/StateContent';

const NewsDetail = (props) => {
    useEffect(() => {
        updateSelected();
    }, []);

    const updateSelected = () => {
        const { selectedId, fetchNewsItem } = props;

        if (!selectedId) {
            return;
        }

        fetchNewsItem(selectedId);
    };

    const { newsItem, loading, error } = props;

    return (
        <main>
            <StateContent loading={loading} error={error}>
                <NewsDetailView newsItem={newsItem} />
            </StateContent>
        </main>
    );
};

const mapStateToProps = ({ newsItem: { newsItem, error, loading } }) => {
    return { newsItem, error, loading };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { apiService, selectedId } = ownProps;

    return {
        fetchNewsItem: fetchNewsItem(apiService, dispatch, selectedId),
    };
};

export default compose(WithApi(), connect(mapStateToProps, mapDispatchToProps))(NewsDetail);
