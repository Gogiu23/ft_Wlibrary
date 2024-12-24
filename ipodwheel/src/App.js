import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Head from "./components/Head";
import Footer from "./components/Footer";
import { useGlobal } from "./components/GlobalContext";
import { useEffect } from "react";

function App() {
  const { footer } = useGlobal();

  return (
    <div className="body">
      <Nav />
      <Head />
      <Main />
      {footer ? <Footer /> : null}
    </div>
  );
}

export default App;
