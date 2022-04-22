import React, { Component } from 'react'

class ErrorBoundary extends Component {

    state = { hasError: false, errorInfo: null }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and
        // re-render with error message
        this.setState({ error: error, errorInfo: errorInfo });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong</h2>
                </div>
            );
        }
        return this.props.children;
    };
};

export default ErrorBoundary;
