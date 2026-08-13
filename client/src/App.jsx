import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/system/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full scrollbar-none">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
