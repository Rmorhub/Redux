import React from 'react';
import Header from './Header.jsx';
import { userContext } from './user-context';

class App extends React.Component {
  state = {
    userDate: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <div className="page">
        <userContext.Provider value={this.state.userDate}>
          <Header />
        </userContext.Provider>
      </div>
    );
  }
}

export default App;
