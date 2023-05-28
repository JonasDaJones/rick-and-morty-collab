// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
function App() {
  return (
    <div className="app--body">
      <Header className="header" />
      <Main className="main" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
