import React from 'react';
import Bundle from 'react-router-bundle';

export default props => (
  <Bundle load={() => import('@containers/help/index')}>
    {(COM) => <COM {...props} title='帮助' prefixCls='ssr-help' />}
  </Bundle>
)
