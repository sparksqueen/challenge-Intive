
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserGrid from './components/UserGrid';
import { BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";
import DetailedUser from './components/DetailedUser';

const App = () => {
  return(
  <> 
      <Router>
        <Switch>
          
          <Route exact path="/">  
            <UserGrid/>
          </Route>

          <Route path="/detalles">  
            <DetailedUser/>
          </Route>

        </Switch>
      </Router>
  </>
  )

}

export default App;
