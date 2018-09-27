import './style.less';
import React from 'react';
import { connect } from 'react-redux';
import Base from '@containers/Base';
import Action from '@actions';
import AutoCheck from '@containers/autocheck';
import Table from 'fast-table';
import columns from './columns';
import receive from '@utils/receive';
import invariant from '@utils/invariant';
import Top from './Top';

@AutoCheck
class Users extends Base {
  state = {
    users: []
  };

  componentWillMount() {
    Action.emit('user.list');
  }

  componentWillReceiveProps(nextProps) {
    receive.call(this, 'users', ...arguments)
      .success(({content}) => {
        this.setState({users: content});
      })
      .error(err => {
        invariant(!err, err, 'error');
        this.setState({users: []});
      });
  }

  render() {
    const {prefixCls} = this.props;
    const {users} = this.state;
    const prefix = `${prefixCls}-users`;
    return (
      <div className={prefix}>
        <Top prefixCls={prefix} />
        <Table
          columns={columns.call(this)}
          dataSource={users}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list
  };
}

export default connect(mapStateToProps)(Users);