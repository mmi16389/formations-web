import * as React from 'react';
import * as RComponent from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import { api } from './services'
import {routesURL, RenderComponent} from './routes'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <RComponent.Layout.Menu />
        </div>
        <div style={{ marginTop: "70px" }}>
          <RComponent.Layout.Main>
          <Switch>
           {
             routesURL.map((route, i) => (
              <RenderComponent key={i} {...route} />
            ))         
           } 
            </Switch>
          </RComponent.Layout.Main>
        </div>
     </Router>
    );
  }
}

export default App;
