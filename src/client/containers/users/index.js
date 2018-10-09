import './style.less';
import React from 'react';
import { connect } from 'react-redux';
import Base from '@containers/Base';
import AutoCheck from '@containers/autocheck';
import Table from 'fast-table';
import columns from './columns';
import fetch from '@fetch';
import result from '@utils/result';
import Top from './Top';
import Action from '@actions';

@AutoCheck
class Users extends Base {
  state = {
    users: []
  };

  static fetch = async (store) => {
    const res = await fetch.get('/api/user/');
    return await result(res)
      .success((content) => store.dispatch({type: 'user.list_SUCCESS', result: content}));
  };

  componentWillMount() {
    const {users} = this.props;
    if (!users) {
      Action.emit('user.list');
    }
  }

  render() {
    const {prefixCls, users} = this.props;
    const prefix = `${prefixCls}-users`;
    return (
      <div className={prefix}>
        <Top prefixCls={prefix} />
        <Table
          columns={columns.call(this)}
          dataSource={users || []}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list.result
  };
}

export default connect(mapStateToProps)(Users);