import React, { Component } from 'react';
import ErrorIndicator from '../Views/ErrorIndicator/ErrorIndicator';

export default class ErrorBoundary extends Component {
    state = {
        hasRenderError: false,
    };

    componentDidCatch = () => {
        this.setState({
            hasRenderError: true,
        });
    };

    render() {
        if (this.state.hasRenderError) {
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}
