import React from 'react';
import Bundle from 'react-router-bundle';

export default props => (
  <Bundle load={() => import('@containers/home/index')}>
    {(COM) => <COM {...props} title='首页' prefixCls='ssr-home' />}
  </Bundle>
)
