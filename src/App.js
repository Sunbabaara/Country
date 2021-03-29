import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Nav from "./components/Nav";
import Details from "./pages/Details";


function App() {
  return (
    <main>
      <Nav/>
      <Switch>
        <Route path ="/" component= {Home} exact />
        <Route path ="/countries" component= {Countries}/>
        <Route path ="/details/:name" component={Details}/>
      
      </Switch>
    </main>
  );
}

export default App;

