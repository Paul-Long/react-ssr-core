import React from 'react';
import { findDOMNode } from 'react-dom';
import echarts from 'echarts';
import Left from './Left';
import Right from './Right';
import Top from './Top';
import Bottom from './Bottom';

class Charts extends React.Component {
  componentDidMount() {
    const option = {
      title: {
        text: '一天用电量分布',
        subtext: '纯属虚构',
        textStyle: {
          color: '#FFEBC8',
        },
        subtextStyle: {
          color: '#FFEBC8',
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} W'
        },
        axisPointer: {
          snap: true
        }
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
          lte: 6,
          color: 'green'
        }, {
          gt: 6,
          lte: 8,
          color: 'red'
        }, {
          gt: 8,
          lte: 14,
          color: 'green'
        }, {
          gt: 14,
          lte: 17,
          color: 'red'
        }, {
          gt: 17,
          color: 'green'
        }]
      },
      series: [
        {
          name: '用电量',
          type: 'line',
          smooth: true,
          data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
          markArea: {
            data: [[{
              name: '早高峰',
              xAxis: '07:30'
            }, {
              xAxis: '10:00'
            }], [{
              name: '晚高峰',
              xAxis: '17:30'
            }, {
              xAxis: '21:15'
            }]]
          }
        }
      ],
      animation: false,
      textStyle: {
        color: '#FFEBC8',
      }
    };
    const element = findDOMNode(this.chart);
    const mCharts = echarts.init(element);
    mCharts.setOption(option);
  }

  shouldComponentUpdate() {
    return false;
  }

  saveRef = name => node => (this[name] = node);

  render() {
    return (
      <div>
        <Left />
        <Right />
        <Top />
        <Bottom />
      </div>
    );
  }
}

export default Charts;