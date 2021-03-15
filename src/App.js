
import './App.css';
import World from './features/world'
import Hand from './hand'
import Socket from './socket'
import Landing from './landing'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {



  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ Landing } />
        <Route path="/world" component= { World } />
        
        {/* // <World /> */}
        {/* <Hand /> */}
        {/* <Socket /> */}
    </Router>
    </div>
  );
}

export default App;
