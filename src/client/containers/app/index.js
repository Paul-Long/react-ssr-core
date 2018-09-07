import './App.less';
import React from 'react';
import { Route } from 'react-router';
import Charts from '@containers/charts';
import Home from '@containers/home';
import Help from '@containers/help';
import About from '@containers/about';

class App extends React.PureComponent {
  render() {
    return (
      <div className='ssr-app'>
        <Route path='/charts' exact component={Charts} />
        <Route path='/help' exact component={Help} />
        <Route path='/about' exact component={About} />
        <Route path='/home' exact component={Home} />
      </div>
    );
  }
}

export default App;