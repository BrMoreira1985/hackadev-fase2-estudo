import "./App.css";
import "./assets/Global_styles.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-header">
          <Header />
        </div>

        <div className="app-main"></div>

        <div className="app-footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
