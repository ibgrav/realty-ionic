import React from 'react';


const errorStyles = {
    position: 'fixed',
    width: '200px',
    left: 'calc(50% - 100px)',
    top: '100px',
    zIndex: '99999'
}

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            loading: false,
            error: ''
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={errorStyles}>
                    <b>Error</b> The application has encountered an error. Please reload and try again.
                </div>
            )
        } else return this.props.children
    }
}