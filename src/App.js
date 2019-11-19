import React,{Component} from 'react';
import Home from './Pages/Home';
import Temple from './Pages/Temple';
import TempleList from './Pages/TempleList';
import Contact from './Pages/Contact';
import TempleListDetail from './Pages/TempleListDetail';
import NavigationBar from './Components/NavigationBar';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
class App extends Component {
  render() {

    return (
      <React.Fragment>
        <BrowserRouter>
           <div>
           <NavigationBar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Home" component={Home} />
               <Route path="/Temple" component={Temple} />
              <Route path="/TempleList" component={TempleList} /> 
              <Route  path="/TempleListDetail/:id" component={TempleListDetail} />
              <Route  path="/Contact" component={Contact} />

            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
