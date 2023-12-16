import { useState, createContext, useCallback } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Yumeth from "./components/Yumeth";
import Todos from "./components/Todos";
import Trim from "./components/Trim";

const movieContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((t) => t + 1);
  }, []);

  const username = "Yumeth";

  return (
    <>
      <BrowserRouter>
        <movieContext.Provider value={{ increase, count, username }}>
          <Routes>
            <Route
              path="/"
              element={
                <Movies yumeth={increase} count={count} name={username} />
              }
            />
            <Route path="/yumeth" element={<Yumeth macbook={"Macbook"} />} />
            <Route path="/Todos" element={<Todos></Todos>}></Route>
            <Route path="/balls" element={<Trim></Trim>}></Route>
          </Routes>
        </movieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
