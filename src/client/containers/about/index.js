import './style.less';
import React from 'react';
import Charts from '@containers/charts';
import Help from '@containers/help';

class About extends React.PureComponent {
  render() {
    return (
      <div className='ssr-about'>
        <div style={{flex: 1, position: 'relative'}}>
          <Charts />
        </div>
        <div style={{flex: 1, position: 'relative'}}>
          <Help />
        </div>
      </div>
    );
  }
}

export default About;