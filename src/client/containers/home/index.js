import React from 'react';
import AutoCheck from '@containers/autocheck';
import title from '@utils/title';

@AutoCheck
class Home extends React.PureComponent {
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