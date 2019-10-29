import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import Home from './sections/Home';
import Checkboxs from './sections/Checkboxs';
import Buttons from './sections/Buttons';
import Inputs from './sections/Inputs';

const App = () =>
  <div>

    <table>
      <tbody>
        <tr>
          <td className="w-200">

            <dl>
              <dt>main</dt>
                <dd><Link to="/">home</Link></dd>
              <dt>forms</dt>
                <dd><Link to="/checkboxs">checkboxs</Link></dd>
                <dd><Link to="/buttons">buttons</Link></dd>
                <dd><Link to="/inputs">inputs</Link></dd>
            </dl>

          </td>
          <td>
            <Switch>
              <Route path="/" exact render={ props => <Home /> } />
              <Route path="/home" exact render={ props => <Home /> } />
              <Route path="/checkboxs" exact render={ props => <Checkboxs /> } />
              <Route path="/buttons" exact render={ props => <Buttons /> } />
              <Route path="/inputs" exact render={ props => <Inputs /> } />
            </Switch>
          </td>

        </tr>
      </tbody>
    </table>

  </div>

export default App;
