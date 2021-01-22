import Header from "./Components/Header";
import MainPreview from "./Components/MainPreview";
import AboutUs from "./Components/AboutUs";
import PartnersPreview from "./Components/PartnersPreview";
import Differences from "./Components/Differences";
import Footer from "./Components/Footer";
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
        <PartnersPreview />
        <Differences />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
