import Header from "./Components/Header";
import MainPreview from "./Components/MainPreview";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <MainPreview />
        <AboutUs />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
