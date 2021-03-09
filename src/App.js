import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";

function App() {
  const pathName = window.location.pathname;

  const displayPage = () => {
    switch (pathName) {
      case "/":
        return <Portfolio />;
      case "/About":
        return <About />;
      case "/Contact":
        return <Contact />;
      case "/Resume":
        return <Resume />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className="App">
      {console.log(pathName)}
      <Header />
      {displayPage()}
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
