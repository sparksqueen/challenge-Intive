import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import { GlobalContext } from './context/GlobalContext';
import UserGrid from './components/UserGrid';
import DetailGrid from './components/DetailGrid';
import Animation from './components/Animation';


const App = () => {
  const [users, setUsers] = useState([])
  const [userData, setUserData] = useState([])

  return(
  <> 
    <GlobalContext.Provider value={{users, setUsers , userData , setUserData}}>
      <Router>
        
        <Switch>
          
          <Route exact path="/">  
            <Animation/>
            <UserGrid/>
          </Route>

          <Route path="/usr/:email"> 
            <DetailGrid users={users}/>
          </Route>

        </Switch>
      </Router>
    </GlobalContext.Provider>
  </>
  )

}

export default App;
