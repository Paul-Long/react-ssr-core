import React from 'react';
import {Button} from 'antd';
import title from '@utils/title';

class Help extends React.PureComponent {
  componentDidMount() {
    title.call(this);
  }
  render() {
    return (
      <div>
        <h1>Help</h1>
        <Button>button</Button>
      </div>
    );
  }
}

export default Help;