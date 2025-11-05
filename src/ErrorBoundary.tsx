import * as React from 'react';
import { Header } from "./Header";

type Props = {
    children?: React.ReactNode;
};

type State = {
    hasError: boolean;
    errorInfo: unknown | null;
};

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, errorInfo: null };
    }

    static getDerivedStateFromError(_: any): Partial<State> {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: unknown, info: any) {
        // You can also log the error to an error reporting service
        console.error('Error caught in ErrorBoundary:', error, info);
        this.setState({ errorInfo: info });
    }

    render() {
        if (this.state.hasError) {
            // Render the Header as the fallback UI (per user request)
            return <Header />;
        }

        // No error: render children normally
        return this.props.children ?? null;
    }
}