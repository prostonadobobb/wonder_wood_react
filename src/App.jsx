import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};