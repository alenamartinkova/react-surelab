import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
