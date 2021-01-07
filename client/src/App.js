import React from "react";
import Header from "./components/Header/Header";
import OffertsList from "./components/OffertsList/OffertsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OffertView from "./View/OffertView";
import Footer from "./components/Footer/Footer";
import NotFound from "./View/NotFound";
import CreateOffer from "./View/CreateOffer";
import LogInForm from "./View/LogInForm";
import cookie from "react-cookies";

class App extends React.Component {
  state = {
    offers: [],
    isLoged: false,
    userId: null,
    isLogedOut: false,
  };
  componentDidMount = () => {
    fetch("http://localhost:5000/getOffers")
      .then((res) => res.json())
      .then((offers) => this.setState({ offers: offers }));

    const userId = cookie.load("userId");
    const isLoged = cookie.load("isLoged");
    this.setState({
      userId: userId,
      isLoged: isLoged,
    });
  };
  changeIsLogedOut = (is) => {
    this.setState({
      isLogedOut: is,
    });
  };

  changeLogin = (is, id) => {
    if (is === true) {
      this.setState({
        isLoged: is,
        userId: id,
      });
      cookie.save("userId", id, { path: "/" });
      cookie.save("isLoged", is, { path: "/" });
    }
  };
  render() {
    if (this.state.isLogedOut === true) {
      alert("wylogowano");
    }
    return (
      <div>
        <Router>
          <Header
            isLoged={this.state.isLoged}
            changeIsLogedOut={this.changeIsLogedOut}
          />
          <Switch>
            <Route
              path="/"
              component={() => <OffertsList offers={this.state.offers} />}
              exact
            />
            <Route
              path="/offert/:id"
              component={({ match }) => (
                <OffertView paramsId={match.params.id} />
              )}
              exact
            />
            <Route
              path="/create-offer"
              component={() => <CreateOffer isLoged={this.state.isLoged} />}
            />
            <Route
              path="/login"
              component={() => (
                <LogInForm
                  changeLogin={this.changeLogin}
                  isLoged={this.state.isLoged}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
