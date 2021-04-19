import * as React from 'react';
import * as RComponent from './components'

// import { api } from './services'

class App extends React.Component {

  render() {
    return (
      <>
        <div>
          <RComponent.Layout.Menu />
        </div>
        <div style={{ marginTop: "60px" }}>
          <RComponent.Layout.Main />
        </div>

      </>
    );
  }
}

export default App;
