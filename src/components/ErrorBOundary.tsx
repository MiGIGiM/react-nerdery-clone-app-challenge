import React, { ReactNode } from 'react';
import { NotFound } from './NotFound';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    state: ErrorBoundaryState = {
        hasError: false,
    };

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <NotFound />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
