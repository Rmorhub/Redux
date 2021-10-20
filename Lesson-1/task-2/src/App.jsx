import React from 'react';
import Header from './Header.jsx';
import { user, userContext } from './userData-context';

class App extends React.Component {
  state = {
    userDate: user,
  };

  render() {
    return (
      <div className="page">
        <Header />
      </div>
    );
  }
}

App.contextType = userContext;

export default App;
