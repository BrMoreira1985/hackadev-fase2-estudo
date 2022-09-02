import "./App.css";
import "./assets/Global_styles.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Rotas from "./assets/Rotas";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app-header">
          <Header />
        </div>

        <div className="app-container">
          <div className="app-main">
            <Rotas />
          </div>

          <div className="app-footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
