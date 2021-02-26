
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router , Switch , Route , Link } from "react-router-dom";
import { GlobalContext } from './context/GlobalContext';
import UserGrid from './components/UserGrid';
import DetailedUser from './components/DetailedUser';


const App = () => {
  const [users, setUsers] = useState([])

  return(
  <> 
    <GlobalContext.Provider value={{users, setUsers}}>
      <Router>
        <Switch>
          
          <Route exact path="/">  
            <UserGrid/>
          </Route>

          <Route path="/usr/:email"> 
            <DetailedUser/>
          </Route>

        </Switch>
      </Router>
    </GlobalContext.Provider>
  </>
  )

}

export default App;
