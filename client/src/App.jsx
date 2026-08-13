import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/system/Header";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      {/* <Header /> */}
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
