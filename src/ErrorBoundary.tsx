// typescript
import * as React from 'react';
import { Header } from './Header'

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
        return { hasError: true };
    }

    componentDidCatch(error: unknown, info: any) {
        console.error('Error caught in ErrorBoundary:', error, info);
        this.setState({ errorInfo: info });
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return <Header />;
        }
        return this.props.children ?? null;
    }
}