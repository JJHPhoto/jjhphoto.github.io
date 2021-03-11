import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import projects from "./projects.json";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Resume } from "./pages/Resume";

function App() {
  return (
    <>
      <Header />
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
