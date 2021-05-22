import Home from './screen/Home';
import Subpage from './screen/Subpage'

import Header from './components/common/Header.js'
import Footer from './components/common/Footer.js'

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="bg-dark">
        {/* header */}
        <Header/>
        
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Subpage" component={Subpage}/>
        </Switch>

        {/* footer */}
        <Footer/>
    </div>
  );
}

export default App;
