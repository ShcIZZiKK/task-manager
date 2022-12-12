import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WithApi from '../Hoc/WithApi';

import '../../common/styles/styles.scss';

class App extends React.Component {
    state = {
        news: [],
        loading: true,
        error: false,
    };

    componentDidMount() {
        const { getNews } = this.props;

        const slug = 'novost_2';

        getNews(slug)
            .then(({ news }) => {
                this.setState({
                    news,
                    loading: false,
                });
            })
            .catch((error) => {
                this.onError(error);
            });
    }

    onError = (error) => {
        console.error(error);

        this.setState({
            loading: false,
            error: true,
        });
    };

    render() {
        const { news, loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <p>Ошибка</p> : null;
        const spinner = loading ? <p>Загрузка...</p> : null;
        const content = hasData
            ? news.map((newsItem) => {
                  const { id, title, text, author } = newsItem;
                  return (
                      <div key={id}>
                          <p>{id}</p>
                          <div>
                              <img src={author.avatar} alt={author.username} />
                              <em>{author.username}</em>
                          </div>
                          <h3>{title}</h3>
                          <p>{text}</p>
                      </div>
                  );
              })
            : null;

        return (
            <div>
                <main>
                    {spinner}
                    {content}
                    {errorMessage}
                    <Routes>
                        <Route path="/" element={<p>Начало</p>} exact />
                    </Routes>
                </main>
            </div>
        );
    }
}

const mapMethods = (apiService) => {
    return {
        getNews: apiService.getNews,
    };
};

export default WithApi(mapMethods)(App);
