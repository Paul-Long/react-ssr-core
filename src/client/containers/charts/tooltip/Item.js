import React from 'react';

export default function (props) {
  const {prefixCls, label, value, ...other} = props;
  return (
    <div className={`${prefixCls}-item`} {...other}>
      <label>{`${label}${value ? ':' : ''}`}</label>
      <span>{value}</span>
    </div>
  );
}
