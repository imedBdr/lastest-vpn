import { BrowserRouter as Router , Switch } from "react-router-dom";
import Header from "./components/header";
import Statistics from "./components/statistics";
import Map from "./components/map";
import Sponsored from "./components/Sponsored";


function App() {
  return (
    <Router>
      <Switch>
        <div className="LaselVPN">
          <Header/>
          <Map/>
          <Sponsored/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
