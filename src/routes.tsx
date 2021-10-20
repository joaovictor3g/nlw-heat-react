import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}