import React from 'react';
import Bundle from 'react-router-bundle';

export default props => (
  <Bundle load={() => import('@containers/charts/index')}>
    {(COM) => <COM {...props} title='图表' prefixCls='ssr-charts' />}
  </Bundle>
)