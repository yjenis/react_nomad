import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link} from "react-router-dom";
  
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App2(){
  return (
    // /movie 경로가 / 경로보다 앞에 와야함
    <Router>
      <Switch>
        <Route path='/hello'>
          <h1>Hello~</h1>
        </Route>
        {/* 여기서 Route로 보내면 */}
        <Route path='/movie/:id'>
          <Detail/>
        </Route>
          
        <Route path='/'>
          <Home/>
        </Route>
        
      </Switch>
    </Router>);
}

export default App2;