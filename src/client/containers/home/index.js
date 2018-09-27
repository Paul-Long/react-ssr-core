import React from 'react';
import Action from '@actions';
import AutoCheck from '@containers/autocheck';
import title from '@utils/title';

@AutoCheck
class Home extends React.PureComponent {
  componentWillMount() {
    Action.emit('user.check');
  }

  componentDidMount() {
    title.call(this);
  }

  render() {
    return (
      <div className='ssr-home'>
      </div>
    );
  }
}

export default Home;