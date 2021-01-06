import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import {Product} from './components/Product';
import {ProductDetails} from './components/ProductDetails'

function App() {
  return (
    <div>
      
     <Router>
     <Header/>
     <Switch>
       <Route exact path="/" component={Product}/>
       <Route exact path="/product" component={Product} />
       <Route path="/product/:slug" component={ProductDetails} />
       <Route exact path="/contact" component={Contact} />
       <Route exact path="/about" component={About} />
       <Route path="*" component={()=><h2>404 Not Found</h2>}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
