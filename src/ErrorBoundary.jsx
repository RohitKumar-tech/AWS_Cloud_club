import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('App crashed:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#161E2D',
          color: '#fff',
          minHeight: '100vh',
          padding: '40px',
          fontFamily: 'monospace',
        }}>
          <h2 style={{ color: '#f87171' }}>Render Error</h2>
          <pre style={{
            background: '#0f1623',
            padding: '20px',
            borderRadius: '8px',
            color: '#fca5a5',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}>
            {this.state.error?.toString()}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
