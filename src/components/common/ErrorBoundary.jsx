import { Component } from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[ErrorBoundary]', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            role="alert"
            className="container mx-auto my-8 p-6 border-2 border-red-500/50 rounded-xl bg-red-900/20 text-red-200 font-mono text-center"
          >
            Oups, cette section a rencontré un problème. Rechargez la page ou réessayez plus tard.
          </div>
        )
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};
