
import { Route } from 'react-router-dom';
import classes from './App.module.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';

import {BrowserRouter} from 'react-router-dom';
import Home from './Containers/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <header>
        <NavigationBar />
      </header>
      <Route exact path="/" component={Home}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
