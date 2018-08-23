import './App.less';
import React from 'react';
import Action from '@actions';

class App extends React.PureComponent {
  componentWillMount() {
    Action.emit('user.permission');
  }

  render() {
    const { children } = this.props;
    return (
      <div className='ssr-app'>
        {children}
        <p style={{color: 'white'}}>12345</p>
      </div>
    );
  }
}

export default App;