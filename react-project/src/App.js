import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import HowItWorks from "./Pages/HowItWorks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";
import { createBrowserHistory } from "history";
import { ContactContextProvider } from "./Contexts/ContactContext";

function App() {
  const history = createBrowserHistory();

  return (
    <ThemeProvider theme={theme}>
      <ContactContextProvider>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Switch>
            <Route path="/jak-to-funguje" exact component={HowItWorks} />
          </Switch>
          <Footer />
        </Router>
      </ContactContextProvider>
    </ThemeProvider>
  );
}

export default App;
