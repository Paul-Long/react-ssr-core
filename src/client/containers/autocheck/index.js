import React from 'react';
import { connect } from 'react-redux';
import Spin from '@components/spin';
import Action from '@actions';
import receive from '@utils/receive';
import invariant from '@utils/invariant';

export default (Node) => {
  return connect(function (state) {
    return {
      check: state.user.check,
    };
  })(
    class AutoCheck extends React.Component {
      state = {
        checking: true,
      };

      componentWillMount() {
        Action.emit('user.check');
      }

      componentWillReceiveProps() {
        receive.call(this, 'check', ...arguments)
          .success(() => this.setState({checking: false}))
          .error((err) => {
            invariant(!err, err, 'error');
            this.props.history.push('/login');
          });
      }

      render() {
        const {checking} = this.state;
        return checking ? <Spin /> : <Node {...this.props} />;
      }
    }
  );
}