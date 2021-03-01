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
//  console.log(users.length)

  return(
  <> 
    <GlobalContext.Provider value={{users, setUsers}}>
      <Router>
        
        <Switch>
          
          <Route exact path="/">  
            <Animation/>
            <UserGrid/>
          </Route>

          <Route path="/usr/:username"> 
            <DetailGrid users={users}/>
          </Route>

        </Switch>
      </Router>
    </GlobalContext.Provider>
  </>
  )

}

export default App;
