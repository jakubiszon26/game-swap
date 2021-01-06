import React from "react";
import Header from "./components/Header/Header";
import OffertsList from "./components/OffertsList/OffertsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OffertView from "./View/OffertView";
import Footer from "./components/Footer/Footer";
import NotFound from "./View/NotFound";
import CreateOffer from "./View/CreateOffer";
import LogInForm from "./View/LogInForm";

class App extends React.Component {
  state = {
    offers: [],
    isLoged: false
  };
  componentDidMount = () => {
    fetch("http://localhost:5000/getOffers")
      .then((res) => res.json())
      .then((offers) => this.setState({ offers: offers }));
  };
  changeLogin = (is) => {
    this.setState({
      isLoged: is
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              component={() => <OffertsList offers={this.state.offers} />}
              exact
            />
            <Route
              path="/offert/:id"
              component={({ match }) => (
                <OffertView
                  paramsId={match.params.id}
                />
              )}
              exact
            />
            <Route path="/create-offer" component={CreateOffer} />
            <Route path="/login" component={() => <LogInForm changeLogin={this.changeLogin} />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
