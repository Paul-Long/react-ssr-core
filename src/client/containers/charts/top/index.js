import React from 'react';
import Basic from '../Basic';
import { Radio, Checkbox } from 'antd';

class Top extends Basic {
  render() {
    const {prefixCls} = this.props;
    const prefix = `${prefixCls}-top`;
    return (
      <div className={prefix}>
        <Radio.Group size={'small'} defaultValue='a' className='ssr-radio-button'>
          <Radio.Button value='a'>十年国开债</Radio.Button>
          <Radio.Button value='b'>十年国债</Radio.Button>
        </Radio.Group>
        <div className={`${prefix}-ma`}>
          <Checkbox.Group size='small' className='ssr-checkbox-group'>
            <Checkbox value='MA5'>MA5</Checkbox>
            <Checkbox value='MA10'>MA10</Checkbox>
            <Checkbox value='MA20'>MA20</Checkbox>
            <Checkbox value='MA60'>MA60</Checkbox>
            <Checkbox value='MA120'>MA120</Checkbox>
            <Checkbox value='MA250'>MA250</Checkbox>
            <Checkbox value='MACD'>MACD</Checkbox>
            <Checkbox value='Quartile'>四分位</Checkbox>
          </Checkbox.Group>
        </div>
        <div className={`${prefix}-yield`}>
          <Checkbox.Group size='small' className='ssr-checkbox-group'>
            <Checkbox value='gov_yield'>中债国债10Y</Checkbox>
            <Checkbox value='csi_yield'>中债国开10Y</Checkbox>
          </Checkbox.Group>
        </div>
        <div className={`${prefix}-val`}>
          <Checkbox.Group size='small' className='ssr-checkbox-group'>
            <Checkbox value='cdc_val'>中债估值</Checkbox>
            <Checkbox value='csi_val'>中证估值</Checkbox>
          </Checkbox.Group>
        </div>
      </div>
    );
  }
}

export default Top;