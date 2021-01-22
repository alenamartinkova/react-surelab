import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import HowItWorks from "./Pages/HowItWorks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
