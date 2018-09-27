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

@AutoCheck
class CosFile extends Base {
  state = {
    files: [],
  };

  componentWillMount() {
    Action.emit('cosFile.list');
  }

  componentWillReceiveProps(nextProps) {
    receive.call(this, 'files', ...arguments)
      .success(({content}) => {
        this.setState({files: content});
      })
      .error(err => {
        invariant(!err, err, 'error');
        this.setState({files: []});
      });
  }

  rowClassName = (r, i) => {
    return `row-${i % 2}`;
  };

  render() {
    const {files} = this.state;
    const {prefixCls} = this.props;
    const prefix = `${prefixCls}-cos`;
    return (
      <div className={prefix}>
        <Table
          columns={columns.call(this)}
          dataSource={files}
          rowHeight={60}
          rowClassName={this.rowClassName}
          bordered
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    files: state.cosFile.list
  };
}

export default connect(mapStateToProps)(CosFile);