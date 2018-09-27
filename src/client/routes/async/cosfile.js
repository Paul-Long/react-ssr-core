import React from 'react';
import Bundle from 'react-router-bundle';

export default props => (
  <Bundle load={() => import('@containers/cosfile/index')}>
    {(COM) => <COM {...props} title='图片管理' prefixCls='ssr' />}
  </Bundle>
)
