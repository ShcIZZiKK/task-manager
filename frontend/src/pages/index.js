import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layouts/Layout';

import Home from './home';
import News from './news';
import NewsItem from './news-item';
import Projects from './projects';
import Project from './project';
// import Users from './users';

const Pages = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/news" element={<News />} exact />
                <Route path="/news/:slug" element={<NewsItem />} />
                <Route path="/projects" element={<Projects />} exact />
                <Route path="/projects/:id" element={<Project />} />
                {/*<Route path="/users" element={<Users />} exact />*/}
            </Routes>
        </Layout>
    );
};

export default Pages;
