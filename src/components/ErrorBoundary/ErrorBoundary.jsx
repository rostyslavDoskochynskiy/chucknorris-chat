import React from 'react';
import { withRouter } from 'react-router-dom';
import ReplayIcon from '@material-ui/icons/Replay';
import { routes } from '@app/config/routes';
import { AppText } from '@app/components/ui/AppText';
import { ButtonBase } from '../Button';
import { ErrorBoundaryContainer } from './style';

class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.warn('Global render error has been caught: ', error, info);
  }

  /**
   * @description Redirect to Main page and render the app again.
   */
  skipError = () => {
    this.props.history.push(routes.profile.users);
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="error-boundary">
          <ErrorBoundaryContainer>
            <AppText>Something went wrong.</AppText>
            <ButtonBase
              style={{ marginTop: '10px' }}
              color="primary"
              size="small"
              startIcon={<ReplayIcon />}
              onClick={this.skipError}
            >
              Try again.
            </ButtonBase>
          </ErrorBoundaryContainer>
        </section>
      );
    }

    return this.props.children;
  }
}

export const ErrorBoundary = withRouter(ErrorBoundaryClass);
