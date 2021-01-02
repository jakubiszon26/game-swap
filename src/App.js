import "./App.css";
import Header from "./components/Header/Header";
import OffertsList from "./components/OffertsList/OffertsList";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import OffertView from "./View/OffertView"
import Footer from './components/Footer/Footer'
import NotFound from './View/NotFound'
import CreateOffer from './View/CreateOffer';

function App() {
  return (
    <>
      
      <Router >
      <Header/>
        <Switch>
        <Route path="/" component={OffertsList} exact />
        <Route path="/offert/:id" component={OffertView}/>
        <Route path="/create-offer" component={CreateOffer} />
        <Route component={NotFound}  />
        </Switch>
      </Router>
      <Footer />
    </>
   
  );
}


export default App;
