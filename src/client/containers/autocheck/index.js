import React from 'react';
import { connect } from 'react-redux';
import hoistStatics from 'hoist-non-react-statics';
import fetch from '@fetch';
import invariant from '@utils/invariant';

export default (Node) => {
  return hoistStatics(connect(function (state) {
    return {
      check: state.user.check,
    };
  })(
    class AutoCheck extends React.Component {
      state = {
        checking: true,
      };

      componentDidMount() {
        const {pathname} = this.props.location;
        setTimeout(async () => {
          const res = await fetch.get('/api/user/check');
          const {status, message} = res;
          if (status === 400) {
            invariant(!message, message, 'error');
            this.props.history.push({
              pathname: '/login',
              state: {pathname},
            });
          }
        });
      }

      render() {
        return <Node {...this.props} />;
      }
    }
  ), Node);
}