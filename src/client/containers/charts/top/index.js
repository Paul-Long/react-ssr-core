import React from 'react';
import Basic from '../Basic';
import { Icon, Radio } from 'antd';
import Group from './Group';
import { MAS, VALS, YIELDS, MaType } from '../varible';
import { IndicatorStatus } from '../varible';

class Top extends Basic {
  state = {
    maType: MaType.CHECKBOX,
  };

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    if (document.body.clientWidth < 1120) {
      this.setState({maType: MaType.DROPDOWN});
    } else if (this.state.maType !== MaType.CHECKBOX) {
      this.setState({maType: MaType.CHECKBOX});
    }
  };

  handleMaChange = (mas) => {
    const {manager} = this.props;
    const values = MAS.map(m => {
      return {
        indicator: m.value,
        status: mas.some(ma => ma === m.value) ? IndicatorStatus.OPEN : IndicatorStatus.CLOSE,
      };
    });
    manager.emit('indicator', values);
  };

  render() {
    const {prefixCls} = this.props;
    const {maType} = this.state;
    const prefix = `${prefixCls}-top`;
    return (
      <div className={prefix}>
        <Radio.Group size={'small'} defaultValue='a' className='ssr-radio-button'>
          <Radio.Button value='a'>十年国开债</Radio.Button>
          <Radio.Button value='b'>十年国债</Radio.Button>
        </Radio.Group>
        <Group className={`${prefix}-ma`} options={MAS} type={maType} onChange={this.handleMaChange}>
          <div className='dropdown-button'>
            分钟线 <Icon type='down' />
          </div>
        </Group>
        <Group className={`${prefix}-yield`} options={YIELDS} />
        <Group className={`${prefix}-val`} options={VALS} />
      </div>
    );
  }
}

export default Top;