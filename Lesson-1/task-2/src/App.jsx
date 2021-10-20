import React from 'react';
import Header from './Header.jsx';
import { userDate, UserContext } from './user-context';

class App extends React.Component {
  state = {
    userDate,
  };

  render() {
    return (
      <div className="page">
        <UserContext.Provider value={this.state.userDate}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
