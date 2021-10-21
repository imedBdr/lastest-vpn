import { BrowserRouter as Router , Switch } from "react-router-dom";
import Header from "./components/header";
import Statistics from "./components/statistics";


function App() {
  return (
    <Router>
      <Switch>
        <div className="LaselVPN">
          <Header/>
          <Statistics/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
