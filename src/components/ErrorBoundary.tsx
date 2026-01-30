import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-red-950 text-white p-8 font-mono">
                    <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
                    <div className="bg-black/50 p-4 rounded border border-white/10 overflow-auto">
                        <h2 className="text-red-400 font-bold mb-2">{this.state.error?.toString()}</h2>
                        <pre className="text-xs text-gray-400 whitespace-pre-wrap">
                            {this.state.errorInfo?.componentStack}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
