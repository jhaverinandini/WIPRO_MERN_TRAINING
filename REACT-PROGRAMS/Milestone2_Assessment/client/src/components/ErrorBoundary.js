import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;