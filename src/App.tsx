import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";

function App() {
  return (
    <>
      <BrowserRouter>
        <ActiveSectionContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </ActiveSectionContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
