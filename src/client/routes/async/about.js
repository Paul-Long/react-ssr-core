import React from 'react';
import Bundle from 'react-router-bundle';

export default props => (
  <Bundle load={() => import('@containers/about/index')}>
    {(COM) => <COM {...props} title='关于' prefixCls='ssr-about' />}
  </Bundle>
)
