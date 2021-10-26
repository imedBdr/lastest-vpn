import { BrowserRouter as Router , Switch } from "react-router-dom";
import Header from "./components/header";
import Statistics from "./components/statistics";
import Map from "./components/map";
import Sponsored from "./components/sponsored";
import Testimonial from "./components/testimonial";
import Subscribe from "./components/subscribe";
import Plans from "./components/plans";
import Footer from "./components/footer";
import Article from "./components/article";
const data  = require("./assets/data/revews.json");

function App() {
  return (
    <Router>
      <Switch>
        <div className="LaselVPN">
          <Header/>
          <Article 
            title={'Want anything to be easy with LaslesVPN.'}
            description={'Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.'}
            other={
              <button className={'btn btn-full btn-lg'}>Get Started</button>
            }
            picture={'./pictures/picture1.png'}
          />
          <Statistics />
          <Article 
            direction={'left'}
            title={'We Provide Many Features You Can Use'}
            description={'You can explore the features that we provide with fun and have their own functions each feature.'}
            other={
              <ul>
                <li>
                  <i className={'material-icons'}>done</i>
                  Powerfull online protection.
                </li>
                <li>
                  <i className={'material-icons'}>done</i>
                  Powerfull online protection.
                </li>
                <li>
                  <i className={'material-icons'}>done</i>
                  Supercharged VPN
                </li>
                <li>
                  <i className={'material-icons'}>done</i>
                  No specific time limits.
                </li>
              </ul>
            }
            picture={'./pictures/picture2.png'}
          />
          <div id={'colored'}>
            <Plans/>
            <Map/>
            <Sponsored/>
            <Testimonial reviews={data.list} />
            <Subscribe/>
          </div>
          <Footer/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
