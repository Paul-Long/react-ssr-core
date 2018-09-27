import './App.less';
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const {children} = this.props;
    return (
      <div className='ssr-app'>
        {children}
      </div>
    );
  }
}

export default App;