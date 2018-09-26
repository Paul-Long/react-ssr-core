import React from 'react';
import Action from '@actions';
import AutoCheck from '@containers/autocheck';

@AutoCheck
class Home extends React.PureComponent {
  componentWillMount() {
    Action.emit('user.check');
  }

  render() {
    return (
      <div className='ssr-home'>
      </div>
    );
  }
}

export default Home;