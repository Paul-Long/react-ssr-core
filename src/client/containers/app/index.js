import './App.less';
import React from 'react';

class App extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className='ssr-app'>
        {children}
      </div>
    );
  }
}

export default App;