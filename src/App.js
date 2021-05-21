import './css/style.css';

import Main from './screen/main';
import Platform from './screen/platform'

import Header from './components/common/Header.js'
import Footer from './components/common/Footer.js'

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="bg-dark">
        {/* header */}
        <Header/>
        
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/platform" component={Platform}/>
        </Switch>

        {/* footer */}
        <Footer/>
    </div>
  );
}

export default App;
