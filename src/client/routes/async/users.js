import React from 'react';
import Bundle from 'react-router-bundle';

export default props => (
  <Bundle load={() => import('@containers/users/index')}>
    {(COM) => <COM {...props} title='用户' prefixCls='ssr' />}
  </Bundle>
)
