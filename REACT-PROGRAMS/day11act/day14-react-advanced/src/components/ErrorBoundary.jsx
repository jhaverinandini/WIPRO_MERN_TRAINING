import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h4>Something went wrong.</h4>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
